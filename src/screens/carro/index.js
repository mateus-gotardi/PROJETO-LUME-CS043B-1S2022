import { Link } from 'react-router-dom'
import '../../styles/pages.scss'
import cobalt from '../../assets/images/cobalt-clonado.webp'
import BackButton from '../../components/backButton'

const Carro = () => {
    return (
        <div className="general">
            <div className='container'>
                <div className='box'>
                    <p className='info'>“Nenhum dos três percebeu, mas, assim que o Agile deixou a rua”</p><br />
                    <p className='info'>“O veículo com <Link to='/placas' className='link'>placas</Link>
                    {' '}clonadas estava no <Link className='link' to='/local '>local</Link> desde às sete da noite.
                    <br/>No banco traseiro do Cobalt, um homem segurava uma submetralhadora alemã HK MP5, calibre 9 milímetros, conhecida pela precisão de seus disparos”</p>
                </div>
                <div>
                    <p className='info'>“foi seguido por um Chevrolet Cobalt prata”</p>
                    <img alt='cobalt prata clonado' className='image' src={cobalt}></img>
                </div>
            </div>
        
            <BackButton to='/fragilidade' />
        </div>
    )
}
export default Carro