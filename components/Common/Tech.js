import React from "react"
import Image from "next/image"

const Tech = () => {
  return (
    <div className="tech-img-wrapper">
        <Image width={1500} height={800} id="tech" className="tech-img" src="/images/techstack-photo.png" alt="techstack photo" />
    </div>
  )
}

export default Tech