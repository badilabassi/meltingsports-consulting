import React from 'react';

const ContactUs = () => {
  return (
    <div id="contact" className="contactus-2">
      <div id="contactUs2Map" className="map" />
      <div className="col-md-6">
        <div className="card card-contact card-raised">
          <form
            id="contact-form2"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="card-header card-header-blue text-center">
              <h4 className="card-title">Nous contacter</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="info info-horizontal">
                    <div className="icon icon-rose">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                    </div>
                    <div className="description">
                      <h5 className="info-title">Nos bureaux</h5>
                      <p>
                        {' '}
                        157 Quai du President Roosevelt
                        <br /> 92130 Issy les Moulineaux
                        <br /> France
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group label-floating is-empty has-blue">
                    <label className="bmd-label-floating">Nom</label>
                    <input type="text" name="name" className="form-control" />
                    <span className="material-input" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group label-floating is-empty has-blue">
                    <label className="bmd-label-floating">
                      Adresse courriel
                    </label>
                    <input type="email" name="email" className="form-control" />
                    <span className="material-input" />
                  </div>
                </div>
              </div>
              <div className="form-group label-floating has-blue is-empty">
                <label htmlFor="exampleMessage" className="bmd-label-floating">
                  Votre Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleMessage"
                  rows="6"
                />
                <span className="material-input" />
              </div>
            </div>
            <div className="card-footer justify-content-between">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />{' '}
                  Je ne suis pas un robot
                  <span className="form-check-sign">
                    <span className="check" />
                  </span>
                </label>
              </div>
              <button type="submit" className="btn btn-blue pull-right">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
