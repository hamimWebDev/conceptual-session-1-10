{
  const bigFunction = (n: number): bigint => {
    let a: bigint = 0n;
    let b: bigint = 1n;
    let sum: bigint = 0n;

    for (let i = 0; i <= n; i++) {
      sum += a;
      const temp = a + b;
      a = b;
      b = temp;
    }

    return sum;
  };
  //   console.log(bigFunction(5));

  type obj = {
    club: string;
    season: number;
    isTransferred?: boolean;
  };

  const ucl: obj = {
    club: "real madrid",
    season: 2019,
  };
  //
}
