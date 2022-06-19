import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import { Link } from 'react-router-dom'
import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'

const Investigacao = () => {
    const {searchList, setSearchList}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.investigacao!=='ok'){
            let tempList=searchList
            tempList.investigacao='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList])
    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info first'>“A investigação tem um <Link className='link' to='/tempo'>tempo</Link> próprio, são as provas que serão coletadas no decorrer
                     das investigações e os resultados delas que determinaram quando as conclusões viram”
                    </p><br />
                    <p className='info second'>“Esta investigação tem um complexidade, evidentemente, e é necessário que se mantenha
                     o sigilo sob pena de prejudicar a chance de êxito desse trabalho investigativo”
                    </p><br/>
                    <p className='info first'>“A gente tem muito material para ser analisado ainda
                    {' '}<span className='black'>|||||||||||||</span>{' '}
                    a gente espera que a gente consiga entregar este resultado”
                    </p>
                </div>
            </div>
            <BackButton to='/silenciador' color='#66CCFF' done='12'/>
        </div>
    )
}
export default Investigacao 