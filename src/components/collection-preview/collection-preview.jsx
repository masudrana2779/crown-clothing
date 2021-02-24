import React from 'react';
import './collection-preview.scss';
import CollectionItem from "./collectionItems/collectionItems";

const CollectionPreview = ({title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx<4 ).map(({id, ...othersItemsProps})=>
                        <CollectionItem {...othersItemsProps} key={id} />
                    )
                }
            </div>
        </div>
    )
}
export default CollectionPreview;