import React from 'react';

const BannerHorizontal = (props) => {
  const customStyle = props.custom_style || {};

  return (
    <div className="img-bg-horizontal" style={{
      ...customStyle
    }}>
      { props.children }
    </div>
  )
}

export default BannerHorizontal;