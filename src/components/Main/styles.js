import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: top;
  margin: 0;
  padding: 2rem ${props => props.theme.page_padding_left_right};
  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 480px) {
    grid-template-rows: repeat(auto-fill, minmax(180px, 320px));
    padding: 1rem;
    grid-gap: 0rem;
  }
`;
