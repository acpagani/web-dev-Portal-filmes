import { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom'

export default function MovieCard({ id, title, poster_path }) {
    
    const [buttonIcon, setButtonIcon] = useState(false)
    
    const handleFavorite = (id) => {
        let favoritos = JSON.parse(localStorage.getItem('favorites')) || []
    
        const isFavorite = favoritos.some( filme => filme.id === id)

        if (isFavorite) {
            favoritos = favoritos.filter( filme => filme.id !== id )
            setButtonIcon(false)
        }
        else {
            const filmeFav = {
                id,
                title,
                poster_path
            }
            favoritos.push(filmeFav)
            setButtonIcon(true)
        }


        localStorage.setItem('favorites', JSON.stringify(favoritos))
    }

    return(
        <>
        <div className='flex flex-col items-center justify-center text-center max-w-28 gap-2 relative'>
            <h2 className='max-w-full whitespace-nowrap overflow-hidden overflow-ellipsis'>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className='w-28 h-36 object-cover object-center' alt="" />
            <button 
                onClick={() => handleFavorite(id)} 
                className='size-7 rounded-full bg-white flex items-center justify-center text-black absolute top-5 -right-3'>
                    {buttonIcon ? <MdFavorite/> : <MdFavoriteBorder/>}
            </button>
            <Link to={`/movies/${id}`} className='px-4 py-1 bg-violet-800 rounded-lg'>Saiba Mais</Link>
        </div>
        </>
    )

}