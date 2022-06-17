import { Link } from 'react-router-dom'
import '../../styles/pages.scss'
import mp5 from '../../assets/images/hk mp5.jpg'
import BackButton from '../../components/footer'
import { SearchContext } from '../../providers/search'
import React, {useEffect} from 'react'

const Arma = () => {
    const {searchList, setSearchList, progress, setProgress }=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.arma!=='ok'){
            setProgress(progress+2)
            let tempList=searchList
            tempList.arma='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList, progress, setProgress])
    return (
        <div className="general">
            <div className='container'>
                <div className='box'>
                    <p className='info'>“Foi tudo muito rápido”</p><br />
                    <p className='info'>“O homem que deu os <Link className='link' to='/tiros'>tiros</Link> estava sentado no banco de trás.
                        <span className='black'>||||||||||||</span>
                        Eu vi o braço dele quando apontou a arma”</p>
                </div>
                <img alt='HK MP5' className='image' src={mp5}></img>
            </div>
            <div className='container'>
                <div className='noImageBox'>
                    <p className='info second hoverable'>“a arma usada no assassinato <span className='black'>|||||||||||||||||</span> uma metralhadora HK-MP5"</p>
                    <p className='info first hoverable'>“No dia anterior, o Ministério Público e a Polícia Civil haviam prendido a mulher dele e três homens, todos suspeitos de jogar em alto-mar”</p>
                    <p className='info second hoverable'>“De acordo com os investigadores, coube ao <Link to='/bombeiro' className='link'>bombeiro</Link> ajudar,
                        logo após a prisão do sargento, no descarte das armas escondidas”</p>
                </div>
            </div>

            <BackButton to='/crime' />
        </div>
    )
}
export default Arma