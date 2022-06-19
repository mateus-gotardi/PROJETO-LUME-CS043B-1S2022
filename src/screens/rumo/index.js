import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/rumo1.png'
import img2 from '../../assets/prints/rumo2.png'
import img3 from '../../assets/prints/rumo3.png'
import img4 from '../../assets/prints/rumo4.png'
import { Link } from 'react-router-dom'
import imageMap from 'image-map'

const Rumo = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        imageMap('img[usemap]')
        if (searchList.rumo !== 'ok') {
            let tempList = searchList
            tempList.rumo = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList])
    return (
        <div className='general'>
            <div className='container'>
                <div className='printsBox'>
                    <div className='printLeft'>
                        <img className='print' alt='print3' src={img1} />
                    </div>
                    <div className='container noPadding'>
                        <div className='printRow'>
                            <img className='print' alt='print3' src={img2} />
                        </div>
                        <div className='printRow'>
                            <img className='print' alt='print3' src={img3} useMap='#map1' />
                        </div>
                        <map name='map1'>
                            <Link to='/ela'>
                                <area alt="ela" title="ela" coords="730,37,781,92" shape="rect" />
                            </Link>
                        </map>
                    </div>
                    <div className='printRight'>
                        <img className='print' alt='print3' src={img4} />
                    </div>
                </div>
            </div>
            <BackButton to='/envolvimento ' done='84' color='#C94545' />
        </div>
    )
}
export default Rumo 