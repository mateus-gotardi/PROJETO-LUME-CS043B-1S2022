import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/constituido1.png'
import img2 from '../../assets/prints/constituido2.png'
import img3 from '../../assets/prints/constituido3.png'
import { Link } from 'react-router-dom'

const Constituido = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.constituido !== 'ok') {
            let tempList = searchList
            tempList.constituido = 'ok'
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
                    <div className='printRight hoverable'>
                        <img className='print' alt='print2' src={img2} />
                    </div>
                    <div className='printLeft'>
                        <img className='print' alt='print3' src={img3} useMap='#map1' />
                        <map name='map1'>
                            <Link to='/envolvimento'>
                                <area alt="envolvimento" title="envolvimento" coords="752,34,1010,87" shape="rect" data-coords="752,34,1010,87"/>
                            </Link>
                        </map>
                    </div>
                </div>
            </div>
            <BackButton to='/poder ' done='48' color='#C94545'/>
        </div>
    )
}
export default Constituido 