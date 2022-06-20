import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import { Link } from 'react-router-dom'
import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'

const Delegado = () => {
    const {searchList, setSearchList}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.delegado!=='ok'){
            let tempList=searchList
            tempList.delegado='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList])
    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info first hoverable'>“Na Polícia Civil, a investigação já foi chefiada por três delegados diferentes,
                     o que pode também ter atrasado o andamento do caso”
                    </p><br /> 
                    <p className='info second hoverable'>“Pela quarta vez, houve uma troca de delegado, mostrando mais uma vez o descaso do governador
                     e o descaso da gente ter a comunicação prévia.{' '}<span className='black'>||||||||||||||||||</span>{' '}
                     Na época, foi informado que o então delegado seria afastado para fazer um intercâmbio na Itália e que seu
                      papel na investigação tinha sido cumprido. Nesse momento, começaram as suspeitas de
                       que existiriam possíveis <Link className='link' to='/interferencia'>interferências</Link> na investigação”
                    </p><br/>
                    <p className='info first'>“Quatro meses depois, em setembro de 2020, o caso mudou de delegado mais uma vez,
                     quando Cláudio Castro assumiu o estado do Rio de Janeiro como governador interino”
                    </p>
                </div>
            </div>
            <BackButton to='/tempo' color='#66CCFF' done='36'/>
        </div>
    )
}
export default Delegado 