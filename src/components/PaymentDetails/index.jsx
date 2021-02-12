import React, { useState } from "react";
import GeneralContainer from "../GeneralContainer";
import FormPageLayout from "../../layout/FormPageLayout";
import Form from "../Form";
import FormTitle from "../FormTitle";
import FormInput from "../FormInput";
import { INITIAL } from "../../constants/strings";
import { isNameInvalidFn } from "../../helpers/functions";
import FormCountryDropdown from "../FormCountryDropdown";
import { CardElement } from "@stripe/react-stripe-js";
import CityPostalCodeWrapper from "../CityPostalCodeWrapper";
import "./styles.scss";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#87bbfd",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "red",
      color: "red",
    },
  },
};

const PaymentDetails = (props) => {
  const [recipientName, setRecipientName] = useState("");
  const [isRecipientNameInvalid, setIsRecipientNameInvalid] = useState(INITIAL);

  const [addressLine, setAddressLine] = useState("");
  const [isAddressLineInvalid, setIsAddressLineInvalid] = useState(INITIAL);

  const [city, setCity] = useState("");
  const [isCityInvalid, setIsCityInvalid] = useState(INITIAL);

  const [postalCode, setPostalCode] = useState("");
  const [isPostalCodeInvalid, setIsPostalCodeInvalid] = useState(INITIAL);

  const [country, setCountry] = useState("");

  const [recipientNameBilling, setRecipientNameBilling] = useState("");
  const [isRecipientNameBillingInvalid, setIsRecipientNameBillingInvalid] = useState(INITIAL);

  const [addressLineBilling, setAddressLineBilling] = useState("");
  const [isAddressLineBillingInvalid, setIsAddressLineBillingInvalid] = useState(INITIAL);

  const [cityBilling, setCityBilling] = useState("");
  const [isCityBillingInvalid, setIsCityBillingInvalid] = useState(INITIAL);

  const [postalCodeBilling, setPostalCodeBilling] = useState("");
  const [isPostalCodeBillingInvalid, setIsPostalCodeBillingInvalid] = useState(INITIAL);

  const [countryBilling, setCountryBilling] = useState("");

  return (
    <GeneralContainer>
      <div className="checkout">
        <FormPageLayout>
          <Form>
            <FormTitle>shipping address</FormTitle>

            <FormInput
              type="text"
              id="recipientName"
              name="recipientName"
              value={recipientName}
              onChange={(event) => setRecipientName(event.target.value)}
              isInvalid={isRecipientNameInvalid}
              onBlur={() => setIsRecipientNameInvalid(isNameInvalidFn(recipientName, "recipient name"))}
              label="recipient name"
            ></FormInput>

            <FormInput
              type="text"
              id="addressLine"
              name="addressLine"
              value={addressLine}
              onChange={(event) => setAddressLine(event.target.value)}
              isInvalid={isAddressLineInvalid}
              onBlur={() => setIsAddressLineInvalid(isNameInvalidFn(addressLine, "address"))}
              label="address line"
            ></FormInput>

            <CityPostalCodeWrapper>
              <FormInput
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                isInvalid={isCityInvalid}
                onBlur={() => setIsCityInvalid(isNameInvalidFn(city, "city"))}
                label="city"
              ></FormInput>

              <FormInput
                type="text"
                id="postalCode"
                name="postalCode"
                value={postalCode}
                onChange={(event) => setPostalCode(event.target.value)}
                isInvalid={isPostalCodeInvalid}
                onBlur={() => setIsPostalCodeInvalid(isNameInvalidFn(postalCode, "postal code"))}
                label="postal code"
              ></FormInput>
            </CityPostalCodeWrapper>

            <FormCountryDropdown value={country} onChange={(event) => setCountry(event)}></FormCountryDropdown>

            <FormTitle>billing address</FormTitle>

            <FormInput
              type="text"
              id="recipientNameBilling"
              name="recipientNameBilling"
              value={recipientNameBilling}
              onChange={(event) => setRecipientNameBilling(event.target.value)}
              isInvalid={isRecipientNameBillingInvalid}
              onBlur={() => setIsRecipientNameBillingInvalid(isNameInvalidFn(recipientNameBilling, "recipient name"))}
              label="recipient name"
            ></FormInput>

            <FormInput
              type="text"
              id="addressLineBilling"
              name="addressLineBilling"
              value={addressLineBilling}
              onChange={(event) => setAddressLineBilling(event.target.value)}
              isInvalid={isAddressLineBillingInvalid}
              onBlur={() => setIsAddressLineBillingInvalid(isNameInvalidFn(addressLineBilling, "address"))}
              label="address line"
            ></FormInput>

            <CityPostalCodeWrapper>
              <FormInput
                type="text"
                id="cityBilling"
                name="cityBilling"
                value={cityBilling}
                onChange={(event) => setCityBilling(event.target.value)}
                isInvalid={isCityBillingInvalid}
                onBlur={() => setIsCityBillingInvalid(isNameInvalidFn(cityBilling, "city"))}
                label="city"
              ></FormInput>

              <FormInput
                type="text"
                id="postalCodeBilling"
                name="postalCodeBilling"
                value={postalCodeBilling}
                onChange={(event) => setPostalCodeBilling(event.target.value)}
                isInvalid={isPostalCodeBillingInvalid}
                onBlur={() => setIsPostalCodeBillingInvalid(isNameInvalidFn(postalCodeBilling, "postal code"))}
                label="postal code"
              ></FormInput>
            </CityPostalCodeWrapper>

            <FormCountryDropdown
              value={countryBilling}
              onChange={(event) => setCountryBilling(event)}
            ></FormCountryDropdown>

            <FormTitle>card details</FormTitle>
            <div className="card-input">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </Form>
        </FormPageLayout>
      </div>
    </GeneralContainer>
  );
};

export default PaymentDetails;
