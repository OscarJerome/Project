import Image from 'next/image'
import education from '../education.JPG'
export default function About(){
    return(
        <>
        <div>
        <img src={education} alt='me ' />
        </div>
        <div>

        <h1 className={`
        text-blue-300 font-bold text-lg`
        }>About Me</h1>
        <p className={`
        font-extralight text-black item-center
        `}
        
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita laudantium accusamus delectus, eum nostrum?</p>

        </div>

        <button 
        className={`
        border-2 p-3  bg-gray-400 rounded-xl font-medium text-blue-300 hover:cursor-poin
        `}
        >
            Let's Talk
        </button>
        </>
    )
}