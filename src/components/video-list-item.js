import React from 'react'

const ListItem = ({video, onVideoSelect}) => {
    let imageUrl = video.snippet.thumbnails.default.url;
    return(<li onClick={ () => onVideoSelect(video) } className="list-group-item video-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={ imageUrl } />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>)
};

export default ListItem;