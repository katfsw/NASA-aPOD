import React from 'react'

const Structure = props => {

    return (
        <div className="card-structure" style={{backgroundImage: `url(${props.data.hdurl})` }}>
            <h3 className="card-title">✨ {props.data.title} ✨</h3>
            <p className="card-date">{props.data.date}</p>

            <p className="card-bio">{props.data.explanation}</p>
            
            <p className="card-copyright"> Photo © {props.data.copyright}</p>
        </div>
    )
}

export default Structure;