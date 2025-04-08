import { useState } from "react"

export default function Main(props) {

    let [activeCard, setActiveCard] = useState("nessun linguaggio selezionato")

    function handleClick(description) {
        setActiveCard(description)
    }

    const listbutton = props.data.map(language => <button onClick={handleClick(language.description)} key={language.id}>{language.title}</button>)


    return (
        <main>
            {listbutton}
            <div className="card">
                <div>{activeCard}</div>
            </div>
        </main>
    )
}