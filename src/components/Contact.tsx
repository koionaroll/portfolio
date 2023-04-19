import React, { FormEvent, HtmlHTMLAttributes, RefObject, useRef, useState } from "react";
import styled from "styled-components";
import * as stylevar from "../styles/variables";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  background-color: ${stylevar.style.backgroundTwo};
  scroll-snap-align: center;
  padding: 4rem 1rem 0;
  @media (min-width: ${stylevar.style.tabletWidth}) {
    padding: 4rem 4rem 0;
  }
  @media (min-width: ${stylevar.style.desktopWidth}) {
  }
  color: ${stylevar.style.primaryOne};
  display: grid;
  grid-template-areas:
    "top"
    "bottom";
  grid-template-rows: 3fr 1fr;
  @media (min-width: ${stylevar.style.tabletWidth}) {
    grid-template-areas: "left right";
    padding: 4rem 4rem 0;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 2fr;
  }
`;

const Email = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    padding: 3rem 0 1rem;
    font-size: 2.9rem;
    font-weight: 600;
    @media (min-width: ${stylevar.style.tabletWidth}) {
      padding-top: 6rem;
    }
  }
  input {
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
  }
  textarea {
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    height: 10rem;
    display: flex;
    top: 0;
  }
  button {
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    background-color: ${stylevar.style.primaryTwo};
    color: ${stylevar.style.primaryOne};
    transition-duration:300ms;
    &:hover{
        transition-duration:250ms;
        transition-delay:50ms;
        animation-timing-function:ease-in;
        background-color: ${stylevar.style.backgroundOne};
        cursor: pointer;
    }
  }
  section {
    display: flex;
    flex-direction: column;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items:flex-end;
  @media (min-width: ${stylevar.style.tabletWidth}) {
    align-items:flex-start;
  }
`;

function Contact() {
  const ref = useRef()
  const [success, setSuccess] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [reload, setReload] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (ref.current.name.value === "" || ref.current.email.value === "" || ref.current.message.value === ""){
        setEmpty(true)
        return;
    }else{
        setEmpty(false)
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        ref.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          setTimeout(() => {
            setReload(1);
            setTimeout(() => {
              setReload(2);
              setTimeout(() => {
                setReload(3);
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section id="section-3">
      <Email ref={ref} onSubmit={handleSubmit}>
        <h1>Get in Touch!</h1>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Write me anything!" rows={10} />
        <button type="submit" value="Send">
          Send
        </button>
        <section>
          {success
            ? "Your message has been sent. I will get back you you soon :) "
            : null}
          {empty
            ? "Please fill out all empty forms."
            : null}
          <div>
            {reload === 1 ? "Reloading in 3 ... " : null}
            {reload === 2 ? "Reloading in 2 ... " : null}
            {reload === 3 ? "Reloading in 1 ... " : null}
          </div>
        </section>
      </Email>
      <Socials>SOCIALS</Socials>
    </Section>
  );
}

export default Contact;