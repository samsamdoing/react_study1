import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">user</Link>
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="users/*" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


function Home() {
  const [menu, setMenu] = useState(1);


  const menu1 = () => {
    setMenu(1);

  }

  const menu2 = () => {
    setMenu(2);
  }
  return (
    <div>
      <h2>Home</h2>

      <button onClick={menu1}>메뉴1</button>
      <button onClick={menu2}>메뉴2</button>

      {
        menu === 1 ?
        <div>메뉴1번 페이지입니다</div>
        :
        <div>메뉴2번 페이지입니다</div>
      }

    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
