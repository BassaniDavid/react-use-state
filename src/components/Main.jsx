import { useState } from "react"

export default function Main(props) {

    let [activeCard, setActiveCard] = useState([props.data[0].title, props.data[0].description])

    function handleClick(description, title) {
        console.log(description)
        console.log(title)
        setActiveCard([title, description])
    }

    const listbutton = props.data.map(language => <button onClick={() => handleClick(language.description, language.title)} key={language.id} className="btn btn-primary me-4">{language.title}</button>)


    return (
        <main className="p-5">
            <div className="pb-5">
                {listbutton}
            </div>
            <div className="card p-3">
                <h3>{activeCard[0]}</h3>
                <div>{activeCard[1]}</div>
            </div>
        </main>
    )
}