import styled, { css } from 'styled-components'

// ✅ Responsive breakpoints
const mobile = '@media screen and (max-width: 768px)';
const tablet = '@media screen and (max-width: 1024px)';

export const BgImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;

  ${mobile} {
    background-position: top;
  }
`

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #fff;
  opacity: 0.7;
  position: absolute;

  ${mobile} {
    padding: 0 10px;
    height: 70px;
  }

  ${tablet} {
    padding: 0 15px;
  }
`

const Large = css`
  height: 420px;

  ${mobile} {
    height: 280px;
  }
`

const getSize = props => props.size && Large;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  position: relative;

  ${getSize}

  &:hover {
    cursor: pointer;

    ${BgImageContainer} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${ContentContainer} {
      opacity: 0.9;
    }
  }

  ${mobile} {
    min-width: 100%;
    height: 200px;
    margin: 10px 0;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;

  ${mobile} {
    font-size: 18px;
  }
`

export const SubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;

  ${mobile} {
    font-size: 14px;
  }
`
