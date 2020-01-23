import React from 'react'

const Structure = props => {
    return (
        <div className="card-structure">
            <h3 className="card-title">Title: {props.data.title}</h3>
            <img alt={props.data.title} src={props.data.hdurl} className="card-image"/>
            <p className="card-bio">{props.data.explanation}</p>
            <p className="card-date">{props.data.date}</p>
            <copyright className="card-copyright">{props.data.copyright}</copyright>
        </div>
    )
}

export default Structure;