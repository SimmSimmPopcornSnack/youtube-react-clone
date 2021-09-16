import React from "react";
import "./Trending.scss";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import { SideBar } from "../SideBar/SideBar";
import { Sidebar } from "semantic-ui-react";
import * as videoActions from "../../store/actions/video";
import { 
    allMostPopularVideosLoaded,
    getMostPopularVideos,
    getMostPopularVideosNextPageToken
 } from "../../store/reducers/videos";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { InfiniteScroll } from "../../components/InfiniteScroll/InfiniteScroll";

class Trending extends React.Component {
    render () {
        const previews = this.getVideoPreviews();
        const loaderActive = this.shouldShowLoader(); 
        return (
            <>
                <Sidebar/>
                <div className="trending">
                    <InfiniteScroll bottomReachedCallback={this.fetchMoreVideos} showLoader={loaderActive}>
                        {previews}
                    </InfiniteScroll>
                </div>
            </>
        );
    }

    shouldShowLoader() {
        return !this.props.allMostPopularVideosLoaded;
    }

    getVideoPreviews() {
        return this.props.video.map(video => (
            <VideoPreview horizontal={true} expended={true} video={video} key={video.id} pathname={"/watch"}
                          search={`?v=` + video.id}/>)
        );
    }

    componentDidMount() {
        this.fetchMostPopularVideos();
    }

    componentDidUpdate(prevProps) {
        if(this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
            this.fetchTrendingVideos();
        }
    }
    fetchTrendingVideos() {
        if(this.props.youtubeLibraryLoaded) {
            this.props.fetchMostPopularVideos(20, true);
        }
    }
    fetchMoreVideos = () => {
        const {nestPageToken} = this.props;
        if(this.props.youtubeLibraryLoaded && nextPageToken) {
            this.props.fetchMostPopularVideos(12, true, nextPageToken);
        }
    };
 }

function mapStateToProps(state) {
    return {
        videos: getMostPopularVideos(state),
        youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
        allMostPopularVideosLoaded: allMostPopularVideosLoaded(state),
        nextPageToken: getMostPopularVideosNextPageToken(state),
    };
}

function mapDispatchToProps(dispatch) {
    const fetchMostPopularVideos = videoActions.mostPopular.request;
    return bindActionCreators({fetchMostPopularVideos}, dispatch);
}

export default Trending;
