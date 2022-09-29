export default function FooterContainer(props) {
    const { perguntas, contador } = props


    return (
        <div className="footer-concluidos">
            {contador}/{perguntas.length} concluídos
        </div>
    )

}