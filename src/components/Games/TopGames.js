import React, { Component } from "react";
import styled from "styled-components";
import GameCard from "./GameCard";

const Wrapper = styled.section`
  background: rgb(44, 62, 80);
  background: linear-gradient(
    90deg,
    rgba(44, 62, 80, 1) 0%,
    rgba(52, 73, 94, 1) 40%,
    rgba(52, 73, 94, 1) 60%,
    rgba(44, 62, 80, 1) 100%
  );

  display: grid;
  grid: 360px / repeat(auto-fill, minmax(204px, 1fr));
  grid-gap: 2rem;
  grid-auto-flow: column;

  justify-items: center;
  align-items: center;

  color: white;
  margin: 0;
  padding: 0 32px;

  height: 360px;

  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    /* width: 0px; */
    background: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default class TopGames extends Component {
  state = {
    topGames: [],
  };

  async componentDidMount() {
    try {
      const getTopGames = await fetch(
        "https://api.twitch.tv/kraken/games/top?client_id=hs85p2138sd7ka38xdc4n6ks9fsfwa"
      );
      const { top } = await getTopGames.json();
      // console.log(top);

      this.setState({
        topGames: top,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const topGamesList = this.state.topGames.map(
      ({ game, viewers, channels }) => (
        <GameCard
          game={game}
          viewers={viewers}
          channels={channels}
          key={game._id}
        />
      )
    );

    return <Wrapper>{topGamesList}</Wrapper>;
  }
}
