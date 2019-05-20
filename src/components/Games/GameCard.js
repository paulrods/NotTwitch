import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: block;
  background: #263238;
  background: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  height: 285px;
  width: 204px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const Game = styled.div`
  display: grid;
  grid: 1fr 1fr 1fr / auto;
  grid-gap: 1rem;

  /* visibility: hidden; */
  opacity: 0;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);

  justify-items: center;
  align-items: center;

  text-align: center;

  padding: 1rem;
  height: 285px;
  width: 204px;

  div:first-child {
    text-transform: uppercase;
  }

  :hover {
    opacity: 1;
    transition: opacity 0.2s ease-in-out 0s;
    visibility: visible;
  }
`;

const GameCard = ({ game, viewers, channels }) => {
  return (
    <Card src={game.box.large}>
      <Game>
        <div>{game.name}</div>
        <div>{viewers} viewers</div>
        <div>{channels} channels</div>
      </Game>
    </Card>
  );
};

export default GameCard;
