{
  //generics
  type NumOfArray = number[];

  interface ArrayOfNum {
    [index: number]: number;
  }
  const arrayNum: NumOfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arrayNum2: ArrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  type sum = (num1: number, num2: number) => number;

  interface sum1 {
    (num1: number, num2: number): number;
  }

  const numSum: sum = (a, b) => {
    return a + b;
  };
  const numSum1: sum1 = (a, b) => {
    return a + b;
  };

  console.log(numSum(2, 4));
  //
}
