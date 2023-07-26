import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import axios from "axios"
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorite/Favorite";
import { useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)

  const username = "gmasa@gmail.com"
  const password = "pass123"

  const navigate = useNavigate();

  const login = (userData) =>{
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/About');
   }
  }

  const logout = () => {
    setAccess(false);
    navigate("/");
  };


  useEffect(() => {

    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        const data = response.data.results;
        setCharacters(data);
      } catch (error) {
        console.log(error);
      }
    };

   
    fetchCharacters();
  }, []);

  function onSearch(id) {
    axios
      .get(`http://localhost:3001/onSearch/${id}`)
      .then((response) => {
        const data = response.data;
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  const {pathname} = useLocation()
  return (
    <div className="App">
      <div>
      { pathname !== "/" && <Nav onSearch={onSearch} onLogout={logout} />}
        
      </div>
      <Routes>
      <Route path="/About" element={<About />} /> 
      <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />} />
      <Route path="/detail/:detailId" element={<Detail />} /> 
      <Route path="/" element={<Form login={login}/>} /> 
      <Route path="/Favorite" element={<Favorites />} /> 
      </Routes>
    </div>
  );
}

export default App;
