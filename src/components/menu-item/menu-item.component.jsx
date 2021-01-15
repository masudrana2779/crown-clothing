import React from 'react';

import './menu-item.style.scss';

const MenuItem = ({item}) => (    
    <div className={item.size ? `${item.size} menu-item` : 'menu-item' } key={item.id}>
    <div className='bgImg' style={{backgroundImage:`url(${item.imageUrl})`}} />
    <div className="content">
      <h1 className="title">{item.title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem;