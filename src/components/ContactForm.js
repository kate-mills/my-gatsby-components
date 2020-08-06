import React from 'react'
import Title from './ContactTitle'
import styles from '../css/contact.module.css'

const Contact = () => {
  function submitFn() { console.log("The form was submitted!"); }
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          onSubmit={submitFn}
          className={styles.form}
        >
          <div>
            <label htmlFor="name">name: &lowast;
              <input
                type="text"
                name="name"
                id="name"
                className={styles.formControl}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">email: &lowast;
              <input type="email"
                name="email"
                id="email"
                className={styles.formControl}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">Phone: &lowast;
              <input type="tel"
                name="phone"
                id="phone"
                className={styles.formControl}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="subject">subject: &lowast;
              <input type="text" name="subject" id="subject" className={styles.formControl} required/>
            </label>
          </div>
          <div>
            <label htmlFor="license">Professional License Number:
              <input type="text" name="license" id="license" className={styles.formControl} />
            </label>
          </div>
          <div>
            <label htmlFor="message">message: &lowast;
              <textarea
                name="message"
                id="message"
                rows="7"
                className={styles.formControl}
                placeholder="hello there"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="reference">How Did You Hear About Us?: &lowast;
              <select type="text" name="reference" id="reference" className={styles.formControl} required>
                <option value="Licensed Professional">Licensed Professional</option>
                <option value="Internet Search">Internet Search</option>
                <option value="Friend">Friend</option>
                <option value="Trade Show">Trade Show</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="website">Website:
              <input type="url" name="website" id="website" className={styles.formControl}
              />
            </label>
          </div>
          <div>
            <input type="submit" value="send" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact
