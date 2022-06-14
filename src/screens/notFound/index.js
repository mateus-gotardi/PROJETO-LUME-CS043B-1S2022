import '../../styles/home.scss'
import { Link } from 'react-router-dom'

const NotFound = ()=>{
    return(
        <div className="homeContainer">
        <div className="title">
            <h1>404 - Página não encontrada</h1>
        </div>
        
        <Link to='/inicial' className="buttonHome">Home</Link>
    </div>
    )
}
export default NotFound