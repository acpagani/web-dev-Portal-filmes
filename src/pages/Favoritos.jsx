import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || []
        setFavoritos(favorites)
    }, [])
    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
            setFavoritos(updatedFavorites)
        }, 100)
        return () => clearInterval(intervalId)
    }, [])
    return (
        <div className="flex flex-col container mx-auto px-10 pt-10 gap-6 ">
            <h1 className="text-3xl font-bold">
                Meus filmes favoritos
            </h1>
            <div className="flex gap-10">
                {
                    favoritos.length > 0 ?
                    (favoritos.map( filme => (
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                ): (
                    <h1 className="text-2xl">Você ainda não tem filmes favoritos</h1>
                )
                    
                }
            </div>
        </div>
    )
}