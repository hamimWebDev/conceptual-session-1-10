{
  //
  if (typeof "Hamim" == "string") {
    console.log("Hi Hamim");
  } else {
    console.log("Bye Hamim");
  }

  const name =
    typeof "Hamim" == "string"
      ? console.log("Hi Hamim")
      : console.log("Bye Hamim");

  const name2: string | undefined = undefined;

  const name3 = name2 ?? "name nai";
  console.log(name3);

  const non = (): never => {
    while (true) {
      console.log("Hi");
    }
  };
  //
}
