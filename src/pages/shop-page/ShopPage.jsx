import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../Components/collection-overview/CollectionOverview";
import CollectionPage from "../collection/CollectionPage";


const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route index element={<CollectionOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
