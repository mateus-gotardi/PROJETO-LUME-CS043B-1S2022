import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/milicia1.png'
import img2 from '../../assets/prints/milicia2.png'
import img3 from '../../assets/prints/milicia3.png'
import { Link } from 'react-router-dom'

const Milicia = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.milicia !== 'ok') {
            let tempList = searchList
            tempList.milicia = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList])
    return (
        <div className='general'>
            <div className='container'>
                <div className='printsBox'>
                    <div className='printLeft hoverable'>
                        <img className='print' alt='print1' src={img1} />
                    </div>
                    <div className='printRight'>
                        <img className='print' alt='print2' src={img2} useMap='#map1' />
                        <map name='map1'>
                            <Link to='/poder'>
                                <area alt="poder" title="poder" coords="630,71,709,105" shape="rect" />
                            </Link>
                        </map>
                    </div>
                    <div className='printLeft hoverable'>
                        <img className='print' alt='print3' src={img3} useMap='#map2' />
                        <map name='map2'>
                            <Link to='/familia'>
                                <area alt="familia" title="familia" coords="70,147,180,189" shape="rect" />
                            </Link>
                        </map>
                    </div>
                </div>
            </div>
            <BackButton to='/quem ' done='24' color='#C94545'/>
        </div>
    )
}
export default Milicia 