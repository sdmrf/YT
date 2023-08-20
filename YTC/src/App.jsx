import styled from 'styled-components'

//Components
import Menu from './Components/Menu'
import Navbar from './Components/Navbar'


//Styles
const Container = styled.div`
display: flex;
`

const Main = styled.div`
flex: 7;

`
const Wrapper = styled.div`

`

const App = () => {
  return (
    <Container>
    <Menu />
      <Main>
        <Navbar />
        <Wrapper>
          YTC
        </Wrapper>
      </Main>
    </Container>
  )
}

export default App