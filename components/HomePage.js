/*
import React from 'react'
import Image from 'next/image'
import Image1 from '../public/sofa.png'
import Image2 from '../public/stool.png'
function HomePage() {
  return (
    <div>
      <section className="carouselslide">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">

              <Image src={Image1} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>District Eight</h1>
                <h1> Fabric</h1>
                <button type="button" className="btn btn-dark buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Order Now</a></button>
              </div>
            </div>
            <div className="carousel-item">
              <Image src={Image2} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>District Eight</h1>
                <h1>Stool</h1>
                <button type="button" className="btn btn-dark buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Order Now</a></button>
              </div>
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" ></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage

*/
/*
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showControls>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/043.webp' alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
*/
/*
import React from 'react'
import Image from 'next/image'
import Image1 from '../public/ba2b0e898c6f932035acaa5a941fe1c8 (1).png'
import Image1 from  '../public/homepage1 (1).png'
import Image4 from  '../public/Rack-PNG-Image.png'
import Image2 from  '../public/bookshelf-modular-bookcase-14934.png'
import Image7 from  '../public/image-test1.png'

function HomePage() {
  return (
    <div className='homepagediv'>
      <section className="carouselslide" id='colorCarousel' >
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>

          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='container'>
                <div className='row'>
                  <div className='col'>
                  <Image src={Image2} alt="logo" className='d-block imagecarousel image-1' id='image-1'></Image>
                  </div>
                  <div className='col homepagetext'>
                  <div className='container '>
                  <h1 class="align-self-start">Aligned flex item</h1>
                  <h1 class="align-self-center">Aligned flex item</h1>
                
                <div class="align-self-end hoempagebutton"><button type="button" className="btn btn-dark buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Order Now</a></button></div>


                </div>
                  </div>
                </div>
              </div>

            
            </div>
         
            <div className="carousel-item">
              <Image src={Image7} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>District Eight</h1>
                <h1>Stool</h1>
                <button type="button" className="btn btn-dark buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Order Now</a></button>
              </div>
            </div>
            <div className="carousel-item">
              <Image src={Image4} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>District Eight</h1>
                <h1>Stool</h1>
                <button type="button" className="btn btn-dark buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Order Now</a></button>
              </div>
            </div>
            <div className="carousel-item">
              <Image src={Image1} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>District Eight</h1>
                <h1>Stool</h1>
                <button type="button" className="btn btn-dark buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Order Now</a></button>
              </div>
            </div>
            <div className="carousel-item">
              <Image src={Image1} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>District Eight</h1>
                <h1>Stool</h1>
                <button type="button" className="btn btn-dark buttoncrousel" style={{margin:6}}><a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Order Now</a></button>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" ></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage



*/








import React from 'react'
import Image from 'next/image'
import Image1 from '../public/homepage2-removebg-preview.png'
import Image2 from '../public/bookshelf-modular-bookcase-14934.png'
import Image3 from '../public/homepage3-removebg-preview.png'
import Image4 from '../public/123-removebg-preview.png'

function HomePage() {
  return (
    <div className='homepagediv'>
      <section className="carouselslide" id='colorCarousel' >
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>

          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='container'>
                <div className='row'>
                  <div className='col-12 col-sm-6 col-md-5 homepagetext1'>
                    <Image src={Image2} alt="logo" height={940} className='d-block imagecarousel image-1' id='image-1'></Image>
                  </div>
                  <div className='col-12 col-sm-6 col-xs-12 col-md-7 align-self-center text-center homepagetext'>
                    <div className='container '>
                      <h1 class="align-self-start ">Book shelf</h1>
                      <br></br>
                      <h6 class="align-self-center homepage-text-heading">High Quality , Stylish bookshelf by Vinayak
                      </h6>
                      <div class="align-self-end hoempagebutton"><button type="button" className="btn btn-dark buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Order Now</a></button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className='container'>
                <div className='row'>
                  <div className='col-12 col-sm-6 col-md-5 homepagetext1'>
                    <Image src={Image1} alt="logo" height={627} className='d-block imagecarousel image-1' id='image-1'></Image>
                  </div>
                  <div className='col-12 col-sm-6 col-xs-12 col-md-7 align-self-center text-center homepagetext'>
                    <div className='container '>
                      <h1 class="align-self-start ">Rack</h1>
                      <br></br>
                      <h6 class="align-self-center homepage-text-heading">High Quality , Stylish Rack by Vinayak
                      </h6>
                      <div class="align-self-end hoempagebutton"><button type="button" className="btn btn-dark buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Order Now</a></button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='container'>
                <div className='row'>
                  <div className='col-12 col-sm-6 col-md-5 homepagetext1'>
                    <Image src={Image3} alt="logo" height={498} className='d-block imagecarousel image-1' id='image-1'></Image>
                  </div>
                  <div className='col-12 col-sm-6 col-xs-12 col-md-7 align-self-center text-center homepagetext'>
                    <div className='container '>
                      <h1 class="align-self-start ">Steel Almirah</h1>
                      <br></br>
                      <h6 class="align-self-center homepage-text-heading">High Quality , Stylish Steel Almirah by Vinayak
                      </h6>
                      <div class="align-self-end hoempagebutton"><button type="button" className="btn btn-dark buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Order Now</a></button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className='container'>
                <div className='row'>
                  <div className='col-12 col-sm-6 col-md-5 homepagetext1'>
                    <Image src={Image4} alt="logo" height={533} className='d-block imagecarousel image-1' id='image-1'></Image>
                  </div>
                  <div className='col-12 col-sm-6 col-xs-12 col-md-7 align-self-center text-center homepagetext'>
                    <div className='container '>
                      <h1 class="align-self-start ">Locker</h1>
                      <br></br>
                      <h6 class="align-self-center homepage-text-heading">High Quality , Stylish steel Locker by Vinayak
                      </h6>
                      <div class="align-self-end hoempagebutton"><button type="button" className="btn btn-dark buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Order Now</a></button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" ></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage












/*
              <div className="carousel-caption">
                
                <h1>District Eight</h1>
                <h1> Fabric</h1>
                <button type="button" className="btn btn-dark buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Order Now</a></button>
              </div>
              */