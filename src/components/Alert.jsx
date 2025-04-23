// Hooks
import { useEffect, useState } from "react";
// importare custom Hook useAlert per recuperare i dati 
import { useAlert } from "../contexts/AlertContext"

// Alert

export default function Alert() {

    const { alertContent } = useAlert();

    // useState iniziale dell'alert
    const [alert, setAlert] = useState(true)

    // funzione per determinare il tempo di visibilità dell'alert (5 secondi)
    function showAlert() {

        const timeoutAlert = setTimeout(() => {
            setAlert(false);
        }, 5_000)

        return function cleanTimeout() {
            clearTimeout(timeoutAlert);
        }
    }

    useEffect(showAlert, []);

    return (
        <>
            {alert && <div>{alertContent.type}: {alertContent.message}</div>}
        </>
    )
}