import '../../styles/pages.scss'
import BackButton from '../../components/footer'
import { Link } from 'react-router-dom'
import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'

const Silenciador = () => {
    const {searchList, setSearchList, progress, setProgress}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.investigacao!=='ok'){
            setProgress(progress+2)
            let tempList=searchList
            tempList.investigacao='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList, progress, setProgress])
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
            <BackButton to='/execucao'/>
        </div>
    )
}
export default Silenciador