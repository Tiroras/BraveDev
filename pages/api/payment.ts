import {NextApiRequest, NextApiResponse} from "next";


const getPayment = (req: NextApiRequest, res: NextApiResponse) => {
  const {phoneNumber, sum, operator_id} = req.body;
  const answer = Math.round(Math.random());
  answer ?
    res.status(200)
      .json({message: `Оплата на номер телефона ${phoneNumber} принята`, isPass: true}) :
    res.status(200)
      .json({message: "В оплате отказано", isPass: false});
}

export default getPayment;