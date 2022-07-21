import "./css/recalls.css"

const contRecall = [

    {
        Q: "O que é JSX?",
        R: "Uma extensão de linguagem do JavaScript."
    },

    {
        Q: "O React é __",
        R: "Uma biblioteca JavaScript para construção de interfaces"
    },

    {
        Q: "Componentes devem iniciar com __",
        R: "letra maiúscula"
    },

    {
        Q: "Podemos colocar __ dentro do JSX",
        R: "expressões"
    },

    {
        Q: "O ReactDOM nos ajuda __",
        R: "interagindo com a DOM para colocar componentes React na mesma"
    },

    {
        Q: "Usamos o npm para __",
        R: "gerenciar os pacotes necessários e suas dependências"
    },

    {
        Q: "Usamos props para __",
        R: "passar diferentes informações para componentes"
    },

    {
        Q: "Usamos estado (state) para __",
        R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }

]

function testEvent () {
    return alert("CLICOU")
}

function RecallEvent (props) {
    
    return (
        <div className="hurbe">
            <p>{props.Q}</p>
            <ion-icon name="reload-outline"></ion-icon>
        </div>
    )
}

function Question () {
    return (
        <div className="recalls">
            {contRecall.map((e, index) => (
                <RecallEvent key={index} Q={e.Q}/>
            ))}
        </div>
    )

}

function RecallCont (props) {
    return (
        <div className="pergunta" onClick={testEvent}>
            <p>Pergunta {props.key}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}

function Recalls () {
    return (
        <div className="recalls">
            {contRecall.map((e, index) => (
                <RecallCont key={index} />
            ))}
        </div>
    )

}

export default Recalls;