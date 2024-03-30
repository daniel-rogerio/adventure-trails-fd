import './CardTrilha.css'

export function CardTrilha() {
    return (
        <div className="container">
            <div className="img-container">
                <img src="https://th.bing.com/th/id/OIP.IcTZZ1-5Gwa76smIvmrYIgHaE8?rs=1&pid=ImgDetMain" />
            </div>

            <div className="details-container">
                <div className="title-area">
                    <h1>Trilha da Costa da Lagoa - Florianópolis / SC</h1>
                    <span>Coracao</span>
                </div>
                
                <div className="autor-area">
                    <p>Por: Daniel Rogerio</p>
                </div>
                
                <div className="about-area">
                    <p>Duração: 120min</p>
                    <p>Trajeto: 4 km</p>
                </div>
        
                <div className="dificult-area">
                    <div className="tag">
                        <p>Iniciante</p>
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