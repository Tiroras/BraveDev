import {NextPage} from "next";
import {useRouter} from "next/router";
import PaymentContainer from "../../src/components/pages/payment/Payment.container";
import React from "react";


const OperatorPaymentPage: NextPage = () => {
  const router = useRouter();
  const id: any = router.query.id
  return(
    <PaymentContainer id={id} />
  )
}

export default OperatorPaymentPage;