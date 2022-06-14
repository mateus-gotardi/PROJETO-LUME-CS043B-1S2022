import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import uzz18 from '../../assets/images/uzz18.png'
import '../../styles/pages.scss'
import { SearchContext } from "../../providers/search";
import BackButton from "../../components/backButton";

const Tiros = () => {
    const {setSearchList, searchList}=React.useContext(SearchContext)
    useEffect(() => {
        setSearchList({...searchList,rj:'ok'})
      }, []);
    return (
        <div className="general">
            <div className="container">
                <div className="box">
                    <p className="info">
                    “A exatidão dos tiros também chamou a atenção dos investigadores”
                    </p><br/>
                    <p className="info hoverable">
                    “investigadores encontraram no local do crime munições vendidas exclusivamente para a Polícia Federal”
                    </p><br/>
                    <p className="info hoverable">“já foi instaurado inquérito no âmbito da Polícia Federal para apurar a origem das munições e as circunstâncias envolvendo as cápsulas encontradas no local do crime”</p>
                </div>
                <div className="box">
                    <img alt='projétil lote uzz18/7,62' src={uzz18} className='image' />
                    <br/>
                    <p className="info">“o lote de munição UZZ-18”</p><br/>
                    <p className="info hoverable">“Pela <Link className="link" to='/fragilidade'>fragilidade</Link> no controle das entradas e saídas de munições nas Polícias Militar e Federal e no Exército, é “praticamente impossível” rastrear a origem das balas usadas no assassinato”</p>
                </div>
                
            </div>
            <BackButton to='/arma'/>
        </div>
    )
}

export default Tiros