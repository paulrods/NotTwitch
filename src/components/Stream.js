import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import { getTopStreams } from "../../lib/twitchApi";
import { getStream } from "../../lib/twitchApi.js";
import Header from "./Header";

import { Info, Status, Badge, Logo, DisplayName, GameName } from "./StreamCard";

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

const Viewers = styled(GameName)`
  padding: 1rem 1rem 1rem 3rem;
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
    this.whereIsMyStream();
    this.interval = setInterval(() => {
      this.whereIsMyStream();
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async whereIsMyStream() {
    try {
      const { match } = this.props;
      const res = await getStream(match.params.id);
      const { stream } = res.data;
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
      <>
        <Header />
        <Wrapper>
          <iframe
            src={`https://player.twitch.tv/?channel=${this.state.name}`}
            height="360px"
            width="640px"
            frameBorder="0"
            scrolling="no"
            allowFullScreen={true}
          />

          <Status>{this.state.status}</Status>
          <Badge>
            <Logo src={this.state.logo} alt={this.state.displayName} />
            <DisplayName>{this.state.displayName}</DisplayName>
            <GameName>{this.state.game}</GameName>
          </Badge>

          <Badge>
            <Viewers>{this.state.viewers} viewers</Viewers>
          </Badge>
          <Link to="/">
            <p>{`< Back`}</p>
          </Link>
        </Wrapper>
      </>
    );
  }
}
