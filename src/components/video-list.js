import React from 'react'
import VideoListItem from './video-list-item'

const VideoList = ({videos, term, onVideoSelect}) => {
    const videoItems = videos.map((video) => {
        return (<VideoListItem
            onVideoSelect={ onVideoSelect }
            video={ video }
            key={ video.etag } />)
    });

    return(
        <ul className="col-md-4 list-group">
            { videos.length } results for "<i>{ term }</i>"
            { videoItems }
        </ul>
    );
};

export default VideoList;