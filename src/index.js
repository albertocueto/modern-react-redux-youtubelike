import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search-bar'
import YoutubeApiSearch from 'youtube-api-search'
import _ from 'lodash'

import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'

const API_KEY = 'AIzaSyAcv8X29G9zUiZb5JRJsdlbQIPDceIjezQ';
let initialSearch = "honest trailers";

YoutubeApiSearch({key: API_KEY, term: initialSearch}, function(data) {
    console.log(data);
});

//Create code, get html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch = this.videoSearch.bind(this);
        //this.videoSearch('honest trailers');
    }

    videoSearch(term) {
        console.log(`searching youtube for ${term}`);
        YoutubeApiSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ videos, selectedVideo: videos[0], maxResults: 10 })
        });
    }

    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (<div>
            <SearchBar onSearchTermChange={ term => videoSearch(term) } />
            <VideoDetail video={ this.state.selectedVideo } />
            <VideoList
                onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                term={initialSearch} videos={this.state.videos} />
        </div>);
    }
}

//get it into the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));