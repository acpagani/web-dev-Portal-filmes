import { useEffect, useState } from "react"
import { FaCalendarAlt, FaStar } from "react-icons/fa"
import { useParams } from "react-router-dom"

export default function MovieDetailPage(){
    
    const { id } = useParams()
    const [filme, setFilme] = useState({})
    const [trailer, setTrailer] = useState({})
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b013c03095cf05781b8b6c779ceaf80b&language=pt-BR`)
            .then(response => response.json())
            .then(data => {setFilme(data)
                console.log(data);
                
            })
            .catch(err => console.log(err));
        
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b013c03095cf05781b8b6c779ceaf80b&language=pt-BR`)
        .then(response => response.json())
        .then(data => {setTrailer(data)
            console.log(data);
            
        })
        .catch(err => console.log(err));
    }, [id])

    return(
        <>
        {
            filme ?
                <div className="w-full">
                    <div className="flex justify-between gap-20 mx-auto container py-10 px-20">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-4xl font-bold">{filme.title}</h1>
                            <p className="max-w-prose text-lg">{filme.overview}</p>
                            <div className="flex gap-10 items-center">
                                <div className="flex gap-2 items-center">
                                    <FaStar/>
                                    <p className="font-bold">{filme.vote_average}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FaCalendarAlt/>
                                    <p className="font-bold">{filme.release_date}</p>
                                </div>
                            </div>
                        </div>
                        <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} className='object-cover object-center h-96 rounded-lg' alt="" />
                    </div>
                    <div className="flex flex-col container justify-center gap-10 mx-auto px-20 py-10">
                        <h1 className="text-3xl font-bold">Trailer</h1>
                        { trailer?.results?.[0]?.key &&
                            <iframe className="h-[80vh] rounded-xl" src={`https://www.youtube.com/embed/${trailer.results[0].key}`}></iframe>
                        }
                    </div>
                </div>
            :
            <p>Filme não encontrado</p>
        }
        </>
    )
}