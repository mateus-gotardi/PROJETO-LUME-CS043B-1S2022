import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import img1 from '../../assets/prints/n1t1.png'
import img2 from '../../assets/prints/n1t2.png'
import img3 from '../../assets/prints/n1t3.png'
import { Link } from 'react-router-dom'
import imageMap from 'image-map'

const Alvo = () => {
    const { searchList, setSearchList} = React.useContext(SearchContext)
    useEffect(() => {
        imageMap('img[usemap]')
        if (searchList.alvo !== 'ok') {
            let tempList = searchList
            tempList.alvo = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList])
    return (
        <div className='general'>
            <style>{`body { background-color: #66CCFF; }`}</style>
            <div className='container'>
                <div className='noImageBox'>
                    <div className='printDiv first'>
                        <img className='print' alt='print1' src={img1} useMap='#print1map' />
                        <map name='print1map'>
                            <Link to='/lume'>
                                <area alt="lume" title="lume" coords="274,324,349,358" shape="rect" />
                            </Link>
                        </map>
                    </div>
                    <div className='printDiv first'>
                        <img className='print' alt='print2' src={img2} />
                    </div>
                    <div className='printDiv second'>
                        <img className='print' alt='print3' src={img3} useMap='#print2map' />
                        <map name='print2map'>
                            <Link to='/passo'>
                                <area alt="passo" title="passo" coords="394,100,470,132" shape="rect"/>
                            </Link>
                        </map>

                    </div>


                </div>
            </div>
            <BackButton to='/metodos' color='#66CCFF' done='84' background='#66CCFF'/>
        </div>
    )
}
export default Alvo 