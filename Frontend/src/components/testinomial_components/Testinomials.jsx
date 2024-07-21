import React, { useEffect } from "react";
import Images from "../../All_Images/Images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./testinomial.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper/core";
SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);
export default function Testinomials() {
  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Testimonials | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "Fodrix testimonials - check out how much our customers loved their experience with the fodrixographer."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/testimonial");
  }, []);
  return (
    <>
      <h1 className="heading_testimonial_components m-2 text-center font-weight-bold">
        {" "}
        Hear from customers like you
      </h1>
      <Swiper
        navigation={true}
        spaceBetween={40}
        // effect={"coverflow"}
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={"auto"}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        pagination={true}
        className="mySwiper"
      >




<SwiperSlide>
         
         <figure class="snip1157 hover">
 <blockquote><h6>A BIG heartfelt thanks to you for all these amazing captures in time! </h6>
 These will be cherished forever. Thank you sooo much for all your hard work, they are absolutely wonderful....just can't get enough of these.
               
 <div class="arrow"></div>
 </blockquote>
 <img src="https://i.postimg.cc/MTtwpBRS/Dr-Namrata-Bharti.jpg" alt="namrata" />
 <div class="author">
   <h6> Dr. Namrata Bharti<span> </span></h6>
 </div>

</figure>
       </SwiperSlide>

       <SwiperSlide>
        
        <figure class="snip1157 hover">
<blockquote><h6>The best from the bests. Professionals with a good set of experience. 
</h6>
Photography skills were amazing and it was a nice experience working with them. Will surely prefer them over any other photographers for functions, parties, photoshoots, etc.


              
<div class="arrow"></div>
</blockquote>
<img src="https://i.postimg.cc/pdqYWjzD/Animesh-Dubey.jpg" alt="animesh" />
<div class="author">
  <h6> Animesh Dubey<span> </span></h6>
</div>
</figure>
      </SwiperSlide>


      <SwiperSlide>
        
        <figure class="snip1157 hover">
<blockquote><h6>Fodrix team is well professional in taking attractive poses of photos and videos quality and their team behaviour is like a family member.
</h6>They suggest latest types of poses that make the moments very special.
Fodrix services are excellent.
              
<div class="arrow"></div>
</blockquote>
<img src="https://i.postimg.cc/T2FSvKVy/Ankit-Srivastava.jpg" alt="ankit" />
<div class="author">
  <h6>Ankit Srivastava<span> </span></h6>
</div>
</figure>
      </SwiperSlide>


      <SwiperSlide>
        
        <figure class="snip1157 hover">
<blockquote><h6>Best photographer and very professional.
</h6>
My overall experience was very good. The whole team of Fodrix are very professional and cooperative. The best part is they try to give creativity in their works which next level.

              
<div class="arrow"></div>
</blockquote>
<img src="https://i.postimg.cc/MHpjsZTq/Ambika-Kulkarni.jpg" alt="ambika" />
<div class="author">
  <h6> Ambika Kulkarni<span> </span></h6>
</div>
</figure>
      </SwiperSlide>

      <SwiperSlide>
        
        <figure class="snip1157 hover">
<blockquote><h6>You really know how to capture the perfect moment.❣
Fodrix team is amazing.
</h6>They always tries there best to make your wedding shoot as much FUN as possible. Go for them guys. They are one of the best!!

              
<div class="arrow"></div>
</blockquote>
<img src="https://i.postimg.cc/tJsFqCHD/Ajay-Sachdeva.jpg" alt="ajay" />
<div class="author">
  <h6> Ajay Sachdeva<span> </span></h6>
</div>
</figure>
      </SwiperSlide>


      <SwiperSlide>
        
        <figure class="snip1157 hover">
<blockquote><h6>They make every moment alive with their photography..
</h6>
Fodrix Team is so good at photography! 
 I’m sure people have told you that before, but I mean it!
<div class="arrow"></div>
</blockquote>
<img src="https://i.postimg.cc/xdV9R0j7/Nitish-Pandey.jpg" alt="nitish" />
<div class="author">
  <h6> Nitish Pandey<span> </span></h6>
</div>
</figure>
      </SwiperSlide>

        <SwiperSlide>
          {/* <Card style={{ backgroundColor: "#f8f8ff" }}>
            <span className="m-3" style={{ color: "#21abcd" }}>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </span>

            <Card.Body>
              <Card.Text>
                <b>Mohit is an incredible photographer!</b>

                <p style={{ fontSize: "14px" }}>
                  He has a great eye for capturing naturally beautiful photos.
                  Mohit is very professional, listens to your needs and goes
                  above and beyond to meet them! Book him ASAP!
                </p>
              </Card.Text>
            </Card.Body>

            <div className="mt-1">
              <div className="col-3">
               
                <img
                  loading="lazy"
                  src={Images.mehul}
                  alt="Mehul-rastogi"
                  border="0"
                  width="90px"
                  height="50px"
                />
              </div>

              <div className="col-12">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Mehul Rastogi
                </span>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Travel photoshoot
                </p>
              </div>
            </div>
          </Card> */}

<figure class="snip1157">
  <blockquote><h6>Mohit is an incredible photographer!</h6> He has a great eye for capturing naturally beautiful photos.
                  Mohit is very professional, listens to your needs and goes
                  above and beyond to meet them! Book him ASAP!
    <div class="arrow"></div>
  </blockquote>
  <img src={Images.mehul} alt="mehul" />
  <div class="author">
    <h6> Mehul Rastogi <span>  Travel photoshoot</span></h6>
  </div>
</figure>
        </SwiperSlide>

        <SwiperSlide>
          {/* <Card style={{ backgroundColor: "#f8f8ff" }}>
            <span className="m-3" style={{ color: "skyblue" }}>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </span>

            <Card.Body>
              <Card.Text>
                <b>Amazing experience through and through!</b>

                <p style={{ fontSize: "14px" }}>
                  The support team as extremely helpful and able to accomodate
                  our last minute request for a very important shoot.
                </p>
              </Card.Text>
            </Card.Body>

            <div className=" mt-1">
              <div className="col-3">
              
                <img
                  loading="lazy"
                  src={Images.ojaswi}
                  alt="ojaswi"
                  border="0"
                  width="90px"
                  height="50px"
                />
              </div>
              <div className="col-12">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Ojaswi Gaikwad
                </span>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Business photoshoot
                </p>
              </div>
            </div>
          </Card> */}
          <figure class="snip1157 hover">
  <blockquote><h6>Amazing experience through and through!</h6>
  The support team as extremely helpful and able to accomodate
                  our last minute request for a very important shoot.
                
  <div class="arrow"></div>
  </blockquote>
  <img src={Images.ojaswi} alt="ojaswi" />
  <div class="author">
    <h6> Ojaswi Gaikwad<span> Business photoshoot</span></h6>
  </div>
</figure>
        </SwiperSlide>
        <SwiperSlide>
          {/* <Card style={{ backgroundColor: "#f8f8ff" }}>
            <span className="m-3" style={{ color: "skyblue" }}>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </span>

            <Card.Body>
              <Card.Text>
                <b>
                  The team was very efficient and flexible, and the
                  photographers were very professional.
                </b>

                <p style={{ fontSize: "14px" }}>
                  Booked a baby shoot with fodrix and the photos turned out
                  amazing! They clicked very cute and adorable photos of the
                  baby.
                </p>
              </Card.Text>
            </Card.Body>

            <div className=" mt-1">
              <div className="col-3">
              
                <img
                  loading="lazy"
                  src={Images.zeeshan}
                  alt="Zeeshan"
                  border="0"
                  width="90px"
                  height="50px"
                />
              </div>
              <div className="col-12">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Zeeshan
                </span>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Baby Photoshoot
                </p>
              </div>
            </div>
          </Card> */}
          <figure class="snip1157">
  <blockquote><h6> The team was very efficient and flexible, and the
                  photographers were very professional.</h6>
                  Booked a baby shoot with fodrix and the photos turned out
                  amazing! They clicked very cute and adorable photos of the
                  baby.
    <div class="arrow"></div>
  </blockquote>
  <img src={Images.zeeshan} alt="sq-sample17" />
  <div class="author">
    <h6>Zeeshan<span> Baby Photoshoot</span></h6>
  </div>
</figure>
        </SwiperSlide>

        <SwiperSlide>
          {/* <Card style={{ backgroundColor: "#f8f8ff" }}>
            <span className="m-3" style={{ color: "skyblue" }}>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </span>

            <Card.Body>
              <Card.Text>
                <b>Our photographer were amazing!</b>

                <p style={{ fontSize: "14px" }}>
                  Very responsive, he arrived early and was extremely
                  professional yet also very friendly. Overall the whole process
                  was so simple and easy, the end result was lovely.
                </p>
              </Card.Text>
            </Card.Body>

            <div className=" mt-1">
              <div className="col-3">
               
                <img
                  loading="lazy"
                  src={Images.jyoti}
                  alt="Jyoti-singh"
                  border="0"
                  width="90px"
                  height="50px"
                />
              </div>

              <div className="col-12">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Jyoti Khanna
                </span>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Wedding & Engagement Photoshoot
                </p>
              </div>
            </div>
          </Card> */}
          <figure class="snip1157">
  <blockquote><h6>Our photographer were amazing!</h6>
  Very responsive, he arrived early and was extremely
                  professional yet also very friendly. Overall the whole process
                  was so simple and easy, the end result was lovely.
             
  <div class="arrow"></div>
  </blockquote>
  <img src={Images.jyoti} alt="sq-sample17" />
  <div class="author">
    <h6>Jyoti Khanna<span>  Wedding & Engagement Photoshoot</span></h6>
  </div>
</figure>
        </SwiperSlide>
        <SwiperSlide>
          {/* <Card style={{ backgroundColor: "#f8f8ff" }}>
            <span className="m-3" style={{ color: "skyblue" }}>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </span>

            <Card.Body>
              <Card.Text>
                <b>The Photographer was brilliant and the photos are lovely.</b>

                <p style={{ fontSize: "14px" }}>
                  Fantastic service. I was matched with a photographer very
                  quickly.Shubham Jadhav on numerous occasions and have been
                  happier with his images, than any other photographer.He has an
                  eye for finding you at your best.
                </p>
              </Card.Text>
            </Card.Body>

            <div className=" mt-1">
              <div className="col-3">
               
                <img
                  loading="lazy"
                  src={Images.rishabh}
                  alt="rishabh"
                  width="90px"
                  height="50px"
                />
              </div>

              <div className="col-12">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Rishav Singh
                </span>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Party Photoshoot
                </p>
              </div>
            </div>
          </Card> */}
          <figure class="snip1157">
  <blockquote><h6>The Photographer was brilliant and the photos are lovely.</h6>
  Fantastic service. I was matched with a photographer very
                  quickly.Shubham Jadhav on numerous occasions and have been
                  happier with his images, than any other photographer.
   <div class="arrow"></div>
  </blockquote>
  <img src={Images.rishabh} alt="sq-sample17" />
  <div class="author">
    <h6> Rishav Singh<span> Party Photoshoot</span></h6>
  </div>
</figure>
        </SwiperSlide>
        <SwiperSlide>
         
          <figure class="snip1157">
  <blockquote><h6>   Amazing photographer made our house and garden look like a pro
                  studio!</h6>     Booked a baby shoot only two days in advance, and photos ready
                  in a private online gallery only two days after the session.
                 <div class="arrow"></div>
  </blockquote>
  <img src={Images.harpreet} alt="sq-sample17" />
  <div class="author">
    <h6>Harpeet Kaur Singh<span>  Baby Photoshoot</span></h6>
  </div>
</figure>
        </SwiperSlide>




      </Swiper>
    </>
  );
}
