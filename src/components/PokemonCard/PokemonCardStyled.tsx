import styled from "styled-components";

const PokemonCardStyled = styled.li`
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    border: 1px solid black;
    height: 250px;
    width: 250px;
    background-color: white;

    img {
      object-fit: contain;
    }
  }

  @media only screen and (min-width: 1150px) {
    article {
      :hover {
        background-color: #bebebe;
      }
    }
  }
`;

export default PokemonCardStyled;
