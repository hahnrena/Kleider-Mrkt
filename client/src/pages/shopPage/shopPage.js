import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collectionsOverview';
import CollectionPage from '../collectionpage/collectionPage';

const ShopPage = ({ match }) => {
    console.log(match)
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path }`} component = {CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}



export default ShopPage;