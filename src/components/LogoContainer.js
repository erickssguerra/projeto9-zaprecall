
import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default function LogoContainer() {
    return (
        <LogoContainerStyled>
            <img src={logo} alt="logo ZapRecall" />
            <h1>ZapRecall</h1>
        </LogoContainerStyled>
    )
}

const LogoContainerStyled = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    justify-content: center;
    width: 100%;
    min-height: 80px;
    background-color: #FB6B6B;
    box-shadow: none;
    top: 0;

    
    img {
        width: 52px;
    }
    
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
  }

`