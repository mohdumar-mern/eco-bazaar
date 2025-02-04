import { useSelector } from 'react-redux';
import { SHOP_DATA } from '../../features/shop/ShopSlice';

import './CollectionOverview.scss';
import PreviewCollection from '../preview-collection/PreviewCollection';

const CollectionOverview = () => {
  // Use useSelector to pull shopData from the state
  const collections = useSelector(SHOP_DATA);

  // Ensure collections is an object and map over its values (categories)
  return (
    <div className="collection-overview">
      {Object.values(collections).map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
