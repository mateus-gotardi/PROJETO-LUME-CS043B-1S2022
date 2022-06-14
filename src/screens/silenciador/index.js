import '../../styles/pages.scss'
import BackButton from '../../components/backButton'
import { Link } from 'react-router-dom'

const Silenciador = () => {
    return (
        <div className='general'>
            <div className='container height100'>
                <div className='noImageBox'>
                    <p className='info text-center'>
                        Um crime, duas mortes, 4 anos sem solução.
                    </p>
                    <p className='info text-center'>
                        Porque alguém cometeria este crime ?
                    </p>
                    <p className='info text-center'>
                        E porque a <Link to='/investigacao' className='link'>investigação</Link> nunca chegou a resolvê-lo ?
                    </p>
                </div>
            </div>
            <BackButton to='/execucao'/>
        </div>
    )
}
export default Silenciador