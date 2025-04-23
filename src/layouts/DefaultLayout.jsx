// Navbar component
import Navbar from "../components/Navbar";
// Outlet
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}