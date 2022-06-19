import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/apoio1.png'
import img2 from '../../assets/prints/apoio2.png'
import img3 from '../../assets/prints/apoio3.png'
import img4 from '../../assets/prints/apoio4.png'
import { Link } from 'react-router-dom'
import imageMap from 'image-map'

const Apoio = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        imageMap('img[usemap]')
        if (searchList.apoio !== 'ok') {
            let tempList = searchList
            tempList.apoio = 'ok'
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
                    <div className='printLeft'>
                        <img className='print' alt='print2' src={img2} />
                    </div>
                    <div className='printRight'>
                        <img className='print' alt='print3' src={img3}  />
                    </div>
                    <div className='printLeft'>
                        <img className='print' alt='print2' src={img4} useMap='#map1'/>
                        <map name='map1'>
                            <Link to='/planalto'>
                                <area alt="planalto" title="planalto" coords="380,78,605,120" shape="rect" />
                            </Link>
                        </map>
                    </div>
                </div>
            </div>
            <BackButton to='/escritorio ' done='36' color='#C94545'/>
        </div>
    )
}
export default Apoio 