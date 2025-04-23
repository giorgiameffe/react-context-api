// useAlert
import { useAlert } from "../contexts/AlertContext"
// Alert

export default function Alert() {

    const { alert } = useAlert();

    return (
        <>
            {alert.message && <div>{alert.type}: {alert.message}</div>}
        </>
    )
}