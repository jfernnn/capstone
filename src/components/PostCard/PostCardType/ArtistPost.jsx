import React from 'react';
import { Link } from 'react-router-dom';


function ArtistCard({ artist }) {
    return (
        <div>
            <h3>{artist.artist}</h3>
            <dl>
                <dd>{artist.description}</dd>
            </dl>
        </div>
    );
}

export default ArtistCard;