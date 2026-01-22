export const calculate = (sign, arg1, arg2) => {
  switch (sign) {
    case 'PLUS':
      return 0;

    case 'MINUS':
      return 0;

    case 'MULTIPLY':
      return 0;

    case 'DIVIDE':
      if (arg2 === 0) return 0;
      return arg1 / arg2;

    default:
      return 0;
  }
};