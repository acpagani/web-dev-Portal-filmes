import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";

export default function Home(){

    const [filmesPopulares, setFilmesPopulares] = useState([])
    const [filmesTrending, setFilmesTrending] = useState([])
    const [filmesUpcoming, setFilmesUpcoming] = useState([])

    const fetchMovies = async () => {
        try {

            // Juntando todos os fetchs
            const [resPopulares, resTrending, resUpcoming] = await Promise.all(
                [
                    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`),
                    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`)
                ]
            )

            // Convertendo em JSON
            const popularData = await resPopulares.json()
            const trendingData = await resTrending.json()
            const upcomingData = await resUpcoming.json()

            // Atualizar o estado
            setFilmesPopulares(popularData.results)
            setFilmesTrending(trendingData.results)
            setFilmesUpcoming(upcomingData.results)
        }
        catch (error) {
            console.error("Falha ao carregar os filmes:", error);
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return(
        <>
        <CardContainer titulo={"Filmes Populares"}>
            {

                filmesPopulares
                .map( filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
            }
        </CardContainer>
        <CardContainer titulo={"Filmes em alta"}>
            {
                filmesTrending
                .map( filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
            }
        </CardContainer>
        <CardContainer titulo={"Filmes em breve"}>
            {
                filmesUpcoming
                .map( filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
            }
        </CardContainer>
        </>
    )
}