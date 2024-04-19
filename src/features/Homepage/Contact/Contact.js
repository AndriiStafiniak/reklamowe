import { useState } from "react";
import {
  ArrowRight,
  Checkbox,
  CheckboxGroup,
  FormGroup,
  FormWrapper,
  Input,
  Label,
  SubmitButton,
  Textarea,
  Title,
  Wrapper,
} from "./style";
import { Link } from "react-router-dom";
import { Map } from "./Map";
import { handleFeatureNotAvailable } from "../../../common/TileProduct/ProductCard";
const placeId = "ChIJc5eK49TKG0cRGmBqSZwKy24";
const lat = "-33.8688";
const lng = "151.2195";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [isPromoConsentGiven, setIsPromoConsentGiven] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email, message, isConsentGiven, isPromoConsentGiven);
  };

  return (
    <>
      <Title>
        Masz pytania lub potrzebujesz wyceny? Skontaktuj się z nami, a my
        odezwiemy się w ciągu godziny!
      </Title>
      <Wrapper>
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type="email"
                placeholder="Twój e-mail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Textarea
                placeholder="Treść wiadomości"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </FormGroup>
            <CheckboxGroup>
              <Checkbox
                type="checkbox"
                id="personal-data"
                name="personal-data"
                checked={isConsentGiven}
                onChange={() => setIsConsentGiven(!isConsentGiven)}
              />
              <Label htmlFor="personal-data">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
                kompleksowej obsługi handlowej, opisanej w{" "}
                <Link href="/polityka-prywatnosci">Polityce prywatności</Link>.
              </Label>
            </CheckboxGroup>
            <CheckboxGroup>
              <Checkbox
                type="checkbox"
                id="promotional-info"
                name="promotional-info"
                checked={isPromoConsentGiven}
                onChange={() => setIsPromoConsentGiven(!isPromoConsentGiven)}
              />
              <Label htmlFor="promotional-info">
                Wyrażam zgodę na przesyłanie informacji handlowych.{" "}
                <Link href="/wiecej-informacji">Więcej&gt;&gt;</Link>
              </Label>
            </CheckboxGroup>
            <SubmitButton onClick={handleFeatureNotAvailable} type="submit">
              Wyślij wiadomość <ArrowRight>&rarr;</ArrowRight>
            </SubmitButton>
          </form>
        </FormWrapper>
        <Map placeId={placeId} lat={lat} lng={lng} />
      </Wrapper>
    </>
  );
};
