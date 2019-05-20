import React, { Component } from "react";
import styled from "styled-components";
import StreamCard from "./StreamCard";
import { Route, Switch, Link } from "react-router-dom";

const Wrapper = styled.section`
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

export default class Stream extends Component {
  state = {
    displayName: "",
    name: "",
    status: "",
    viewers: "",
    game: "",
    logo: "",
  };

  async componentDidMount() {
    try {
      const { match } = this.props;

      const getStream = await fetch(
        `https://api.twitch.tv/kraken/streams/${
          match.params.id
        }?client_id=hs85p2138sd7ka38xdc4n6ks9fsfwa`
      );
      const { stream } = await getStream.json();
      console.log(stream);
      this.setState({
        displayName: stream.channel.display_name,
        name: stream.channel.name,
        status: stream.channel.status,
        viewers: stream.viewers,
        game: stream.game,
        logo: stream.channel.logo,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Wrapper>
        <iframe
          src={`https://player.twitch.tv/?channel=${this.state.name}`}
          height="360px"
          width="640px"
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}
        />
        <p>{this.state.logo}</p>
        <p>{this.state.displayName}</p>
        <p>{this.state.viewers} viewers</p>
        <p>{this.state.status}</p>
        <p>{this.state.game}</p>
        <p>steam!</p>
      </Wrapper>
    );
  }
}
