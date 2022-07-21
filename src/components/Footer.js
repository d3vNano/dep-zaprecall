import "./css/footer.css"

    function Etapas (props) {
            return (
                <div className="footer">
                    <p>{props.etapa}/{props.quantidade} CONCLUÍDOS</p>
                </div>
            )
        }

export default function Footer () {
    return (
        <Etapas etapa="0" quantidade="4"/>
    )
}