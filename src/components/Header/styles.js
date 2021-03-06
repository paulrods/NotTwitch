import styled from "styled-components";

export const Logo = styled.img`
  height: 24px;
  width: auto;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Wrapper = styled.header`
  top: 0;
  background: ${props => props.theme.header_background};
  background: linear-gradient(
    90deg,
    rgba(100, 65, 164, 1) 0%,
    rgba(137, 99, 208, 1) 40%,
    rgba(137, 99, 208, 1) 60%,
    rgba(100, 65, 164, 1) 100%
  );
  display: grid;
  grid: auto / 50px auto 50px;
  grid-gap: 0px;
  justify-content: space-between;
  align-content: center;
  padding: 0 32px;
  margin: 0;
  height: 52px;
  max-height: 52px;
  align-items: center;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);

  @media (max-width: 660px) {
    grid: auto / 50px auto;
  }
  @media (max-width: 480px) {
    grid: auto / auto;
    justify-content: center;
  }
`;
