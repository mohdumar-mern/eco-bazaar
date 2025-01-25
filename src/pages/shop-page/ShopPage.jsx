import React, { useState } from "react";

import ShopData from "./ShopData";

import "./ShopPage.scss";
import PreviewCollection from "../../Components/preview-collection/PreviewCollection";
const ShopPage = () => {
  const [collections, setCollections] = useState(ShopData);
  return <div className="shop-page">
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))
    }
  </div>;
};

export default ShopPage;
