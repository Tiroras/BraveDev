import {NextApiRequest, NextApiResponse} from "next";


const getOperators = (req: NextApiRequest, res: NextApiResponse) => {
  const operators = [
    {id: 1, name: "megafon", header: "Мегафон", image: "/images/megafon.png"},
    {id: 2, name: "yota", header: "Йота", image: "/images/yota.png"},
    {id: 3, name: "mts", header: "МТС", image: "/images/mts.png"},
    {id: 4, name: "beeline", header:"Билайн", image: "/images/beeline.png"},
  ];

  if(req.method === "GET"){
    res.status(200).json(operators);
  }

  if(req.method === "POST"){
    const operator = operators.find(oper => oper.id === JSON.parse(req.body));
    res.status(200).json(operator);
  }
}

export default getOperators;