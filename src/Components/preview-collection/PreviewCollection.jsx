import CollectionItem from "../collection-item/CollectionItem";
import {
  PreviewCollectionContainer,
  PreviewContainer,
  TitleHeading,
} from "./PreviewCollectionStyled";

const PreviewCollection = ({ title, items }) => {
  return (
    <PreviewCollectionContainer>
      <TitleHeading>{title.toUpperCase()}</TitleHeading>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </PreviewCollectionContainer>
  );
};

export default PreviewCollection;
