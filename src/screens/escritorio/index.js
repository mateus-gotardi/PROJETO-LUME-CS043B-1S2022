import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/escritorio1.png'
import img2 from '../../assets/prints/escritorio2.png'
import img3 from '../../assets/prints/escritorio3.png'
import img4 from '../../assets/prints/escritorio4.png'
import { Link } from 'react-router-dom'

const Escritorio = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.escritorio !== 'ok') {
            let tempList = searchList
            tempList.escritorio = 'ok'
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
                    <div className='printRight hoverable'>
                        <img className='print' alt='print2' src={img2} />
                    </div>
                    <div className='printRight hoverable'>
                        <img className='print' alt='print3' src={img3} />
                    </div>
                    <div className='printLeft hoverable'>
                        <img className='print' alt='print4' src={img4} useMap='#map1' />
                        <map name='map1'>
                            <Link to='/apoio'>
                                <area alt="apoio" title="apoio" coords="695,157,870,205" shape="rect" />
                            </Link>
                        </map>
                    </div>
                </div>
            </div>
            <BackButton to='/quem' done='24' color='#C94545'/>
        </div>
    )
}
export default Escritorio 