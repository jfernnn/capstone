import React from 'react';
import { Link } from 'react-router-dom';

function AlbumCard({ album }) {
    return (
        <div>
            <h3>{album.album}</h3>
            <dl>
                <dd>{album.artist}</dd>
                <dd>{album.description}</dd>
            </dl>
        </div>
    );
}

export default AlbumCard;