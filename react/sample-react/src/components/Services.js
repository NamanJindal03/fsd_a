import React from 'react'
import "../css/style.css"

function Services({service}) {
   const {iconsCss, title, description}  = service
  return (
    <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
            <div className="icon flex-shrink-0"><i className={iconsCss}></i></div>
            <div>
              <h4 className="title">{title}</h4>
              <p className="description">{description}</p>
              <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
    )
}

export default Services