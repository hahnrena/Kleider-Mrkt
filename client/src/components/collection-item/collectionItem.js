import React from 'react';

import './collection-item.modules.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
    console.log(imageUrl)
    return(
    <div className='collection-item'>
        <div 
            className='item'
            style= {{
                backgroundImage: `url(${imageUrl})`
            }}
        >
        <div className='collection-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
        </div>

        </div>
    </div>
    )
}

export default CollectionItem;