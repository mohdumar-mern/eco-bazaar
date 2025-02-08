import { useSelector } from "react-redux";

import { SHOP_DATA } from "../../features/shop/ShopSlice";
import PreviewCollection from "../preview-collection/PreviewCollection";
import { CollectionOverviewContainer } from "./CollectionOverviewStyled";

const CollectionOverview = () => {
  // Use useSelector to pull shopData from the state
  const collections = useSelector(SHOP_DATA);

  // Ensure collections is an object and map over its values (categories)
  return (
    <CollectionOverviewContainer>
      {Object.values(collections).map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

export default CollectionOverview;
