import icone_certo from "../assets/img/icone_certo.png"
import icone_quase from "../assets/img/icone_quase.png"
import icone_erro from "../assets/img/icone_erro.png"
import styled from "styled-components"

export default function ContainerBotoes(props) {
    const {
        setImagemFlashCard,
        setTextoFlashCard,
        setStatusFlashCard,
        setStatusResposta,
        setEstiloResposta,
        setBotoes,
        tituloProp,
        setContador,
        contador
    } = props

    function enviarResposta(resposta, booleano) {
        setTextoFlashCard(tituloProp);
        setBotoes(booleano);
        setContador(contador + 1);
        setStatusFlashCard("fechado");
        setStatusResposta("respondida")

        switch (resposta) {
            case "errado":
                setEstiloResposta("#FF3030");
                setImagemFlashCard(icone_erro);
                break;
            case "quase":
                setEstiloResposta("#FF922E");
                setImagemFlashCard(icone_quase);
                break;
            case "zap":
                setEstiloResposta("#2FBE34");
                setImagemFlashCard(icone_certo);
                break;

            default:
                break;
        }
    }
    return (
        <>
            <BotaoErrado onClick={() => enviarResposta("errado", false)} >Não lembrei</BotaoErrado>
            <BotaoQuase onClick={() => enviarResposta("quase", false)} >Quase não lembrei</BotaoQuase>
            <BotaoZap onClick={() => enviarResposta("zap", false)} >Zap</BotaoZap>
        </>
    )
}

const BotaoErrado = styled.button`

    background: #FF3030;

`
const BotaoQuase = styled.button`

    background: #FF922E;

`
const BotaoZap = styled.button`

    background: #2FBE34;

`