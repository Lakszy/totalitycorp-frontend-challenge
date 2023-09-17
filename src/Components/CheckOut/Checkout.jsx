import React, { useState } from "react";
import {
  Card,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

function SimpleRegistration() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [payment, setPayment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleConfirmClick = () => {
    if (isFormValid) {
      setShowConfirmation(true);
    }
  };
  const closeConfirmation = () => {
    setShowConfirmation(false);
  };
  const validateForm = () => {
    setIsFormValid(
      addressLine1.trim() !== "" &&
      addressLine2.trim() !== "" &&
      payment.trim() !== "" &&
      phoneNumber.trim() !== ""
    );
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "addressLine1") {
      setAddressLine1(value);
    } else if (name === "addressLine2") {
      setAddressLine2(value);
    } else if (name === "payment") {
      setPayment(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    }

    validateForm();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={false}>
        <Typography variant="h2" color="black">
          Checkout page
        </Typography>
        <Typography color="blue" className="mt-1 font-normal">
          Enter your details for delivery.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Address Line-1"
              name="addressLine1"
              onChange={handleInputChange}
            />
            <Input
              size="lg"
              label="Address Line-2"
              name="addressLine2"
              onChange={handleInputChange}
            />
            <Input
              size="lg"
              label="Payment Mode"
              name="payment"
              onChange={handleInputChange}
            />
            <Input
              type="tel"
              size="lg"
              label="Phone Number"
              name="phoneNumber"
              labelProps={{ style: { color: '#2196F3' } }}
              onChange={handleInputChange}
            />
          </div>

          <Button
            className="mt-6"
            fullWidth
            onClick={handleConfirmClick}
            disabled={!isFormValid}
          >
            Confirm
          </Button>
        </form>
      </Card>

      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-100">
          <Card color="white" shadow={true} className="w-80 h-40 p-3">
            <Typography variant="h4" color="blue-gray">
              Confirmation
            </Typography>
            <Typography color="gray" className="mt-2 font-normal">
              Thank you for confirming!
            </Typography>
            <Button className="mt-4" fullWidth onClick={closeConfirmation}>
              Close
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}

export default SimpleRegistration;
