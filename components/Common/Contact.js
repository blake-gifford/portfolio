import React from 'react'

const Contact = () => {
    return (
        <div>
            <h1 className='intro-text'>Contact me below!</h1>
            <form 
                method='POST' 
                name='contactform' 
                className='contactForm'>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Enter your name' />
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Enter your email' />
                <textarea 
                    name='message' 
                    placeholder='Messaage'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact