import React from "react";
import { Link } from "react-router-dom";
import _, { truncate } from "lodash";
import {
  Card,
  Preview,
  Viewers,
  StreamType,
  Info,
  Status,
  Badge,
  Logo,
  DisplayName,
  GameName,
} from "./styles";

const StreamCard = ({ stream }) => {
  const truncatedGameName = _.truncate(stream.channel.game, {
    length: 26,
    separator: " ",
  });
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
              <GameName>{truncatedGameName}</GameName>
            </Badge>
          </Info>
        </Card>
      </Link>
    </>
  );
};

export default StreamCard;
