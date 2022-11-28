import React from 'react';

const BannerHorizontal = (props) => {
  const customStyle = props.customStyle || {};

  return (
    <div className="img-bg-horizontal" style={{
      ...customStyle
    }}>
      { props.children }
    </div>
  )
}

export default BannerHorizontal;