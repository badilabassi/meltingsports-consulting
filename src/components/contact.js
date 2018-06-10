import React from 'react';
import { initGoogleMaps } from '../utils/googleMaps';
import { navigateTo } from 'gatsby-link';
import Recaptcha from 'react-google-recaptcha';

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleRecaptcha = this.handleRecaptcha.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value });
  };

  handleSubmit = e => {
    // e.preventDefault();
    const form = e.target;
    console.log(this.state);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error));
    e.preventDefault();
  };

  render() {
    const {
      classes = {},
      title = '',
      officeTitleField,
      officeAddressField,
      nameField,
      emailField,
      messageField,
      submitButton,
      robot,
      disclaimer,
      locale
    } = this.props;

    const formValid =
      !!this.state['g-recaptcha-response'] &&
      !!this.state.name &&
      !!this.state.email &&
      !!this.state.message;

    return (
      <div id="contact" className="contactus-2">
        <div id="contactUs2Map" className="map" />
        <div className="col-md-6">
          <div className="card card-contact card-raised">
            <form
              id="contact-form2"
              name="Formulaire de contact: MeltingSports Consulting"
              method="post"
              action={locale === 'fr' ? '/thanks/' : '/en/thanks/'}
              data-netlify="true"
              data-netlify-recaptcha="true"
              onSubmit={this.handleSubmit}
            >
              <div className="card-header card-header-blue text-center">
                <h4 className="card-title">{title}</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="info info-horizontal">
                      <div className="icon icon-rose">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </div>
                      <div className="description">
                        <h5 className="info-title">{officeTitleField}</h5>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: officeAddressField.markdown.html.replace(
                              /\n/g,
                              '<br/>'
                            )
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group label-floating is-empty has-blue">
                      <label className="bmd-label-floating">{nameField}</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={this.handleChange}
                        required
                      />
                      <span className="material-input" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group label-floating is-empty has-blue">
                      <label className="bmd-label-floating">{emailField}</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={this.handleChange}
                        required
                      />
                      <span className="material-input" />
                    </div>
                  </div>
                </div>
                <div className="form-group label-floating has-blue is-empty">
                  <label
                    htmlFor="exampleMessage"
                    className="bmd-label-floating"
                  >
                    {messageField}
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="6"
                    onChange={this.handleChange}
                    required
                  />
                  <span className="material-input" />
                </div>
              </div>
              <div className="card-footer justify-content-between">
                <div className="form-check">
                  <Recaptcha
                    ref="recaptcha"
                    sitekey={RECAPTCHA_KEY}
                    onChange={this.handleRecaptcha}
                  />
                </div>
                <button
                  disabled={!formValid}
                  type="submit"
                  className="btn btn-blue pull-right"
                >
                  {submitButton}
                </button>
              </div>
              <div
                className="card-footer justify-content-between"
                dangerouslySetInnerHTML={{
                  __html: disclaimer.markdown.html.replace(/\n/g, '<br/>')
                }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
