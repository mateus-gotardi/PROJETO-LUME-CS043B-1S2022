import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import { Link } from 'react-router-dom'

const Sigilo = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.sigilo !== 'ok') {
            let tempList = searchList
            tempList.sigilo = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList])
    return (
        <div className='general'>
            <style>{`body { background-color: #66CCFF; }`}</style>
            <div className='container'>
                <div className='noImageBox'>
                    <p className='info textCenter'>
                        Após um ano ter se passado, dois homens foram presos, um delegado foi afastado, e nenhum outro passo parece ter sido feito.
                    </p>
                    <p className='info textCenter'>
                        O caso permanece em sigilo, em silêncio.
                    </p><br />
                    <p className='info textCenter'>
                        A <Link className='link' to='/quem'>quem</Link> interessa a não conclusão da investigação?
                    </p>
                    <p className='info textCenter'>
                        E qual a razão para a aparente estagnação desde então?
                    </p>
                </div>
            </div>

            <BackButton to='/passo' color='#F2CA39' done='100' background='#F2CA39'/>
        </div>
    )
}
export default Sigilo 