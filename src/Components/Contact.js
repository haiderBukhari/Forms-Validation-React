import React from "react";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import {Link} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Hero from '../images/hero_contact.jpg';
import "./Contact.css";
const Contact = () => {
  const form = useRef();
  const generate_error = (field) => {
    toast.error(`${field} fields is Required!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if (message === "" || name === "" || contact === "" || subject === "") {
      setTimeout(() => {
        if (message === "") { generate_error("Message") }
      }, 300)
      setTimeout(() => {
        if (name === "") { generate_error("Name") }
      }, 600)
      setTimeout(() => {
        if (contact === "") { generate_error("Contact") }
      }, 900)
      setTimeout(() => {
        if (subject === "") { generate_error("Subject") }
      }, 1200)
    } else {
      console.log(form.current.user_name);
      emailjs
        .sendForm(
          "service_y37rg9a",
          "template_qiugir9",
          form.current,
          "3_FMSuxECQ-I7VZpG"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      toast.success("Message Sent Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setname("");
      setcontact("");
      setsubject("");
      setmessage("");
    }
  };

  let [name, setname] = useState("");
  let [contact, setcontact] = useState("");
  let [subject, setsubject] = useState("");
  let [message, setmessage] = useState("");

  let handlename = (e) => {
    setname(e.target.value);
  };
  let handlecontact = (e) => {
    setcontact(e.target.value);
  };
  let handlesubject = (e) => {
    setsubject(e.target.value);
  };
  let handlemessage = (e) => {
    setmessage(e.target.value);
  };
  let handledelete_name = () => {
    setname("");
  };
  let handledelete_contact = () => {
    setcontact("");
  };
  let handledelete_subject = () => {
    setsubject("");
  };
  let handledelete_message = () => {
    setmessage("");
  };
  // let navig = Navigate();
  return (
    <>
      <div className="contact-form">
        <header>
          <div className="header-container">
            <div className="banner-img">
              <img src={Hero} />
            </div>
            <div className="banner-detail">
              <button className="btn-s"></button>
              <p className="car-1"><span>Best Car</span></p>
              <p className="car-2">SERVICE</p>
              <p className="car-3">A regular Service shedule of your car can help to keep running at it's best.</p>
              <button className="reviews1"><Link to="/credential" className="link">Check out the Reviews</Link><i class="fa-solid fa-arrow-right"></i></button>
              <hr />
            </div>
          </div>
          {/* <div className="img"></div> */}
        </header>
        <footer>
          <p className="heading">Let's start a Conversation</p>
          <div className="main">
            <div className="left">
              <p className="help">Ask how we can help you:</p>
              <div className="left-platform">
                <p className="color-black font gap">Get a free Guidance</p>
                <p className="color-grey font1">
                  Discover the perfect{" "}
                  <span className="color-blue">travel experience</span> with our
                  expert advice and recommendations.
                </p>

                <p className="color-black font gap">Quick Response Time</p>
                <p className="color-grey font1">
                  Assure visitors of your commitment to prompt replies. Mention
                  that you strive to respond within a certain timeframe, such as
                  <span className="color-blue"> 24 hours</span>, to instill
                  confidence in your customer service.
                </p>
                <p className="color-black font gap">
                  Location{" "}
                  <span className="color-blue">
                    (All areas near manchestor)
                  </span>
                </p>
                <div className="mapouter add_space">
                  <div className="gmap_canvas">
                    {
                      <iframe
                        className="gmap_iframe"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Manchester Airport&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      ></iframe>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <form ref={form} onSubmit={sendEmail}>
                <p className="left-platform font help1 color-grey">
                  Please note: all fields are required.
                </p>
                <label htmlFor="name" className="label">
                  Name<sub className="red">*</sub>
                </label>
                <div className="inputs">
                  <input
                    onChange={handlename}
                    type="text"
                    id="name"
                    className="all"
                    value={name}
                    name="user_name"
                  />
                  <i
                    onClick={handledelete_name}
                    className="fa-regular fa-circle-xmark"
                  ></i>
                </div>

                <label htmlFor="label subject" className="label">
                  Contact<sub className="red">*</sub>
                </label>
                <div className="inputs">
                  <input
                    onChange={handlecontact}
                    type="text"
                    id="subject"
                    className="all"
                    value={contact}
                    name="user_contact"
                  />
                  <i
                    onClick={handledelete_contact}
                    className="fa-regular fa-circle-xmark"
                  ></i>
                </div>

                <label htmlFor="label subject" className="label">
                  Subject<sub className="red">*</sub>
                </label>
                <div className="inputs">
                  <input
                    onChange={handlesubject}
                    type="text"
                    id="subject"
                    className="all"
                    value={subject}
                    name="user_subject"
                  />
                  <i
                    onClick={handledelete_subject}
                    className="fa-regular fa-circle-xmark"
                  ></i>
                </div>
                <label htmlFor="label comment" className="label">
                  Message/Comments<sub className="red">*</sub>
                </label>
                <div className="inputs">
                  <textarea
                    onChange={handlemessage}
                    id=""
                    cols="30"
                    rows="10"
                    className="all alpha"
                    value={message}
                    name="user_message"
                  ></textarea>
                  <i
                    onClick={handledelete_message}
                    className="fa-regular fa-circle-xmark"
                  ></i>
                </div>
                <button type="submit" className="all alls">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </footer>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
