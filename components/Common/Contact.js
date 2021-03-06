import React from "react"

const Contact = () => {
    return (
        <div id="contact" className="container-height contact-form">
            <h1 >Contact me below!</h1>
            <form 
                method="POST" 
                name="contactForm"
                data-netlify="true"
                className="contactForm">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name" />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email" />
                <textarea 
                    name="message" 
                    placeholder="Messaage"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact