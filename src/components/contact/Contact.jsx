import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle the form submission,
    // e.g., sending the data to a server or displaying a success message.
    console.log('Form data submitted:', this.state);

    // Reset the form after submission
    this.setState({
      name: '',
      email: '',
      message: '',
      submitted: true,
    });
  };

  render() {
    const { name, email, message, submitted } = this.state;

    return (
      <section id="contact">
        <h2>Contact Us</h2>
        {submitted ? (
          <p>Thank you for contacting us!</p>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={this.handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </section>
    );
  }
}

export default Contact;
