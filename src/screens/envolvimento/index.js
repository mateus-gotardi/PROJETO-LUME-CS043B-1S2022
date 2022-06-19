import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/envolvimento1.png'
import img2 from '../../assets/prints/envolvimento2.png'
import { Link } from 'react-router-dom'
import imageMap from 'image-map'

const Envolvimento = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        imageMap('img[usemap]')
    }, [])
    useEffect(() => {
        if (searchList.envolvimento !== 'ok') {
            let tempList = searchList
            tempList.envolvimento = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList])
    return (
        <div className='general'>
            <div className='container'>
                <div className='printsBox'>
                    <div className='printLeft'>
                        <img className='print' alt='print1' src={img1} />
                    </div>
                    <div className='printRight'>
                        <img className='print' alt='print3' src={img2} useMap='#map1' />
                        <map name='map1'>
                            <Link to='/politicos'>
                                <area alt="politicos" title="politicos" coords="63,20,197,72" shape="rect" />
                            </Link>
                        </map>
                    </div>
                </div>
            </div>
            <BackButton to='/constituido ' done='60' color='#C94545'/>
        </div>
    )
}
export default Envolvimento 