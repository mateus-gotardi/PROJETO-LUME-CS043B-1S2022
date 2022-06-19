import '../../styles/pages.scss'
import BackButton from '../../components/footer'
import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'
const Negro = () => { 
    const {searchList, setSearchList}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.negro!=='ok'){
            let tempList=searchList
            tempList.negro='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList])
    return (
        <div className='general'>
            <div className="container height100">
                <p className='info'>“Na verdade, além de o homem estar com uma touca ninja preta, conforme o próprio homem em situação de rua diria, a impressão de o atirador ser negro decorrera do fato de ele usar uma proteção de cor preta nos braços. Mas ninguém sabia disso ainda”</p>
            </div>
            <BackButton to='/inicial' color='#F2CA39' done='96' />
        </div>
    )
}
export default Negro