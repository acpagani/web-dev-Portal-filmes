import { Link } from 'react-router-dom'

export default function MovieCard({ id, titulo, imagem_destaque }) {
    return(
        <>
        <div className='flex flex-col items-center justify-center'>
            <h2>{titulo}</h2>
            <img src={imagem_destaque} className='w-28 h-36 object-cover' alt="" />
            <Link to={`/movies/${id}`}>Saiba Mais</Link>
        </div>
        </>
    )

}