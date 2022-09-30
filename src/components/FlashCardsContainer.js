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
        </>
    )


}