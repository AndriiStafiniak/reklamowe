import {
  Button,
  Description,
  Disclaimer,
  Input,
  NewsletterContainer,
  Title,
  Form,
} from "./style";
import { useState } from "react";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      console.log("Email is valid:", email);
    } else {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <NewsletterContainer>
      <Title>Zapisz się do newslettera</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Wpisz swoj adres e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
        <Button>➜</Button>
      </Form>
    </NewsletterContainer>
  );
};
