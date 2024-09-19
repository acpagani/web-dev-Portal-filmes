import { NavLink } from "react-router-dom";

export default function Header(){
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
                    </ul>
                </nav>
            </header>
        </>
    )
}