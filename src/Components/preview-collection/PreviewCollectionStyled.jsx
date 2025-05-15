import styled from 'styled-components';

const mobile = '@media screen and (max-width: 768px)';
const tablet = '@media screen and (max-width: 1024px)';

export const PreviewCollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleHeading = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;

  
  ${tablet} {
    text-align: center;
  }
  ${mobile} {
    font-size: 24px;
    text-align: center;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; // ✅ allow items to wrap on smaller screens
  gap: 20px;       // ✅ add spacing between items

  ${tablet} {
    justify-content: space-around;
  }

  ${mobile} {
    flex-direction: column;
    align-items: center;
  }
`;
