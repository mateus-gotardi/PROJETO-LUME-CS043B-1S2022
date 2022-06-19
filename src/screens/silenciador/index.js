import '../../styles/pages.scss'
import BackButton from '../../components/footer'
import { Link } from 'react-router-dom'
import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'

const Silenciador = () => {
    const {searchList, setSearchList}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.silenciador!=='ok'){
            let tempList=searchList
            tempList.silenciador='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList])
    return (
        <div className='general'>
                  <style>{`body { background-color: #F2CA39; }`}</style>
            <div className='container height100'>
                <div className='noImageBox'>
                    <p className='info textCenter'>
                        Um crime, duas mortes, 4 anos sem solução.
                    </p>
                    <p className='info textCenter'>
                        Porque alguém cometeria este crime ?
                    </p>
                    <p className='info textCenter'>
                        E porque a <Link to='/investigacao' className='link'>investigação</Link> nunca chegou a resolvê-lo ?
                    </p>
                </div>
            </div>
            <BackButton to='/execucao' background='#F2CA39' color='#F2CA39' done='100'/>
        </div>
    )
}
export default Silenciador