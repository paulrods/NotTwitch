import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
