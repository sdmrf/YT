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

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

//Styles
const Container = styled.div`
  flex: 1;
  height: 100vh;
  background-color: ${({ theme }) => theme.BgColor};
  color: ${({ theme }) => theme.Color};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
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

  &:hover {
    background-color: ${({ theme }) => theme.Soft};
    color: ${({ theme }) => theme.TextLight};
  }
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.TextLight};
  
`

const Hr = styled.hr`
  margin: 10px 0px;
  border: 1px solid ${({ theme }) => theme.Soft};
`;

const Login = styled.div`
  color: ${({ theme }) => theme.TextLight};
  margin: 10px 0px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #3c3b3b;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #3c3b3b;
    color: white;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 5px;

  border: none;
  border-radius: 25px;
  background-color: transparent;
  border: 1px solid #717171;
  color: #3ea6ff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 12px;

  &:hover {
    background-color: #3ea6ff;
    color: white;
  }
`;

const Menu = ({ DarkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={SdTube} />
          SdVids
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
        <Hr />
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign In to like videos, comment, and subscribe.
          <Button>
            <AccountCircleOutlinedIcon />
            Sign In
          </Button>
        </Login>
        <Hr />
        <Title>Best of SdVids</Title>
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
        <Hr />
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
        <Item onClick={() => setDarkMode(!DarkMode)}>
          <LightModeIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
