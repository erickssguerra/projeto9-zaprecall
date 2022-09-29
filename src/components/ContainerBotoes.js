import icone_certo from "../assets/img/icone_certo.png"
import icone_quase from "../assets/img/icone_quase.png"
import icone_erro from "../assets/img/icone_erro.png"

export default function ContainerBotoes(props) {
    const { setClassePergunta, setImagemPergunta, setTextoPergunta, setBotoes, tituloProp, setContador, contador } = props

    function marcarResposta(status) {
        setTextoPergunta(tituloProp)
        setBotoes("escondido")
        console.log("container botões: ", contador)

        switch (status) {
            case "errado":
                setClassePergunta("pergunta-fechada errada")
                setImagemPergunta(icone_erro)
                setContador(contador + 1)
                break;
            case "quase":
                setClassePergunta("pergunta-fechada quase")
                setImagemPergunta(icone_quase)
                setContador(contador + 1)
                break;
            case "zap":
                setClassePergunta("pergunta-fechada correta")
                setImagemPergunta(icone_certo)
                setContador(contador + 1)
                break;

            default:
                break;
        }
    }

    return (
        <div className="container-botoes">
            <button onClick={() => marcarResposta("errado")} className="botao-errado">Não lembrei</button>
            <button onClick={() => marcarResposta("quase")} className="botao-quase">Quase não lembrei</button>
            <button onClick={() => marcarResposta("zap")} className="botao-zap">Zap</button>
        </div>
    )
}