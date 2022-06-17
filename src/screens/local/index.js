import { Link } from 'react-router-dom'
import '../../styles/pages.scss'
import BackButton from '../../components/footer'
import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'

const Local = () => {
    const {searchList, setSearchList, progress, setProgress}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.local!=='ok'){
            setProgress(progress+2)
            let tempList=searchList
            tempList.local='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList, progress, setProgress])
    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info first'>
                        “Os investigadores dizem que os assassinos sabiam onde{' '}<span className='black'>||||||||||||||</span>{' '}e tinham informações sobre o carro que a levava”
                    </p><br />
                    <p className='info second'>
                        “A polícia reconstitui, por meio de imagens de câmeras de rua, a viagem de cerca de uma hora feita pelo carro dos suspeitos, da Barra da Tijuca até o endereço{' '}<span className='black'>|||||||||||</span><br />Ao chegarem ao endereço, os suspeitos esperaram por duas horas”
                    </p>
                    <p className='info first'>
                        “Os assassinos, a bordo de um Cobalt, seguiram o carro e a alguns quilômetros dali, no Largo do Estácio, região central, emparelharam o seu veículo{' '}<span className='black'>||||||||||||||</span>{' '}e efetuaram os disparos”
                    </p>
                    <p className='info second'>
                        “A última imagem é a 400 metros de onde houve a <Link className='link' to='/execucao'>execução</Link>, um local escuro e sem cameras de vigilancia”
                    </p>
                </div>
            </div>
            <BackButton to='/carro' />
        </div>
    )
}
export default Local