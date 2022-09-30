import { useState } from "react"
import styled from "styled-components"
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"
import ContainerBotoes from "./ContainerBotoes"

export default function FlashCard(props) {
    const { tituloProp, questaoProp, respostaProp, setContador, contador } = props

    const [imagemFlashCard, setImagemFlashCard] = useState(seta_play);
    const [textoFlashCard, setTextoFlashCard] = useState(tituloProp);
    const [statusOnClick, setStatusOnClick] = useState(() => abrirPergunta);
    const [botoes, setBotoes] = useState(false);
    const [statusFlashCard, setStatusFlashCard] = useState("fechado");
    const [statusResposta, setStatusResposta] = useState("nao-respondida");
    const [estiloResposta, setEstiloResposta] = useState("#333333")

    function abrirPergunta() {
        setImagemFlashCard(seta_virar);
        setTextoFlashCard(questaoProp);
        setStatusOnClick(() => abrirResposta);
        setStatusFlashCard("aberto");
    }
    function abrirResposta() {
        setImagemFlashCard();
        setTextoFlashCard(respostaProp);
        setStatusOnClick();
        setBotoes(true);
    }


    return (
        <FlashCardStyled
            statusFlashCard={statusFlashCard}
            statusResposta={statusResposta}
            estiloResposta={estiloResposta}>
            <p>{textoFlashCard}</p>
            <img onClick={statusOnClick}
                src={imagemFlashCard}
                alt={imagemFlashCard} />
            <ContainerBotoesStyled botoes={botoes}>
                <ContainerBotoes
                    setContador={setContador}
                    contador={contador}
                    setStatusFlashCard={setStatusFlashCard}
                    setStatusResposta={setStatusResposta}
                    setImagemFlashCard={setImagemFlashCard}
                    setTextoFlashCard={setTextoFlashCard}
                    setEstiloResposta={setEstiloResposta}
                    tituloProp={tituloProp}
                    setBotoes={setBotoes}
                />
            </ContainerBotoesStyled>

        </FlashCardStyled >
    )
}

const FlashCardStyled = styled.div`
    transition: all .5s;
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: ${({ statusFlashCard }) => (statusFlashCard === "fechado" ? "35px" : "100px")};
    background: ${({ statusFlashCard }) => (statusFlashCard === "fechado" ? "#FFFFFF" : "#FFFFD5")}; 
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    position: ${({ statusFlashCard }) => (statusFlashCard === "fechado" ? "inherit" : "relative")};
    display: flex;
    flex-direction: ${({ statusFlashCard }) => (statusFlashCard === "fechado" ? "none" : "column")}; 
    align-items: ${({ statusFlashCard }) => (statusFlashCard === "fechado" ? "center" : "none")}; 
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        text-decoration:  ${({ statusResposta }) => (statusResposta === "nao-respondida" ? "none" : "line-through")};
        font-weight: ${({ statusFlashCard }) => (statusFlashCard === "fechado" ? "700" : "400")};
        font-size: ${({ statusFlashCard }) => (statusFlashCard === "fechado" ? "16px" : "18px")};
        line-height: ${({ statusFlashCard }) => (statusFlashCard === "fechado" ? "19px" : "22px")}; 
        color: ${({ estiloResposta }) => estiloResposta};
    }
    img {
        height: ${({ statusFlashCard }) => (statusFlashCard === "fechado" ? "20px" : "15px")};
        cursor: pointer;
        position: ${({ statusFlashCard }) => (statusFlashCard === "fechado" ? "inherit" : "absolute")}; 
        bottom: ${({ statusFlashCard }) => (statusFlashCard === "fechado" ? "inherit" : "10px")}; 
        right: ${({ statusFlashCard }) => (statusFlashCard === "fechado" ? "inherit" : "10px")};
    }
`
const ContainerBotoesStyled = styled.div`

    display: ${({ botoes }) => (botoes ? "flex" : "none")};
    width: 90%;
    justify-content: space-between;
    margin: 0px auto;
    gap: 10px;
    
    button {
        width: 100px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
        border: none;
        
        &:hover{
            filter: brightness(70%);
        }    
    }
`