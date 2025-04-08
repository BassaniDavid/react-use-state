import languages from "../languages"

export default function Main() {
    const listbutton = languages.map(language => <button key={language.id}>{language.title}</button>)

    return (
        <main>
            {listbutton}
        </main>
    )
}