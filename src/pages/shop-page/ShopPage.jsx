import { useSelector } from "react-redux";

import { SHOP_DATA } from "../../features/shop/ShopSlice";

import "./ShopPage.scss";
import PreviewCollection from "../../Components/preview-collection/PreviewCollection";
const ShopPage = () => {
  const collections = useSelector(SHOP_DATA || []);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
