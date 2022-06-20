import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/quem.png'
import { Link } from 'react-router-dom'

const Quem = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.quem !== 'ok') {
            let tempList = searchList
            tempList.quem = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList])
    return (
        <div className='general'>
            <div className='container'>
                <div className='noImageBox'>
                    <img className='print' alt='print1' src={img1} useMap='#print1map' />
                    <map name='print1map'>
                        <Link to='/milicia'>
                            <area alt="milicia" title="milicia" coords="526,76,603,103" shape="rect" />
                        </Link>
                        <Link to='/escritorio'>
                            <area alt="escritorio" title="escritorio" coords="352,296,452,328" shape="rect" />
                        </Link>
                    </map>
                </div>
            </div>

            <BackButton to='/inicial' done='12' color='#C94545' />
        </div>
    )
}
export default Quem 