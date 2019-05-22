import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid: 225px auto / 400px;
  grid-gap: 0;
  align-items: top;
  justify-items: center;
  background: #ffffff;
  padding: 0;
  margin-top: 0;
  margin-bottom: 2rem;
  border-radius: 4px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid: auto / 1fr 1fr;
  grid-gap: 1rem;
  justify-content: space-between;
  background: purple;
  background: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px 4px 0 0;
  width: 100%;
  height: auto;

  div {
    padding: 4px 8px;
    color: white;
    font-size: 12px;
  }

  div:first-child {
    justify-self: start;
  }

  div:last-child {
    justify-self: end;
  }
`;

export const Viewers = styled.span`
  justify-self: start;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 4px;
`;

export const StreamType = styled.span`
  justify-self: end;
  background-color: rgba(255, 0, 0, 0.7);
  border-radius: 4px;
  padding: 4px;
  text-transform: uppercase;
`;

export const Info = styled.div`
  display: grid;
  grid: 32px 48px / auto;
  grid-gap: 0rem;
  padding: 0 8px;
  align-items: center;
  justify-items: start;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const Status = styled.div`
  max-height: 32px;
  white-space: nowrap;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 0.5rem;

  margin-left: 0;
  text-overflow: ellipsis;
  transform: translateX(0);
  transition: 4s;
  transition-timing-function: ease-out;
  :hover {
    transform: translateX(calc(360px - 100%));
    margin-left: -360px;
  }
`;

export const Badge = styled.div`
  background: #eee5ff;
  padding: 0 20px 0 0;
  margin-bottom: 1rem;
  border-radius: 42px;
`;

export const Logo = styled.img`
  background: purple;
  background: url("../../assets/glitch.png");
  background: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 32px;
  height: auto;
  justify-self: start;
`;

export const DisplayName = styled.span`
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0 1rem;
  font-weight: bold;
`;

export const GameName = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0 1rem;
`;
