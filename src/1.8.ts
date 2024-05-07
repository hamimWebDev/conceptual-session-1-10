{
  // generics
  const num: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
  const str: Array<string> = ["1", "2", "3", "4", "5", "6"];
  const bul: Array<boolean> = [true, false, true, true, false];

  type genType<T> = Array<T>;
  const num2: genType<number> = [1, 2, 3, 4, 5, 6, 7, 8];
  const str2: genType<string> = ["1", "2", "3", "4", "5", "6"];
  const bul2: genType<boolean> = [true, false, true, true, false];

  //
}
