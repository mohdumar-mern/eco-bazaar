import styled, { css } from 'styled-components';

// Colors
const subColor = 'grey';
const mainColor = 'black';

// Mixin for shrinking label
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

// Group container
export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;

// Styled label
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;

// Styled textarea
export const TextAreaField = styled.textarea`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  resize: vertical;
  outline: none;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;

// Container & form layout (unchanged from earlier)
export const ContactContainer = styled.div`
  width: 60%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
  color: #222;
`;

export const ContactForm = styled.form`
  width: 100%;
`;


