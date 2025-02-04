import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SHOP_DATA } from '../../features/shop/ShopSlice';  // Correct selectors

import './CollectionPage.scss';
import CollectionItem from '../../Components/collection-item/CollectionItem';

const CollectionPage = () => {
  const shopData = useSelector(SHOP_DATA);  // Correct selector for getting shop data
  const { collectionId } = useParams();

  // Convert shopData object to an array and find the category based on collectionId
  const category = Object.values(shopData).find(
    (cat) => cat.routeName === collectionId
  );

  if (!category) {
    return <h2 className='title'>Category Not Found</h2>;
  }

  return (
    <div className='collection-page'>
      <h2 className='title'>{category.title}</h2>
      <div className="items">
        {category.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
 