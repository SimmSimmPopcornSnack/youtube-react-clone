import React from "react";
import {connect} from "react-redux";
import * as videoActions from "../../store/actions/video";
import {bindActionCreators} from "redux";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import { getVideoCategoryIds } from "../../store/reducers/videos";
import "./Home.scss";
import { SideBar } from "../SideBar/SideBar";
import HomeContent from "./HomeContent/HomeContent";
import { getVideosCategoryIds, videoCategoriesLoaded, videosByCategoryLoaded } from "../../store/reducers/videos";

export class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categoryIndex: 0,
        };
    }

    componentDidUpdate(prevProps){
        if(this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
            this.fetchCategoriesAndMostPopularVideos();
        } else if(this.props.videoCategories !== prevProps.videoCategories) {
            this.fetchVideoCategories();
        }
    }

    fetchVideoCategories() {
        const categoryStartIndex = this.state.categoryIndex;
        const categories = this.props.videoCategories.slice(categoryStartIndex, categoryStartIndex + 3);
        this.props.fetchMostPopularVideosCategory(categories);
        this.setState(prevState => {
            return {
                categoryIndex: prevState.categoryIndex + 3,
            };
        });
    }

    render() {
        return (
            <>
                <SideBar/>
                <HomeContent
                    bottomReachedCallback={this.bottomReachedCallback}
                    showLoader={this.shouldShowLoader()}/>
            </>
        );
    }

    bottomReachedCallback = () => {
        if(!this.props.videoCategoriesLoaded){
            return;
        }
        this.fetchVideosByCategory();
    };

    shouldShowLoader() {
        if(this.props.videoCategoriesLoaded && this.props.videosByCategoryLoaded){
            return this.state.categoryIndex < this.props.videoCategories.length;
        }
        return false;
    }

    componentDidMount() {
        if(this.props.youtubeLibraryLoaded) {
            this.fetchCategoriesAndMostPopularVideos();
        }
    }
    
    componentDidUpdate(prevProps) {
        console.log("updated");
        if(this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
            this.fetchCategoriesAndMostPopularVideos();
        }
    }

    fetchCategoriesAndMostPopularVideos() {
        this.props.fetchMostPopularVideos();
        this.props.fetchVideoCategories();
    }
}

function mapStateToProps(state) {
    return {
        youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
        videoCategories: getVideoCategoryIds(state),
        videoCategoriesLoaded: videoCategoriesLoaded(state),
        videosCategoryLoaded: videosByCategoryLoaded(state),
    }
}

function mapDispatchToProps(dispatch) {
    const fetchMostPopularVideos = videoActions.mostPopular.request;
    const fetchVideoCategories = videoActions.categories.request;
    const fetchMostPopularVideosCategory = videoActions.mostPopularByCategory.request;
    return bindActionCreators({fetchMostPopularVideos, fetchVideoCategories, fetchMostPopularVideosCategory}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
