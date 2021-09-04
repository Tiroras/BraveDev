

export const maxLengthCreator = (max: number) => (phoneNumber: string) => {
  if(phoneNumber.length > max){
    return `Ошибка, максимальная длина составляет ${max} символов`
  }
  return;
}


export const hasString = (string: string) => {
  if(string.length === 0) return "Ошибка, в поле ввода ничего нет";
  return;
}

export const notZero = (sum: number) => {
  if(sum === 0) return "Ошибка, введите сумму для пополения счета";
  return;
}

export const lessThousand = (sum: number) => {
  if(sum > 1000) return "Ошибка, сумма не должна превышать 1000 рублей";
  return;
}