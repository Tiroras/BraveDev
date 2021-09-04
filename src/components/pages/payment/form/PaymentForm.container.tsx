import React, {useState} from 'react';
import PaymentForm from "./PaymentForm";
import API from "../../../../api/api";
import {hasString, lessThousand, maxLengthCreator, notZero} from "../../../../utilities/validators/validators";
import {TPaymentAnswer} from "../../../../utilities/interfaces/Payment.types";
import {useRouter} from "next/router";


interface IProps {
  operator_id: number;
}

const PaymentFormContainer: React.FC<IProps> = (props) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("+_(___)___-__-__");
  const [sum, setSum] = useState<number>(0);

  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState<string>("");
  const [phoneNumberDirty, setPhoneNumberDirty] = useState<boolean>(false);

  const [sumErrorMessage, setSumErrorMessage] = useState<string>("");
  const [sumDirty, setSumDirty] = useState<boolean>(false);


  const [serverMessage, setServerMessage] = useState<string>("");

  const router = useRouter();
  const maxLength = maxLengthCreator(16);


  const validation = (validators: Array<string | undefined>) => {
    const validationArr = validators;
    const errors: string[] = [];

    validationArr.forEach(valid => {
      valid && errors.push(valid);
    });

    return errors.length != 0 ? errors[0] : "";
  }

  const phoneNumberHandler = (phoneNumber: string) => {
    setPhoneNumber(phoneNumber);
    setPhoneNumberErrorMessage(validation(
      [hasString(phoneNumber), maxLength(phoneNumber)]
    ));
  }

  const sumHandler = (sum: number) => {
    setSum(sum);
    setSumErrorMessage(validation([notZero(sum), lessThousand(sum)]));
  }

  const focusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "phoneNumber": {
        setPhoneNumberDirty(true);
        setPhoneNumberErrorMessage(validation([hasString(e.target.value)]))
        break;
      }
      case "sum": {
        setSumDirty(true);
        setSumErrorMessage(validation([notZero(e.target.valueAsNumber)]))
        break;
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(sumDirty && phoneNumberDirty && phoneNumberErrorMessage.length === 0 && sumErrorMessage.length === 0){
      console.log("sum", sumDirty);
      console.log("phone", phoneNumberDirty);
      console.log("sum", phoneNumberErrorMessage);
      console.log("phone", sumErrorMessage);
      API.postPayment(props.operator_id, phoneNumber, sum).then((res: TPaymentAnswer) => {
        setServerMessage(res.message);
        return res.isPass;
      }).then((isPass: boolean) => {
        isPass && setTimeout(() => {router.push("/")}, 1000);
      });
    }
  }


  return(
    <PaymentForm
      phoneNumber={phoneNumber}
      sum={sum}
      phoneNumberErrorMessage={phoneNumberErrorMessage}
      phoneNumberDirty={phoneNumberDirty}
      sumDirty={sumDirty}
      sumErrorMessage={sumErrorMessage}
      serverMessage={serverMessage}
      phoneNumberHandler={phoneNumberHandler}
      sumHandler={sumHandler}
      focusHandler={focusHandler}
      handleSubmit={handleSubmit}
    />
  )
}

export default PaymentFormContainer;