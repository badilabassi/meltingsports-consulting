import React from 'react';

const Expertise = ({ title, description, numbers, people }) => {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="block">
              <ul className="counter-box clearfix">
                {numbers.map(stat => {
                  retrun(
                    <li>
                      <div className="block">
                        <i className="{{ .icon }}" />
                        <h4 className="counter">{stat.counter}</h4>
                        <span>{stat.text}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial-carousel">
              <div id="testimonial-slider" className="owl-carousel">
                {people.map(person => {
                  return (
                    <div>
                      <img src="img/cotation.png" alt="IMG" />
                      <p>"{person.text}"</p>
                      <div className="user">
                        <img
                          src="{{ $.Site.BaseURL }}{{ .image }}"
                          alt="Pepole"
                        />
                        <p>
                          <span>{person.name}</span> {person.role}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
