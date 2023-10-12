import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../Pages/Main";
import Todo from "../../Pages/Todo";
import Community from "../../Pages/Community";
import Mypage from "../../Pages/Mypage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
      <Route path="/community" element={<Community />}></Route>
      <Route path="/mypage" element={<Mypage />}></Route>
    </Routes>
  );
}

export default AppRoutes;
