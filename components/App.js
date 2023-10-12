import "./App.css";
import stylde, { css } from "styled-components";
import PageContent from "./components/PageContent";
import SideMenu from "./components/SideMenu";
import SideContent from "./components/SideCotent";

const Container = stylde.div`
width: 90vw;
height: 90vh;
margin: 4em auto;
display: flex;
flex-direction: row;
box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
border-radius: 50px;
min-width:1024px;
min-height:700px;
`;
function App() {
  return (
    <>
      <Container>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
        <SideContent></SideContent>
      </Container>
    </>
  );
}
export default App;
