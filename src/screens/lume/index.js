import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'

const Lume = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.lume !== 'ok') {
            let tempList = searchList
            tempList.lume = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList])
    return (
        <div className='general'>
            <style>{`body { background-color: #66CCFF; }`}</style>
            <div className='container'>
                <div className='box'>
                    <p className='info textLeft'>“A Operação Lume foi batizada em referência a uma praça no Centro do Rio, conhecida como Buraco do Lume"</p>
                    <p className='info textLeft'>“Além de significar qualquer tipo de luz ou claridade, a palavra "lume"
                     compõe a expressão "trazer a lume", que significa trazer ao conhecimento público, vir à luz”</p>
                </div>
                <div className='box'>
                    <p className='info'>
                    “desenvolvia um projeto chamado Lume Feminista. No local, ela também costumava se reunir com outros defensores dos direitos humanos”
                    </p>
                </div>
            </div>

            <BackButton to='/inicial' color='#F2CA39' done='96' background='#F2CA39'/>
        </div>
    )
}
export default Lume 