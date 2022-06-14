import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./screens/home";
import Inicial from "./screens/Inicial";
import Tiros from "./screens/tiros";
import Header from "./components/header";
import NotFound from "./screens/notFound";
import Crime from "./screens/crime";
import Arma from "./screens/arma";
import Bombeiro from "./screens/bombeiro";
import Fragilidade from "./screens/fragilidade";
import Carro from "./screens/carro";
import Cameras from "./screens/cameras";
import Placas from "./screens/placas";
import Local from "./screens/local";
import Seguindo from "./screens/seguindo";
import Rastreamento from "./screens/rastreamento";
import Execucao from "./screens/execucao";
import Negro from "./screens/negro";
import Silenciador from "./screens/silenciador";

function App() {
  const [isHome, setIsHome] = useState(false)
  const [bcg, setBcg]= useState('#fff')
  function Element() {
    const screens = {
      home: <Home />, inicial: <Inicial />, crime: <Crime />,
      arma: <Arma />, tiros: <Tiros />, bombeiro: <Bombeiro />, fragilidade: <Fragilidade />,
      carro: <Carro/>, cameras: <Cameras/>, placas: <Placas/>, local: <Local/>, seguindo:<Seguindo/>,
      rastreamento: <Rastreamento/>, execucao: <Execucao/>, negro: <Negro/>, silenciador: <Silenciador/>
    }
    let { id } = useParams();
    if (id === 'home') {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
    if(id==='silenciador'){
      setBcg('#FFDE6A')
    }else{
      setBcg('#fff')
    }
    return (screens[id])
  }


  return (
    <BrowserRouter>
      <style>{`body { background-color: ${bcg}; }`}</style>
      {isHome ? <></> : <Header />}
      <Routes>
        <Route exact path='/:id' element={<Element />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
