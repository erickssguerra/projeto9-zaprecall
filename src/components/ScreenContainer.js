import FooterContainer from "./FooterContainer"
import LogoContainer from "./LogoContainer"
import PerguntasContainer from "./PerguntasContainer"


export default function ScreenContainer() {
    return (
        <div className="screen-container">
            <LogoContainer />
            <PerguntasContainer />
            <FooterContainer />
        </div>
    )
}