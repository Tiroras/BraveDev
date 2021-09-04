

const API = {
  getOperators(){
    return fetch("http://localhost/api/operators").then((res: Response) => {
      return res.json();
    })
  },
  postOperator(id: number){
    return fetch("http://localhost/api/operators", {
      method: "POST",
      body: JSON.stringify(id),
      headers: {'Content-Type': 'application/json'}
    }).then((res: Response) => res.json());
  },
  postPayment(operator_id: number, phoneNumber: string, sum: number){
    return fetch("http://localhost/api/payment", {
      method: "POST",
      body: JSON.stringify({operator_id, phoneNumber, sum}),
      headers: {'Content-Type': 'application/json'}
    }).then((res: Response) => res.json());
  }
}

export default API;