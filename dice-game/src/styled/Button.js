import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color: white;
  border: none;
  min-width: 220px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.6s background ease-in;
  cursor: pointer;
  font-family: "Poppins";

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
