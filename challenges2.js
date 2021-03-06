const formatPhoneNumber = (arrayNumbers) => {
  const numbers = arrayNumbers.join('');
  const phoneNumber = numbers.match(/^(\d{2})(\d{5})(\d{4})$/);
  return `(${phoneNumber[1]}) ${phoneNumber[2]}-${phoneNumber[3]}`;
};

const arrayCountNumbers = (value, arrayNumbers) => {
  let count = 0;
  for (let countNumber of arrayNumbers) {
    if (value === countNumber) count += 1;
  }
  if (count >= 3) throw new Error('não é possível gerar um número de telefone com esses valores');
};

const arrayRepeatNumberValidate = (arrayNumbers) => {
  for (let value of arrayNumbers) {
    arrayCountNumbers(value, arrayNumbers);
  }
};

const arrayMinMaxValidate = (arrayNumbers) => {
  for (let value of arrayNumbers) {
    if (value < 0 || value > 9) {
      throw new Error('não é possível gerar um número de telefone com esses valores');
    }
  }
};

const arrayLengthValidate = (arrayNumbers) => {
  if (arrayNumbers.length !== 11) throw new Error('Array com tamanho incorreto.');
};

const generatePhoneNumber = (arrayNumbers) => {
  try {
    arrayLengthValidate(arrayNumbers);
    arrayMinMaxValidate(arrayNumbers);
    arrayRepeatNumberValidate(arrayNumbers);
    return formatPhoneNumber(arrayNumbers);
  } catch (error) {
    return error.message;
  }
};

// Desafio 12
const triangleCheck = (linaA, lineB, lineC) => {
  let sumlineAlineB = linaA + lineB;
  let sumLineAlineC = linaA + lineC;
  let sumLineBlineC = lineB + lineC;
  if (linaA > sumLineBlineC || lineB > sumLineAlineC || lineC > sumlineAlineB) return false;
  return true;
};

// Desafio 13
const hydrate = (string) => {
  let reg = /\d+/g;
  let arrayNumbers = string.match(reg);
  let sumNumbers = 0;
  for (let number of arrayNumbers) {
    let numberInt = parseInt(number, 10);
    sumNumbers += numberInt;
  }
  return sumNumbers === 1 ? `${sumNumbers} copo de água` : `${sumNumbers} copos de água`;
};
