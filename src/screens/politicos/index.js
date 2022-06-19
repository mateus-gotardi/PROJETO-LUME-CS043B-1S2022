import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/politicos1.png'
import { Link } from 'react-router-dom'
import imageMap from 'image-map'

const Politicos = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        imageMap('img[usemap]')
    }, [])
    useEffect(() => {
        if (searchList.politicos !== 'ok') {
            let tempList = searchList
            tempList.politicos = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList])
    return (
        <div className='general'>
            <div className='container'>
                <div className='printsBox'>
                    <div className='printLeft'>
                        <img className='print' alt='print3' src={img1} useMap='#map1' />
                        <map name='map1'>
                            <Link to='/rumo'>
                                <area alt="rumo" title="rumo" coords="471,242,543,284" shape="rect" />
                            </Link>
                        </map>
                    </div>
                </div>
            </div>
            <BackButton to='/envolvimento ' done='72' color='#C94545'/>
        </div>
    )
}
export default Politicos 