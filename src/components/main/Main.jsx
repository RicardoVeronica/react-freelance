import LaravelIcon from "./LaravelIcon"
import ReactIcon from "./ReactIcon"
import WordpressIcon from "./WordpressIcon"
import Service from "./Service"

import "./main.css"

const Main = () => {
  return (
    <>
      <main>
        <h2>My Services</h2>

        <section>
          <Service
            title="Laravel Framework"
            icon={<LaravelIcon />}
            description="Crafting seamless online experiences with precision, passion, and a touch of magic."
          />
        </section>

        <section>
          <Service
            title="React and Next"
            icon={<ReactIcon />}
            description="Architecting innovative software solutions with expertise, efficiency, and a commitment to exceeding client expectations. Transforming ideas into reality."
          />
        </section>

        <section>
          <Service
            title="Wordpress CMS"
            icon={<WordpressIcon />}
            description="Globally acclaimed, empowering countless websites with unparalleled versatility, simplicity, and widespread adoption."
          />
        </section>
      </main>
    </>
  )
}

export default Main
