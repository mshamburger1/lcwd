import React from "react";
import Axios from "axios";
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormInputMessage,
  FormButton,
  Text,
} from "./ContactElementsNEW";

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
      emailSent: false,
    });

    Axios.post("../../../lcwd-api/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <>
        <Container>
          <FormWrap>
            <FormContent>
              <Form onSubmit={this.handleSubmit}>
                <FormH1>Contact Me</FormH1>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormInput
                  type="name"
                  id="full-name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormInputMessage
                  id="message"
                  name="message"
                  as="textarea"
                  row="10"
                  value={this.state.message}
                  onChange={this.handleChange}
                  required
                />
                <FormButton
                  className="d-inline-block"
                  variant="primary"
                  type="submit"
                  disabled={this.state.disabled}
                >
                  Continue
                </FormButton>
                <Text>
                  {this.state.emailSent === true && (
                    <p className="d-inline success-message">Email sent</p>
                  )}
                  {this.state.emailSent === false && (
                    <p className="d-inline err-message">Email not sent</p>
                  )}
                </Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  }
}

export default ContactMe;
