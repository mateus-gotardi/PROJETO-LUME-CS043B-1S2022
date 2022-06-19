import '../../styles/pages.scss'
import BackButton from '../../components/footer'
import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'

const Placas = () => { 
    const {searchList, setSearchList}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.placas!=='ok'){
            let tempList=searchList
            tempList.placas='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList])
    return (
        <div className='general'>
            <div className="container height100">
                <div className='noImageBox'>
                    <p className='info first'>“Uma nova pista sobre o Chevrolet Cobalt clonado, placa KPA-5923, que foi usado no atentado{' '}<span className='black'>||||||||||||||</span>{' '}ele utilizou a internet para achar um "adesivo antirradar''. 
                    </p><br />
                    <p className='info second'>"Obteve como resposta que o objeto 'pode ser utilizado em placa de veículo automotor para dificultar que radares de fiscalização eletrônica de trânsito consigam detectar os caracteres impressos na placa'. Era também um indício de que ele queria apagar possíveis rastros da ação”

                    </p>
                </div>
            </div>
            <BackButton to='/inicial' color='#F2CA39' done='72' />
        </div>
    )
}
export default Placas