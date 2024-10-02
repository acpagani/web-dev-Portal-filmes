import { useState } from "react"
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"

export default function MovieListPage(){
    
    const [search, setSearch] = useState('')

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search);
        
    }

    const filmesFiltrados = movies.filter( filme => (
        filme.titulo.toLowerCase().includes(search.toLowerCase())
    ))

    return(
        <>
            <h1>Veja o catálogo completo de filmes</h1>
            <input 
                className="text-black"
                type="text" 
                name="search"
                id="search"
                value={search}
                onChange={handleSearch}
            />

            <div className="flex gap-6">
                {
                    filmesFiltrados.length > 0 ?
                    filmesFiltrados
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme}/>
                        ))
                    :
                    <p>Não há filmes com esse nome.</p>
                }
            </div>
        </>
    )
}