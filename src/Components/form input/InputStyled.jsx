import styled, { css } from 'styled-components';

// Variables equivalent to SASS variables
const subColor = 'grey';
const mainColor = 'black';

// Mixin equivalent: reusable CSS fragment
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

// Group container (maps to .group)
export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

// Styled Label (maps to .form-input-label)
// Defined before Input so we can reference it in the sibling selector
export const Label = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  /* If the 'shrink' prop is true, apply the shrink styles */
  ${({ shrink }) =>
    shrink &&
    css`
      ${shrinkLabelStyles}
    `}
`;

// Styled Input (maps to .form-input)
export const InputContainer = styled.input`
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

  &:focus {
    outline: none;
  }

  /* When this input is focused, target the sibling Label component for the shrink effect */
  &:focus ~ ${Label} {
    ${shrinkLabelStyles}
  }

  /* Additional styling for password inputs */
  &[type='password'] {
    letter-spacing: 0.3em;
  }
`;
