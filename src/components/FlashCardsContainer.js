import FlashCard from "./FlashCard"
import perguntas from "./perguntas"

export default function FlashCardsContainer(props) {
    const { setContador, contador } = props
    return (
        <>
            {perguntas.map((p, i) => <FlashCard
                setContador={setContador}
                contador={contador}
                tituloProp={p.titulo}
                questaoProp={p.questao}
                respostaProp={p.resposta}
                key={i}
            />)}

            {/* <div className="pergunta-fechada">
                <p>Pergunta 1</p><img src={seta_play} alt="seta_play" />

            </div>
            <div className="pergunta-aberta">
                JSX Pergunta aberta<img src={seta_virar} alt="seta_virar" />

            </div>
            <div className="pergunta-aberta">
                Resposta (sem a seta pra virar)
                <div className="container-botoes">
                    <button className="botao-errado">Não lembrei</button>
                    <button className="botao-quase">Quase não lembrei</button>
                    <button className="botao-zap">Zap</button>
                </div>

            </div>
            <div className="pergunta-fechada correta">
                <p>Pergunta 3</p><img src={icone_certo} alt="icone_certo" />
            </div>
            <div className="pergunta-fechada quase">
                <p>Pergunta 4</p><img src={icone_quase} alt="icone_quase" />
            </div>
            <div className="pergunta-fechada errada">
                <p>Pergunta 5</p><img src={icone_erro} alt="icone_erro" />
            </div> */}

        </>
    )


}