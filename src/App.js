import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
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
import Investigacao from "./screens/investigacao";
import Tempo from "./screens/tempo";
import Delegado from "./screens/delegado";
import Arquivo from "./screens/arquivo";
import Interferencia from "./screens/interferencia";
import Erro from "./screens/erro";
import Imagens from "./screens/imagens";
import Testemunho from "./screens/testemunho";
import Metodos from "./screens/metodos";
import Confundir from "./screens/confundir";
import Alvo from "./screens/alvo";
import Lume from "./screens/lume";
import Passo from "./screens/passo";
import Sigilo from "./screens/sigilo";
import Quem from "./screens/quem";
import Milicia from "./screens/milicia";
import Escritorio from "./screens/escritorio";
import Familia from "./screens/familia";
import Poder from "./screens/poder";
import Apoio from "./screens/apoio";
import Planalto from "./screens/planalto";
import Constituido from "./screens/constituido";
import Envolvimento from "./screens/envolvimento";
import Politicos from "./screens/politicos";
import Rumo from "./screens/rumo";
import Ela from "./screens/ela";
import Final from "./screens/final";
import Fontes from "./screens/fontes";
import Creditos from "./screens/creditos";
import GameOver from "./screens/gameOver";

function App() {
  const [isHome, setIsHome] = useState(false)
  const  Element = ()=>{
    
    
    const screens = {
      home: <Home />, inicial: <Inicial />, crime: <Crime />,
      arma: <Arma />, tiros: <Tiros />, bombeiro: <Bombeiro />, fragilidade: <Fragilidade />,
      carro: <Carro />, camera: <Cameras />, placas: <Placas />, local: <Local />, seguindo: <Seguindo />,
      rastreamento: <Rastreamento />, execucao: <Execucao />, negro: <Negro />, silenciador: <Silenciador />,
      investigacao: <Investigacao />, tempo: <Tempo />, delegado: <Delegado />, arquivo: <Arquivo />,
      interferencia: <Interferencia />, erro: <Erro />, imagens: <Imagens />, testemunho: <Testemunho />,
      metodos: <Metodos />, confundir: <Confundir />, alvo: <Alvo />, lume: <Lume/>, passo:<Passo/>,
      sigilo: <Sigilo/>, quem: <Quem/>, milicia: <Milicia/>, escritorio: <Escritorio/>, familia: <Familia/>,
      poder: <Poder/>, apoio: <Apoio/>, planalto: <Planalto/>, constituido: <Constituido/>, 
      envolvimento: <Envolvimento/>, politicos: <Politicos/>, rumo: <Rumo/>, ela: <Ela/>,
      finalcs043b1s2022:<Final/>, fontescs043b1s2022: <Fontes/>, creditoscs043b1s2022: <Creditos/>,gameover:<GameOver/>
    }
    let keys = Object.keys(screens)
    let { id } = useParams();
    if (id==='gameover'||id === 'home'||id==='finalcs043b1s2022'||id==='fontescs043b1s2022'||id==='creditoscs043b1s2022') {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
    
    if (keys.indexOf(id)!==-1){
      return (screens[id])
    }else{
      return <Navigate to="/inicial" />
    }
  }

  return (
    <BrowserRouter>

      {isHome ? <></> : <Header />}
      <Routes>
        <Route exact path='/:id' element={<Element />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
