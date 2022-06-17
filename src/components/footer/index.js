import React from "react";
import { Link } from "react-router-dom";
import Progress from "./progress";
import { SearchContext } from '../../providers/search'

const BackButton = (props) => {
    const { progress } = React.useContext(SearchContext)

    return (
        <footer className='footer'>
            <Link to={props.to} className="button">voltar</Link>
            <Progress done={progress} />
        </footer>
    )
}
export default BackButton