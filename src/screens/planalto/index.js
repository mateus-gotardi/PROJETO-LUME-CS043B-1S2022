import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/planalto1.png'
import img2 from '../../assets/prints/planalto2.png'
import img3 from '../../assets/prints/planalto3.png'
import img4 from '../../assets/prints/planalto4.png'

const Planalto = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.planalto !== 'ok') {
            let tempList = searchList
            tempList.planalto = 'ok'
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
                        <img className='print' alt='print2' src={img2} />
                    </div>
                    <div className='printLeft'>
                        <img className='print' alt='print3' src={img3}  />
                    </div>
                    <div className='printRight'>
                        <img className='print' alt='print2' src={img4} />
                    </div>
                </div>
            </div>
            <BackButton to='/inicial ' done='48' color='#C94545'/>
        </div>
    )
}
export default Planalto 