{
  //keyof

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

  const probateValue = (obj: car, key: keyof car) => {
    console.log(obj[key]);
  };

  probateValue(myCar, "model");
  //
}
