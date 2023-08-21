import styled from "styled-components";
import Card from "../Components/Card";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Home = () => {
  const numberOfCards = 40; // Adjust the number of cards you want

  const cards = [];
  for (let i = 0; i < numberOfCards; i++) {
    cards.push(<Card key={i} />);
  }

  return <Container>{cards}</Container>;
};

export default Home;
