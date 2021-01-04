import styled from "styled-components";
export const ButtonGreen = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #299b01;
  min-width: 250px;
  min-height: 65px;
  font-size: 21px;
  line-height: 1.2;
  color: #ffffff;
  border-color: transparent;
  transition: 0.3s ease-in-out;
  margin: 0 auto;
  &:hover {
    color: #299b01;
    background: #ffffff;
    border-color: #299b01;
  }
  &:disabled {
    color: #000;
    background: #ccc;
    border-color: #aaa;
  }
`;
