import styled from "styled-components";
import { css } from "styled-components";

export const SearchContainer = styled.div`
position: relative;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 4px solid  #108a02;
  padding: 5px;
  background: #ffffff;
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 50%;
      -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      border: 4px solid #108a02;

      @media (min-width: 768px) {
        width: 50%;
      }
    `}
`;


export const SearchInput = styled.input`
    font-family: 'Alata', sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 42px;
    line-height: 30px;
    outline: 0;
    border: 0;
    font-size: 1.7rem;
    border-radius: 20px;
    padding: 0 20px;
    margin: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    display: ${(props) => (props.showSearchInput ? "block" : "none")};

`;


