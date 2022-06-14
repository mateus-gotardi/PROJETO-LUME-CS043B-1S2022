import '../../styles/pages.scss'
import BackButton from '../../components/backButton'

const Negro = () => { 
    return (
        <div className='general'>
            <div className="container height100">
                <p className='info'>“Na verdade, além de o homem estar com uma touca ninja preta, conforme o próprio homem em situação de rua diria, a impressão de o atirador ser negro decorrera do fato de ele usar uma proteção de cor preta nos braços. Mas ninguém sabia disso ainda”</p>
            </div>
            <BackButton to='/execucao' />
        </div>
    )
}
export default Negro