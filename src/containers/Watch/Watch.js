import React from "react";
import WatchContent from "./WatchContent/WatchContent";
import { bindActionCreators } from "redux";
import * as watchActions from "../../store/actions/watch";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";

function mapStateToProps(state) {
    return {
        youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    };
}

function mapDispatchToProps(dispatch){
    const fetchWatchDetails = watchActions.details.request;
    return bindActionCreators({fetchWatchDetails}, dispatch);
}

export class Watch extends React.Component {
    getVideoId() {
        const searchParams = new URLSearchParams(this.props.location.search);
        return searchParams.get('v');
    }
    render() {
        const videoId = this.getVideoId();
        return (<WatchContent videoId={videoId}/>);
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));
