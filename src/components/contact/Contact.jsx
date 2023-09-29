import "./contact.css"

const Contact = () => {
  return (
    <>
      <section>
        <h2>Contact</h2>

        <form action="">
          <fieldset>
            <legend>Fill all fields and contact me</legend>

            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>

            <div>
              <label htmlFor="tel">Whatsapp</label>
              <input type="tel" id="tel" placeholder="Your Whatsapp number" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message"></textarea>
            </div>

            <div>
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </section >
    </>
  )
}

export default Contact