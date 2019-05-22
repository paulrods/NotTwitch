import styled from "styled-components";
import { GameName } from "../StreamCard/styles.js";

export const Wrapper = styled.section`
  display: grid;
  grid: auto auto / auto;
  grid-gap: 1rem;

  justify-items: center;
  align-items: top;

  margin: 0;
  padding: 2rem 32px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Viewers = styled(GameName)`
  padding: 1rem 1rem 1rem 3rem;
`;
