import logo from "../assets/img/logo.png"
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"
import icone_certo from "../assets/img/icone_certo.png"
import icone_quase from "../assets/img/icone_quase.png"
import icone_erro from "../assets/img/icone_erro.png"


export default function App() {

    return (
        <>
            <div className="screen-container">
                <div className="logo-container">
                    <img src={logo} alt="logo ZapRecall" />
                    <h1>ZapRecall</h1>
                </div>
                <div className="pergunta-fechada">
                    <p>Pergunta 1</p><img src={seta_play} alt="seta_play" />
                </div>
                <div className="pergunta-aberta">
                    Pergunta aberta<img src={seta_virar} alt="seta_virar" />
                </div>
                <div className="pergunta-aberta">
                    Resposta (sem a seta pra virar)
                </div>
                <div className="pergunta-fechada correta">
                    <p>Pergunta 3</p><img src={icone_certo} alt="icone_certo" />
                </div>
                <div className="pergunta-fechada quase">
                    <p>Pergunta 4</p><img src={icone_quase} alt="icone_quase" />
                </div>
                <div className="pergunta-fechada errada">
                    <p>Pergunta 5</p><img src={icone_erro} alt="icone_erro" />
                </div>
                <div className="pergunta-fechada">
                    <p>Pergunta 1</p><img src={seta_play} alt="seta_play" />
                </div>
                <div className="pergunta-fechada">
                    <p>Pergunta 1</p><img src={seta_play} alt="seta_play" />
                </div>
                <div className="footer-concluidos">
                    <div className="container-botoes">
                        <button className="botao-errado">Não lembrei</button>
                        <button className="botao-quase">Quase não lembrei</button>
                        <button className="botao-zap">Zap</button>
                    </div>
                    1/8 concluídos
                </div>
            </div>
        </>
    )
}