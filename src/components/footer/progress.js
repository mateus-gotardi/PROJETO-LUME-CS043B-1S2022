import React, {useState} from "react";
import '../../styles/progressBar.scss'

const Progress = ({ done }) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    return (
        <div className="progress-bar">
            <div className="progress-done" style={style}>
                {done}
            </div>
        </div>
    )
}
export default Progress