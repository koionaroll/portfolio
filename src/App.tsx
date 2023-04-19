import "./App.scss";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import NavBar from "./components/NavBar";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior:smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <NavBar />
      <About />
      <Projects />
      <Contacts />
    </Container>
  );
}

export default App;
