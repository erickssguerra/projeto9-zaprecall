import { useState } from "react"
import FooterContainer from "./FooterContainer"
import LogoContainer from "./LogoContainer"
import FlashCardsContainer from "./FlashCardsContainer"
import styled from "styled-components"

export default function ScreenContainer() {
    const [contador, setContador] = useState(0)
    return (
        <ScreenContainerStyled >
            <LogoContainer />
            <FlashCardsContainer contador={contador} setContador={setContador} />
            <FooterContainer contador={contador} />
        </ScreenContainerStyled>
    )
}

const ScreenContainerStyled = styled.div`

    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 80px;
    padding-top: 80px;
`