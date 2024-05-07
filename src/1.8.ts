{
  // generics
  const num: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
  const str: Array<string> = ["1", "2", "3", "4", "5", "6"];
  const bul: Array<boolean> = [true, false, true, true, false];

  type genType<T> = Array<T>;
  const num2: genType<number> = [1, 2, 3, 4, 5, 6, 7, 8];
  const str2: genType<string> = ["1", "2", "3", "4", "5", "6"];
  const bul2: genType<boolean> = [true, false, true, true, false];

  interface IUser<T> {
    name: string;
    age: number;
    profileDetails: T;
  }
  interface IUser2<T, U> {
    name: U;
    age: number;
    profileDetails: T;
  }

  const user: IUser<{
    bio: string;
    photo: string;
  }> = {
    name: "Hamim",
    age: 21,
    profileDetails: {
      bio: "Hi I am Hamim",
      photo: "https/:img.com",
    },
  };
  const user2: IUser<{
    bio: string;
    CoverPhoto: string;
  }> = {
    name: "Hamim",
    age: 21,
    profileDetails: {
      bio: "Hi I am Hamim",
      CoverPhoto: "https/:img.com",
    },
  };

  const user3: IUser2<
    {
      bio: string;
      CoverPhoto: string;
    },
    string
  > = {
    name: "Hamim",
    age: 21,
    profileDetails: {
      bio: "Hi I am Hamim",
      CoverPhoto: "https/:img.com",
    },
  };

  const showMassage = <T>(input: T): T => {
    return input;
  };

  const Message = showMassage("6");
  const Message1 = showMassage(6);
  const Message2 = showMassage(true);
  console.log(Message);
  console.log(Message1);
  console.log(Message2);
  //
}
