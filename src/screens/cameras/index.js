import { Link } from 'react-router-dom'
import '../../styles/pages.scss'
import BackButton from '../../components/footer'
import { SearchContext } from "../../providers/search";
import React, { useEffect } from 'react';

const Cameras = () => {
    const {searchList, setSearchList, progress, setProgress}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.cameras!=='ok'){
            setProgress(progress+2)
            let tempList=searchList
            tempList.cameras='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList, progress, setProgress])
    return (
        <div className='general'>
            <div className="container height100">
                <div className='noImageBox'>
                    <p className='info first'>“Havia onze câmeras públicas de vídeo no trajeto feito pelo carro. Misteriosamente, cinco tinham sido desligadas, um ou dois dias antes dos assassinatos”
                    </p><br />
                    <p className='info hoverable second'>“uma delas, a poucos metros da cena do crime, não grava imagens e serve apenas para contar os veículos que passam pela via”
                    </p><br/>
                    <p className='info first'> “Não há informações do funcionamento delas. Outra”{' '}<span className='black'>||||||||||||||</span>{' '}“consta como defeituosa, mas funciona e revelou que a perseguição foi feita”
                    <br/>“A câmera de trânsito”{' '}<span className='black'>||||||||||||||</span>{' '}“é de baixa definição, mas foi suficiente para descobrirmos que tinham dois carros <Link className='link' to='/seguindo'>seguindo</Link>. Consegue ver a cor, a marca. É uma informação para a investigação"
                    </p>
                </div>
            </div>
            <BackButton to='/fragilidade' />
        </div>
    )
}
export default Cameras