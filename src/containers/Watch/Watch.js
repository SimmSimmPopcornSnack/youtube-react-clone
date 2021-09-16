import React from "react";
import WatchContent from "./WatchContent/WatchContent";
import { bindActionCreators } from "redux";
import * as watchActions from "../../store/actions/watch";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import { getSearchParam } from "../../services/url";
import { getChannelId } from "../../store/reducers/videos";
import * as commentActions from "../../store/actions/comment";
import { getCommentNextPageToken } from "../../store/reducers/comments";

export class Watch extends React.Component {
    getVideoId() {
        return getSearchParam(this.props.location, "v")
    }
    render() {
        const videoId = this.getVideoId();
        return (<WatchContent videoId={videoId}
                              channelId={this.props.channelId}
                              bottonReachedCallback={this.fetchMoreComments}
                              nextPageToken={this.props.nextPageToken}
        />);
    }
    
    componentDidMount() {
        if(this.props.youtubeLibraryLoaded) {
            this.fetchWatchContent();
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
            this.fetchWatchContent();
        }
    } 

    fetchWatchContent() {
        const videoId = this.getVideoId();
        if(!videoId) {
            this.props.history.push("/");
        }
        this.props.fetchWatchDetails(videoId, this.props.channelId);
    }
}

function mapStateToProps(state, props) {
    return {
        youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
        channelId: getChannelId(state, props.location, "v"),
        nextPageToken: getCommentNextPageToken(state, props.location),
    }
}

function mapDispatchToProps(dispatch){
    const fetchWatchDetails = watchActions.details.request;
    const fetchCommentThread = commentActions.thread.request;
    return bindActionCreators({fetchWatchDetails, fetchCommentThread}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));
