import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

  return (
    <div className='flex-1 flex-col flex items-center justify-center mt-4'>
        <h2 className='text-center text-[#002F52] text-[32px]'>Ops! Não foi encontrado nada por aqui.</h2>
        <img loading='lazy'
        src='/not_found.png'
        className='w-80 h-80'
        alt='Não encontraddo.'/>

        <button className='py-3 w-1/4 bg-[#EB9B00] hover:opacity-80 rounded-md shadow-md'
        onClick={() => {
            navigate('/');
        }}>Voltar para o início
        </button>
   </div>
  )
}

export default NotFound
