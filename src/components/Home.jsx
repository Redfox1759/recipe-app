import React from 'react'
import logo from '../assets/images/logo.jpg'

const Home = () => {
  return (
    <div className='py-20 px-2 max-w-4xl mx-auto '>
        <h1 className='text-4xl lg:text-5xl text-neautral-800 bg-neutral-200 rounded-lg font-bold text-center' >Recipe App</h1> 

        <form className='my-16' >
            <input 
              type="text"  
              name= "search" 
              id='search' 
              placeholder='Enter ingridient' 
              required 
              className='w-full py-3 px-8 rounded-full bg-neutral-100 border-2 border-neutral-300 focus:border-neutral-400 outline-none mt-10 mb-20 text-lg focus: ring-4 focus:ring-neutral-200 transition lg:text-xl'
            />
        </form>

        <div>
          <article>
             
            <h2 className=' flex items-center gap-3 text-3xl lg:text-4xl text-neautral-800 font-bold'>
              Name of Meal 
              <span className='bg-neutral-200 font-normal text-sm px-2 rounded-full'>Category
                </span> 
                <span className='bg-neutral-200 font-normal text-sm px-2 rounded-full ml-2'>
                  Region
                </span>
            </h2>

            {/* //remember to put the alt as the recipe name alt={recipe.name} */}
            <img src={logo} alt='logo' />

            <h3>Ingridients</h3>

            <ul>
                <li>Ingridient 1</li>
                <li>Ingridient 2</li>
                <li>Ingridient 3</li>
                <li>Ingridient 4</li>
                <li>Ingridient 5</li>
            </ul>    

            <h3>Instructions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vitae veniam culpa quod repudiandae tempora consectetur voluptas quo asperiores natus.</p>        

            <ul>
              <li>Video</li>
              <li>Source</li>
            </ul>



          </article>
        </div>
    </div>
  )
} 

export default Home
