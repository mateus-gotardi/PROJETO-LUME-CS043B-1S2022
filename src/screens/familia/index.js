import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/familia1.png'
import img2 from '../../assets/prints/familia2.png'
import img3 from '../../assets/prints/familia3.png'


const Familia = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.familia !== 'ok') {
            let tempList = searchList
            tempList.familia = 'ok'
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
                        <img className='print' alt='print2' src={img3} />
                    </div>
                </div>
            </div>
            <BackButton to='/inicial' done='36' color='#C94545'/>
        </div>
    )
}
export default Familia 