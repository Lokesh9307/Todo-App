import React from 'react'
import logo from 'D:\\web related all\\React tutorial 2023\\todo-app\\src\\assets\\logoTodo.svg'
import '../App.css';


const Heading = () => {
    return (
        <div>
            <div className='flex place-item-center justify-between bg-transparent headingComp'>
            <img src={logo} alt="logo" className='w-21 logo mt-2' style={{width:'200px', borderRadius:'20px', fontWeight:'bold'}}/>
            
            <h1 className='text-center font-bold text-5xl text-lime-950 sm:text-3xl'>ToDo Application</h1><br />
            </div>
            <div>
            <p className='text-center mt-8 text-2xl text-lime-950 font-semibold'>Make your own list of ToDos with fastest and better way!</p>
            </div>
        </div>
    )
}

export default Heading