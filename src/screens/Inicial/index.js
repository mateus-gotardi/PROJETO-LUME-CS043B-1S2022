import React from "react";
import { Link } from "react-router-dom";
import '../../styles/pages.scss'
import { SearchContext } from "../../providers/search";
import map from '../../assets/images/mapa rio.png'


const Inicial = () => {
    const {searchList} = React.useContext(SearchContext)
    const keys = Object.keys(searchList)
    return (
        <div className="mapGeneral">
            <div className="mapContainer">
                <div className='mapItensContainer'>
                    <Link to='/crime' className="mapItem crime">crime</Link>
                    {keys.map((i)=>{
                        if (searchList[i]==='ok'){
                            let name = i
                            let acentuados = {camera:'câmera',execucao:'execução',interferencia:'interferência', investigacao:'investigação', metodos:'métodos', 
                            milicia:'milícia', escritorio:'escritório', familia:'família', constituido:'constituído', politicos:'políticos'}
                            if (acentuados[i]!==undefined){
                                name=acentuados[i]
                            }
                            return(
                                <Link key={i} to={'/'+i} className={'mapItem '+i}>{name}</Link>
                            )
                        }else{return(null)}
                    })}
                </div>
            </div>
            <img alt='mapa do Rio de Janeiro' src={map} className='map' />
        </div>
    )
}

export default Inicial