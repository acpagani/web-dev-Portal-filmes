import { useParams } from "react-router-dom"

export default function MovieDetailPage(){
    
    const { id } = useParams()

    const movie = find(id)
    return(
        <>
        <h1>Movie Detail Page</h1>
        <p>Id usado: { id }</p>
        {/* Exibe detalhes de um filme específico. */}
        </>
    )
}