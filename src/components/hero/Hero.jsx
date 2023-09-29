import Icon from "./Icon"

import "./hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h2>Design and Development Freelance</h2>

        <div className="hero__icontext">
          <Icon />

          <p>
            Guadalajara, Jalisco
          </p>
        </div>

        <a className="button" href="#">Contact</a>
      </div>
    </section >
  )
}

export default Hero
