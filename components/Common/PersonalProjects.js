import React from "react"
import Image from "next/image"

const PersonalProjects = () => {
    return (
        <div id="personal" className="container-height title-style">
            <h2>Personal Projects</h2>
            <div className=" card-style card-div-spacing">
                <div className="card card-height" style={{ "width": "18rem" }}>
                    <Image height={325} width={500} className="card-img-top" src="/images/recipe-website.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">The Recipe Book</h5>
                        <p className="card-text">React/Next.js app built for helping people decide what to cook/bake when they are hungry.</p>
                        <a href="https://github.com/blake-gifford/Trip_App" target='_blank' rel="noreferrer" className="btn btn-primary card-btn-style">Github</a>
                        <a href="https://recipe-book.blakegifford.com/" target='_blank' rel="noreferrer" className="btn btn-primary card-btn-style">Demo</a>
                    </div>
                </div>
                {/* <div className="card card-height" style={{ "width": "18rem" }}>
                    <Image height={325} width={500} className="card-img-top" src="/images/test.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card"s content.</p>
                        <a href="#" className="btn btn-primary card-btn-style">Github</a>
                        <a href="#" className="btn btn-primary card-btn-style">Demo</a>
                    </div>
                </div> */}
                {/* <div className="card card-height" style={{"width": "18rem"}}>
                <Image height={325} width={500} className="card-img-top" src="/images/test.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card"s content.</p>
                    <a href="#" className="btn btn-primary card-btn-style">Github</a>
                    <a href="#" className="btn btn-primary card-btn-style">Demo</a>
                </div>
                </div> */}
            </div>
        </div>
    )
}

export default PersonalProjects