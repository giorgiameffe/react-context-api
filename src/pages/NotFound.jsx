import { Link } from "react-router-dom"
// Not found

export default function NotFound() {
    return (
        <div className="not-found main-container">
            <h1>Ops..Pagina non trovata!</h1>
            <Link className="not-found-link" to='/'>Torna alla home</Link>
        </div>
    )
}