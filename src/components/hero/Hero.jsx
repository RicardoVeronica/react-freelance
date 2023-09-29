import "./hero.css"

const Hero = () => {
  return (
    <>
      <section>
        <h2>Design and Development Freelance</h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-map-2"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#ffec00"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
          <path d="M9 4v13"></path>
          <path d="M15 7v5.5"></path>
          <path
            d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"
          ></path>
          <path d="M19 18v.01"></path>
        </svg>

        <p>Guadalajara, Jalisco</p>

        <a href="#">Contact</a>
      </section>
    </>
  )
}

export default Hero
