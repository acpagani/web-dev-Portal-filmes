import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import { mirage } from 'ldrs'

mirage.register()

// Default values shown


export default function MovieListPage(){
    
    const [search, setSearch] = useState('')
    const [filmes, setFilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            fetch("https://api.themoviedb.org/3/discover/movie?api_key=b013c03095cf05781b8b6c779ceaf80b&language=pt-BR")
                .then(res => res.json())
                .then(res => setFilmes(res.results))
                .catch(erro => console.error(erro))
                .finally(() => setIsLoading(false))
        }, 2000)
    }, [])
    

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search);
        
    }

    const filteredFilmes = filmes.filter(filme =>
        filme.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto px-10 pt-10 flex flex-col gap-10 items-center justify-center">
            <h1>Veja o catálogo completo de filmes</h1>
            <input
                className="text-black"
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={handleSearch}
            />

            <div className="flex gap-6 flex-wrap">
                {isLoading ? (
                    <l-mirage
                        size="60"
                        speed="2.5"
                        color="white"
                        className=""
                    ></l-mirage>
                ) : filteredFilmes.length > 0 ? (
                    filteredFilmes.map(filme => (
                        <MovieCard key={filme.id} {...filme} />
                    ))
                ) : (
                    <p>Nenhum filme encontrado.</p>
                )}
            </div>
        </div>
    );
}