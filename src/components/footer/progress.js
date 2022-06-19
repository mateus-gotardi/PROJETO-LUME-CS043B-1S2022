import React, {useState} from "react";
import '../../styles/progressBar.scss'

const Progress = ({ done, color }) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            background: color,
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