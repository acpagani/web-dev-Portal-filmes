import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || []
        setFavoritos(favorites)
    }, [favoritos])

    return (
        <div className="container mx-auto px-10 pt-10 flex gap-10">
            {
                favoritos.map( filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
            }
        </div>
    )
}