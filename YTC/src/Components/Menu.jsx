import styled from "styled-components";

//Imports
import SdTube from "../Images/youtube.svg";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieIcon from "@mui/icons-material/Movie";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";
import HelpIcon from "@mui/icons-material/Help";
import LightModeIcon from "@mui/icons-material/LightMode";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";

//Styles
const Container = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #202020;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
  transition: all 0.3s ease;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={SdTube} />
          Sd.Tube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Item>
          <MusicNoteIcon />
          Music
        </Item>
        <Item>
          <SportsMotorsportsIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <MovieIcon />
          Movies
        </Item>
        <Item>
          <EmojiObjectsIcon />
          News
        </Item>
        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <ReportIcon />
          Report
        </Item>
        <Item>
          <HelpIcon />
          Help
        </Item>
        <Item>
          <LightModeIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
