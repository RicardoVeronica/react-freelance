import "./contact.css"

const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>

      <form className="contact__form">
        <fieldset>
          <legend>Fill all fields and contact me</legend>

          <div className="contact__fields__container">
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input className="contact__input" type="text" id="name" placeholder="Your Name" />
            </div>

            <div className="contact__field">
              <label htmlFor="tel">Whatsapp</label>
              <input className="contact__input" type="tel" id="tel" placeholder="Your Whatsapp number" />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input className="contact__input" type="email" id="email" placeholder="Your Email" />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea className="contact__input" id="message"></textarea>
            </div>
          </div>

          <div className="contact__button">
            <input className="button" type="submit" value="Send" />
          </div>
        </fieldset>
      </form>
    </section >
  )
}

export default Contact