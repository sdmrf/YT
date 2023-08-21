import styled from "styled-components";

//Imports
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  height: 56px;
  background-color: ${({ theme }) => theme.LightBgColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  gap: 5px;

  border: 1px solid #717171;
  border-radius: 5px;
  width: 50%;

  position: absolute;
  left: 0;
  right: 0;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:focus-within {
    border: 1px solid #3ea6ff;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.Text};
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.Text};
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
    background-color: rgba(255, 255, 255, 0.2);;
    color: white;
  }
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.Color};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <SearchInput placeholder="Search" />
          <Icon>
            <SearchOutlinedIcon />
          </Icon>
        </Search>
        <Button>
          <AccountCircleOutlinedIcon />
          Sign In
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
