import React from 'react'
import DatePicker from "react-datepicker";

const Structure = props => {

    return (
        <div className="card-structure" style={{backgroundImage: `url(${props.data.hdurl})` }}>

            <h3 className="card-title">✨ {props.data.title} ✨</h3>

                <div className="card-date">
                    <DatePicker selected={props.selected} onChange={props.handleChange} />
                </div>

            <p className="card-bio">{props.data.explanation}</p>
            
            <p className="card-copyright"> Photo © {props.data.copyright}</p>
        </div>
    )
}

export default Structure;