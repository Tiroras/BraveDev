import React, {ChangeEvent} from 'react';
import {Field, Form, ServerMessage} from "./PaymentForm.styles";
import ReactInputMask from "react-input-mask";


interface IProps {
  sum: number;
  phoneNumber: string;
  phoneNumberErrorMessage: string;
  sumErrorMessage: string;
  phoneNumberDirty: boolean;
  sumDirty: boolean;
  serverMessage: string;
  sumHandler: (sum: number) => void;
  phoneNumberHandler: (phoneNumber: string) => void;
  focusHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const PaymentForm: React.FC<IProps> = (props) => {
  return(
    <Form onSubmit={props.handleSubmit}>
      <Field>
        <div className={props.phoneNumberDirty && props.phoneNumberErrorMessage.length != 0 ?
          "validationError" : "phoneNumber_field"}>
          <label htmlFor="number">Введите номер телефона</label>
          <ReactInputMask
            mask="+9(999)999-99-99"
            type="text"
            name="phoneNumber"
            value={props.phoneNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              props.phoneNumberHandler(e.target.value)}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => props.focusHandler(e)}
          />
        </div>
        <div>{props.phoneNumberErrorMessage}</div>
      </Field>
      <Field>
        <div className={props.sumDirty && props.sumErrorMessage.length != 0 ?
          "validationError" : "sum-field"}>
          <label htmlFor="sum">Введите сумму в рублях для оплаты</label>
          <input
            type="number"
            name="sum"
            min={0}
            max={1000}
            value={props.sum}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              props.sumHandler(e.target.valueAsNumber)}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => props.focusHandler(e)}
          />
        </div>
        <div>{props.sumErrorMessage}</div>
      </Field>
      <ServerMessage>
        {props.serverMessage}
      </ServerMessage>
      <div>
        {props.phoneNumberDirty && props.sum != 0 ?
          <button className="active">Пополнить счет</button> :
          <button>Введите данные</button>
        }
      </div>
    </Form>
  )
}

export default PaymentForm;