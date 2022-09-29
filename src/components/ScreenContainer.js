import { useState } from "react"
import FooterContainer from "./FooterContainer"
import LogoContainer from "./LogoContainer"
import PerguntasContainer from "./PerguntasContainer"
import perguntas from "./perguntas"



export default function ScreenContainer() {
    const [contador, setContador] = useState(0)
    console.log("contador: ", contador)
    return (
        <div className="screen-container">
            <LogoContainer />
            <PerguntasContainer contador={contador} setContador={setContador} />
            <FooterContainer perguntas={perguntas} contador={contador} />
        </div>
    )
}