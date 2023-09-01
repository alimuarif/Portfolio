import React from 'react'
import "./Portfolio.css"
import portfolio1 from "../../assets/portfolio1.png"
import portfolio2 from "../../assets/portfolio2.png"
import portfolio3 from "../../assets/portfolio3.png"
import portfolio4 from "../../assets/portfolio4.png"
import portfolio5 from "../../assets/portfolio5.png"
import portfolio6 from "../../assets/portfolio6.png"
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work </h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio1} alt="portfolio1" />
          </div>
          <h3>Amazon - Clone</h3>
         <div className="btns">

          <a href="https://github.com/alimuarif/Amazon-Clone" target='_blank' className='btn' >Github</a>
          <a href="https://clone-c5720.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio2} alt="portfolio1" />
          </div>
          <h3>Urbanelegance E-commerce</h3>
         <div className="btns">

          <a href="https://github.com/alimuarif/Ecommerce-app-in-reactjs" target='_blank' className='btn' >Github</a>
          <a href="https://urbanelegance-693a0.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio3} alt="portfolio1" />
          </div>
          <h3>E-Pay Website</h3>
         <div className="btns">

          <a href="https://github.com/ShahrozAs/Asan-rista-clone" target='_blank' className='btn' >Github</a>
          <a href="https://e-pay-1da4f.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio4} alt="portfolio1" />
          </div>
          <h3>News App - News Monkey</h3>
         <div className="btns">

          <a href="https://github.com/ShahrozAs/GitLearning/tree/main/news-app" target='_blank' className='btn' >Github</a>
          <a href="https://news-monkey-ba6b9.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio5} alt="portfolio1" />
          </div>
          <h3>Netflix - Clone</h3>
         <div className="btns">

          <a href="https://github.com/alimuarif/Netflix-Clone" target='_blank' className='btn' >Github</a>
          <a href="https://netflix-clone-f2832.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio6} alt="portfolio1" />
          </div>
          <h3>Spotify - Clone</h3>
         <div className="btns">

          <a href="https://github.com/alimuarif/Spotify-Clone" target='_blank' className='btn' >Github</a>
          <a href="https://spotify-clone-34eda.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio