// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    return (
        <section className="contact">
            <div className="contact__image">
                <img className="img" alt="gambar" src={data.photo}/>
            </div>
            <div className="contact__text">
              <p className="contact__text--name">{data.name}</p>
              <p className="contact__text--number">{data.phone}</p>
              <p className="contact__text--email">{data.email}</p>
            </div>
        </section>
    )
}

export default Contact;