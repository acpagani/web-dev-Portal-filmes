import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"
import { useParams } from "react-router-dom"

export default function MovieDetailPage(){
    
    const { id } = useParams()
    const [filme, setFilme] = useState({})
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b013c03095cf05781b8b6c779ceaf80b&language=pt-BR`)
            .then(response => response.json())
            .then(data => {setFilme(data)
                console.log(data);
                
            })
            .catch(err => console.log(err));
    }, [id])

    return(
        <>
        {
            filme ?
                <div className="flex justify-between">
                    <div className="flex flex-col gap-5">
                        <h1>{filme.title}</h1>
                        <div className="flex gap-2 items-center">
                            <FaStar/>
                            <p>{filme.vote_average}</p>
                        </div>
                        <p className="max-w-prose">{filme.overview}</p>
                    </div>
                    <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} className='object-cover object-center' alt="" />
                </div>

            :
            <p>Filme não encontrado</p>
        }
        </>
    )
}