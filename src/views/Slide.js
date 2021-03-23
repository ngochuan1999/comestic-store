import React, { Component } from 'react';

function Slide () {

    return (
        <div className="slide">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img className="d-block w-100" src="//theme.hstatic.net/1000341789/1000533258/14/slideshow_2.jpg?v=709" data-src="holder.js/900x400?theme=social" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="//theme.hstatic.net/1000341789/1000533258/14/slideshow_2.jpg?v=709" data-src="holder.js/900x400?theme=industrial" alt="Second slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
    )

};

export default Slide;