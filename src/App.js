import logopequeno from "./assets/img/logo-pequeno.png"
import setinha from "./assets/img/setinha.png"

export default function App() {
    return (
        <>
            <div className="deck">
                <div className="header">
                    <img src={logopequeno} alt="logo" />ZapRecall
                </div>
                <div className="main">
                    <div className="flashcard">
                        Pergunta 1
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="flashcard aberto">
                        O que é um pontinho amarelo no meio do show de Lady Gaga?
                        <div>
                            <img src={setinha} alt="setinha" />
                        </div>
                    </div>
                    <div className="flashcard aberto resposta">
                        Resposta: Uma Popcorn
                    </div>

                    <div className="flashcard help">
                        Pergunta 4
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="flashcard acerto">
                        Pergunta 5
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="flashcard erro">
                        Pergunta 6
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="flashcard">
                        Pergunta 7
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="flashcard">
                        Pergunta 8
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="action">
                    <div className="button error">Não lembrei</div>
                    <div className="button almost">Quase não lembrei</div>
                    <div className="button zap">Zap!</div>
                </div>
                <span>
                    1/8 Concluídos
                </span>
            </div>

        </>
    )
}