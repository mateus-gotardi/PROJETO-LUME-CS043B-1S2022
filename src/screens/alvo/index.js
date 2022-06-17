import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/n1t1.png'
import img2 from '../../assets/prints/n1t2.png'
import img3 from '../../assets/prints/n1t3.png'
import { Link } from 'react-router-dom'

const Alvo = () => {
    const { searchList, setSearchList, progress, setProgress } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.alvo !== 'ok') {
            setProgress(progress+2)
            let tempList = searchList
            tempList.alvo = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList, progress, setProgress])
    return (
        <div className='general'>
            <style>{`body { background-color: #66CCFF; }`}</style>
            <div className='container'>
                <div className='noImageBox'>
                    <div className='printDiv first'>
                        <Link to='/lume'>
                            <img className='print' alt='print1' src={img1} />
                        </Link>
                    </div>
                    <div className='printDiv first'>
                        <img className='print' alt='print2' src={img2} />
                    </div>
                    <div className='printDiv second'>
                        <Link to='/passo'>
                            <img className='print' alt='print3' src={img3} />
                        </Link>
                    </div>


                </div>
            </div>

            <BackButton to='/metodos' />
        </div>
    )
}
export default Alvo 