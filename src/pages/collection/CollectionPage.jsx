import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { SHOP_DATA } from "../../features/shop/ShopSlice";
import CollectionItem from "../../Components/collection-item/CollectionItem";
import {
  CollectionPageContainer,
  ItemsContainer,
  TitleContainer,
} from "./CollectionPageStyled";

const CollectionPage = () => {
  const shopData = useSelector(SHOP_DATA); // Correct selector for getting shop data
  const { collectionId } = useParams();

  // Convert shopData object to an array and find the category based on collectionId
  const category = Object.values(shopData).find(
    (cat) => cat.routeName === collectionId
  );

  if (!category) {
    return <h2 className="title">Category Not Found</h2>;
  }

  return (
    <CollectionPageContainer>
      <TitleContainer>{category.title}</TitleContainer>
      <ItemsContainer>
        {category.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
