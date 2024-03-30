import './CardTrilha.css'
import PropTypes from 'prop-types'

export function CardTrilha(props) {
    return (
        <div className="container">
            <div className="img-container">
                <img src={props.imgURL} />
            </div>

            <div className="details-container">
                <div className="title-area">
                    <h1>{props.trailName} - {props.city} / {props.state}</h1>
                    <span>Coracao</span>
                </div>
                
                <div className="autor-area">
                    <p>Por: {props.author}</p>
                </div>
                
                <div className="about-area">
                    <p>Duração: {props.duration}min</p>
                    <p>Trajeto: {props.distance} km</p>
                </div>
        
                <div className="dificult-area">
                    <div className="tag">
                        <p>{props.difficult}</p>
                    </div>
                </div>
        
                <div className="avaliation-area">
                    <img src="https://3.bp.blogspot.com/-huMGkok3EvI/WhmmM55F0fI/AAAAAAAALbA/50o5s355XfMYGdnYvUOcsQfaQozWdtlGACLcBGAs/s1600/4-estrelas.jpg" />
                    <p><a href="#">Avaliações</a></p>
                </div>
            </div>
        </div>
    )
}

CardTrilha.propTypes = {
    imgURL: PropTypes.string.isRequired,
    trailName: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
    difficult: PropTypes.string.isRequired,
}