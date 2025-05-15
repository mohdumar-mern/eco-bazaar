import styled from "styled-components";

// ✅ Responsive breakpoints
const mobile = '@media screen and (max-width: 768px)';
const tablet = '@media screen and (max-width: 1024px)';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const TitleContainer = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;

  ${tablet} {
    font-size: 32px;
  }

  ${mobile} {
    font-size: 26px;
    text-align: center;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  & .collection-item {
    margin-bottom: 30px;
  }

  ${tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mobile} {
    grid-template-columns: 1fr;
  }
`;
