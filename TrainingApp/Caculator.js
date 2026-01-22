export const calculate = (sign, arg1, arg2) => {
  switch (sign) {
    case 'PLUS':
      return arg1 + arg2;

    case 'MINUS':
      return arg1-arg2;

    case 'MULTIPLY':
      return arg1*arg2;

    case 'DIVIDE':
      return 0;

    default:
      return 0;
  }
};