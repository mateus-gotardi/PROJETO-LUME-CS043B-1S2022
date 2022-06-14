import React from "react";
import { Link } from "react-router-dom";
import '../../styles/pages.scss'
import { SearchContext } from "../../providers/search";
import map from '../../assets/images/mapa rio.png'


const Inicial = () => {
    const {searchList} = React.useContext(SearchContext)
    return (
        <div className="mapGeneral">
            <div className="mapContainer">
                <div className='mapItensContainer'>
                    <Link to='/crime' className="link mapItem">crime</Link>
                    {searchList.dificuldades === 'ok' ? <Link to='/dificuldades' className="link mapItem">dificuldades</Link> : <></>}
                    {searchList.complexidade === 'ok' ? <Link to='/complexidade' className="link mapItem">complexidade</Link> : <></>}
                    {searchList.resposta === 'ok' ? <Link to='/resposta' className="link mapItem">resposta</Link> : <></>}
                    {searchList.delegados === 'ok' ? <Link to='/delegados' className="link mapItem">delegados</Link> : <></>}
                    {searchList.silencio === 'ok' ? <Link to='/silencio' className="link mapItem">silêncio</Link> : <></>}
                    {searchList.sigilo === 'ok' ? <Link to='/sigilo' className="link mapItem">sigilo</Link> : <></>}
                    {searchList.tempo === 'ok' ? <Link to='/tempo' className="link mapItem">tempo</Link> : <></>}
                    {searchList.arquivo === 'ok' ? <Link to='/arquivo' className="link mapItem">arquivo</Link> : <></>}
                    {searchList.profissional === 'ok' ? <Link to='/fragilidade' className="link mapItem">profissional</Link> : <></>}
                    {searchList.milicias === 'ok' ? <Link to='/milicias' className="link mapItem">milícias</Link> : <></>}
                    {searchList.culpados === 'ok' ? <Link to='/culpados' className="link mapItem">culpados</Link> : <></>}
                    {searchList.marielle === 'ok' ? <Link to='/marielle' className="link mapItem">Marielle</Link> : <></>}
                    {searchList.prova === 'ok' ? <Link to='/prova' className="link mapItem">prova</Link> : <></>}
                    {searchList.lume === 'ok' ? <Link to='/lume' className="link mapItem">lume</Link> : <></>}
                    {searchList.cameras === 'ok' ? <Link to='/cameras' className="link mapItem">câmeras</Link> : <></>}
                    {searchList.assassinato === 'ok' ? <Link to='/execucao' className="link mapItem">assassinato</Link> : <></>}
                    {searchList.quem === 'ok' ? <Link to='/quem' className="link mapItem">quem</Link> : <></>}
                    {searchList.arma === 'ok' ? <Link to='/arma' className="link mapItem">arma</Link> : <></>}
                </div>
            </div>
            <img alt='mapa do Rio de Janeiro' src={map} className='map' />
        </div>
    )
}

export default Inicial