import React from 'react';
import PropTypes from 'prop-types';
import p6 from 'assets/images/portraits/r6.jpg';
import photo_gallery from 'assets/images/photo/main_gallery.jpg';
import a20 from 'assets/images/arts/m20.jpg';
import lips from 'assets/images/arts/lips_small.jpg';
import { Link } from 'react-router-dom';
import LastWorksItem from 'components/LastWorksItem';


const GalleryBlock = () => {
  return (
    <div>
      <div className="level art-title is-mobile">
        <div className="level-item has-text-centered">
          <h1 className="title">THE ART</h1>
        </div>
      </div>
      <div className="level gallery-title is-mobile">
        <div className="level-item has-text-centered">
          <h2 className="subtitle">MY GALLERY</h2>
        </div>
      </div>
      <div className="columns last-works__body">
        <div className="column is-6">
          <Link to="/art">
            <LastWorksItem
              src={a20}>
              <span>Arts</span>
            </LastWorksItem>
          </Link>
        </div>
        <div className="column is-6 link_with_description">
          <Link to="/portrait">
            <LastWorksItem
              src={p6}>
              <span>Portraits</span>
            </LastWorksItem>
          </Link>
        </div>
      </div>
      <div className="columns last-works__body">
        <div className="column is-6">
          <Link to="/cryptoart">
            <LastWorksItem
              src={lips}>
              <span>Crypto Art</span>
            </LastWorksItem>
          </Link>
        </div>
        <div className="column is-6 link_with_description">
          <Link to="/photo">
            <LastWorksItem
              src={photo_gallery}>
              <span>Photo gallery</span>
            </LastWorksItem>
          </Link>
        </div>
      </div>
    </div>
  );
};

GalleryBlock.propTypes = {};

export default GalleryBlock;
