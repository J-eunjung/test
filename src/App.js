import "./App.css";

import PageContent from "./components/PageContent";
import SideMenu from "./components/SideMenu";
import SideContent from "./components/SideCotent";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
        <SideContent></SideContent>
      </div>
    </div>
  );
}
export default App;
