{
  //
  type ourFunction = (param1: number, param2: number) => number;

  const sumNumber: ourFunction = (param1, param2) => {
    let sum = param1 + param2;
    return sum;
  };

  const ourSum = sumNumber(2, 5);
  //   console.log(ourSum);

  const players = ["hamim", "shihab", "jihed", "dipu", "ashik", "rejon"];

  const players2 = ["hamim", "shihab", "jihed", "dipu", "ashik", "rejon"];

  const play = {
    ...players,
  };
  players.push(...players2);
  const [a, b, , d, , ...rest] = players;

  //
  type cat = { name: string; isMeu: true };
  type dog = { name: string; isGau: true };

  type CatOrDog = cat | dog;
  type CatAndDog = cat & dog;

  const pet1: CatOrDog = {
    name: "Pusse",
    isMeu: true,
  };
  const pet2: CatAndDog = {
    name: "Pusse & Roky",
    isMeu: true,
    isGau: true,
  };
  //
}
