{
  //interface

  interface car {
    brand: string;
    model: string;
    year: number;
    isElectric: boolean;
    startEngin(): void;
    stopEngin(): void;
  }

  const myCar: car = {
    brand: "Toyota",
    model: "Rs65476",
    year: 2012,
    isElectric: false,
    startEngin() {
      console.log("Start engin");
    },

    stopEngin() {
      console.log("Stop Engin");
    },
  };
  myCar.startEngin();

  type num = number;

  //   interface num { /* not posable */
  //     nu
  //   }
  //
}
