import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
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

const Preview = styled.div`
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

const Viewers = styled.span`
  justify-self: start;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 4px;
`;

const StreamType = styled.span`
  justify-self: end;
  background-color: rgba(255, 0, 0, 0.7);
  border-radius: 4px;
  padding: 4px;
  text-transform: uppercase;
`;

const Info = styled.div`
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

const Status = styled.div`
  max-height: 32px;
  white-space: nowrap;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 0.5rem;
`;

const Badge = styled.div`
  background: #eee5ff;
  padding: 0 20px 0 0;
  margin-bottom: 1rem;
  border-radius: 42px;
`;

const Logo = styled.img`
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

const DisplayName = styled.span`
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0 1rem;
`;

const StreamCard = ({ stream }) => {
  return (
    <>
      <Link to={`/stream/${stream.channel.name}`}>
        <Card>
          <Preview src={stream.preview.large}>
            <div>
              <Viewers>Viewers: {stream.viewers}</Viewers>
            </div>
            <div>
              <StreamType>{stream.stream_type}</StreamType>
            </div>
          </Preview>

          <Info>
            <Status>{stream.channel.status}</Status>
            <Badge>
              <Logo
                src={stream.channel.logo}
                alt={stream.channel.display_name}
              />
              <DisplayName>{stream.channel.display_name}</DisplayName>
            </Badge>
          </Info>
        </Card>
      </Link>
    </>
  );
};

export default StreamCard;
