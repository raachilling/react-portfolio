import React from 'react';

const BlogFeaturedImage = props => {
  if (!props.img) {
    return null;
  }



  {featured_image_url ? (
    <div className="featured-image-wrapper">
      <img src={props.img} />
    </div>
  ) : null}
}

export default BlogFeaturedImage;