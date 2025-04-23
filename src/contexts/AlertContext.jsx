// Hooks + createContext per creare un Context API pattern
import { createContext, useContext, useState } from "react";

// Definizione del contesto => Alert Context
const AlertContext = createContext();

// Componente in cui sono presenti tutti i dati che si vogliono rendere disponibili 
// agli altri componenti al suo interno
function AlertProvider({ children }) {

    const [alertContent, setAlertContent] = useState({ type: 'info', message: 'Alert Component' });

    return (
        <AlertContext.Provider value={{ alertContent, setAlertContent }}>
            {children}
        </AlertContext.Provider>)
}

// Definire hook per consumare il contesto 

function useAlert() {
    const context = useContext(AlertContext);
    return context;
}

export { AlertProvider, useAlert };