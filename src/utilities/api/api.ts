

export const getOperators = async () => {
  return await fetch("localhost:3000/api/operators").then(res => {
    console.log(res)
    return res;
  });
}