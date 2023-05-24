import { Route, Routes, Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import About from "./components/About/About";
import Welcome from "./components/Welcome/Welcome";
import DetailVideogame from "./components/DetailVideogame/DetailVideogame";
import FormAddVideogame from "./components/FormAddVideogame/FormAddVideogame";
import FilterBar from "./components/FilterBar/FilterBar";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import NavBar from "./components/NavBar/NavBar";
import FormUpdateVideogame from "./components/FormUpdateVideogame/FormUpdateVideogame";
import { useMatch } from "react-router";

function App() {
  const {pathname} = useLocation();
  const detailMatch = useMatch("/detail/:id");
  const editMatch = useMatch("/edit/:id");
  return (
    <div className="App">
{pathname !== "/" && pathname !== "/404" && <NavBar/>}
{pathname !== "/" && pathname !== "/404" && pathname !== "/about" &&!detailMatch && pathname !== "/formAddVideogame" &&  !editMatch && <FilterBar /> } 


      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<DetailVideogame />} />
        <Route path="/formAddVideogame" element={<FormAddVideogame />} />
        <Route path="/edit/:id" element={<FormUpdateVideogame />} />
        <Route path="/404" element={<Error/>}></Route>
          <Route path="*" element={<Navigate to="/404"/>}/>  

      </Routes>

    </div>
  );
}

export default App;
