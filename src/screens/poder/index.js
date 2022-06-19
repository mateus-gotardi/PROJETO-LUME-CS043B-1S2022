import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/poder1.png'
import img2 from '../../assets/prints/poder2.png'
import img3 from '../../assets/prints/poder3.png'
import { Link } from 'react-router-dom'
import imageMap from 'image-map'

const Poder = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        imageMap('img[usemap]')
    }, [])
    useEffect(() => {
        if (searchList.poder !== 'ok') {
            let tempList = searchList
            tempList.poder = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList])
    return (
        <div className='general'>
            <div className='container'>
                <div className='printsBox'>
                    <div className='printRight'>
                        <img className='print' alt='print1' src={img1} />
                    </div>
                    <div className='printLeft'>
                        <img className='print' alt='print2' src={img2} />
                    </div>
                    <div className='printRight'>
                        <img className='print' alt='print3' src={img3} useMap='#map1' />
                        <map name='map1'>
                            <Link to='/constituido'>
                                <area alt="constituido" title="constituido" coords="410,48,576,101" shape="rect" />
                            </Link>
                        </map>
                    </div>
                </div>
            </div>
            <BackButton to='/milicia ' done='36' color='#C94545'/>
        </div>
    )
}
export default Poder 