import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 100%;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Texts = styled.div``

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.Text};

`;

const ChannelName = styled.h2`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.TextLight};
  margin-bottom: 5px;

`;

const Descp = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.TextLight};

`;

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Card = () => {
  return (
    <Container>
      <Image src="https://i.ytimg.com/vi/2Vv-BfVoq4g/maxresdefault.jpg" />
      <Info>
        <ChannelImg />
        <Texts>
          <Title>Coding With Maruf</Title>
          <ChannelName>Sdmrf</ChannelName>
          <Descp>660,907 views • 1 day ago</Descp>
        </Texts>
      </Info>
    </Container>
  );
};

export default Card;
