import React from "react";
import person1 from "../images/person1.jpeg";

const Credential = () => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="container">
        <section className="section1">
          <div className="img_section">
            <img src={person1} alt="Review" className="imgs" srcset="" />
            <div className="box-style"></div>
          </div>
          <div className="review_corner">
            <p className="main_name">David Wil</p>
            <p className="city">Country</p>
            <div className="reviews">
              {arr.map((arrs) => (
                <i class="fa-solid fa-star"></i>
              ))}
              <i class="fa-regular fa-star-half-stroke"></i>
            </div>
            <p className="review_data">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              dolores a, error quisquam esse delectus magni repellat fugiat
              incidunt unde, sint vitae ipsum.
            </p>
          </div>
        </section>
        <section className="section1">
          <div className="img_section">
            <img src={person1} alt="Review" srcset="" />
          </div>
          <div className="review_corner">
            <p className="main_name">David Wil</p>
            <p className="city">Country</p>
            <div className="reviews">
              {arr.map((arrs) => (
                <i class="fa-solid fa-star"></i>
              ))}
              <i class="fa-regular fa-star-half-stroke"></i>
            </div>
            <p className="review_data">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              dolores a, error quisquam esse delectus magni repellat fugiat
              incidunt unde, sint vitae ipsum.
            </p>
          </div>
        </section>
        <section className="section1">
          <div className="img_section">
            <img src={person1} alt="Review" srcset="" />
          </div>
          <div className="review_corner">
            <p className="main_name">David Wil</p>
            <p className="city">City</p>
            <div className="reviews">
              {arr.map((arrs) => (
                <i class="fa-solid fa-star"></i>
              ))}
              <i class="fa-regular fa-star-half-stroke"></i>
            </div>
            <p className="review_data">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              dolores a, error quisquam esse delectus magni repellat fugiat
              incidunt unde, sint vitae ipsum.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default Credential;
