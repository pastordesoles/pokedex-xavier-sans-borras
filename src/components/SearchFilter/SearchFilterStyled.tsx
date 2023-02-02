import styled from "styled-components";

const SearchFilterStyled = styled.div`
  display: flex;
  justify-content: center;
  .group {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 190px;
  }
  .input {
    width: 80%;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    border: 2px solid black;
    border-radius: 8px;
    outline: none;
    color: #0d0c22;
    transition: 0.3s ease;
  }
  .input::placeholder {
    color: #9e9ea7;
    font-size: 1rem;
  }
  .input:focus,
  input:hover {
    outline: none;
    border-color: rgba(27, 19, 45, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }
`;

export default SearchFilterStyled;
