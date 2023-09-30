import LaravelIcon from "./icons/LaravelIcon"
import ReactIcon from "./icons/ReactIcon"
import WordpressIcon from "./icons/WordpressIcon"

import Contact from "../contact/Contact"

import Service from "./Service"

import "./main.css"

const Main = () => {
  return (
    <>
      <main className="container shadow main">
        <h2>My Services</h2>

        <div className="main__services">

          <div className="main__service">
            <section>
              <Service
                title="Laravel Framework"
                icon={<LaravelIcon />}
                description="Crafting seamless online experiences with precision, passion, and a touch of magic."
              />
            </section>
          </div>

          <div className="main__service">
            <section>
              <Service
                title="React and Next"
                icon={<ReactIcon />}
                description="Architecting innovative software solutions with expertise, efficiency, and a commitment to exceeding client expectations. Transforming ideas into reality."
              />
            </section>
          </div>

          <div className="main__service">
            <section>
              <Service
                title="Wordpress CMS"
                icon={<WordpressIcon />}
                description="Globally acclaimed, empowering countless websites with unparalleled versatility, simplicity, and widespread adoption."
              />
            </section>
          </div>
        </div>

        <Contact />
      </main >
    </>
  )
}

export default Main
