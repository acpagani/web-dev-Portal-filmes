import { NavLink } from "react-router-dom";
import Login from "./login";
import { useState } from "react";

export default function Header(){

    const [isLogged, setIsLogged] = useState(false)
    const handleLogin = () => {
        setIsLogged(!isLogged)
    }

    return(
        <>
            <header className="flex p-8 justify-between bg-violet-800 items-center text-white">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
                        <li><NavLink to="/movies" className="hover:underline">Filmes</NavLink></li>
                        <li><NavLink to="/genre" className="hover:underline">Gêneros</NavLink></li>
                        <li><NavLink to="/favoritos" className="hover:underline">Favoritos</NavLink></li>
                        <li><NavLink to="/contato" className="hover:underline">Contato</NavLink></li>
                        {isLogged && 
                            <li><NavLink to="/settings" className="hover:underline">Configurações</NavLink></li>}
                    </ul>
                </nav>
                <Login isLogged={isLogged} handleLogin={handleLogin}/>
            </header>
        </>
    )
}