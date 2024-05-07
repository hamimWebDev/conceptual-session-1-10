{
  //
  let input: any = "Hamim";

  const inputLength = (input as string).length;

  console.log(inputLength);

  type Foo = {
    bar: string;
  };

  const foo: Foo = {
    bar: "something",
  };

  const foo2 = {} as Foo;
  foo2.bar = "Something";

  let value: string | number;

  value = "Hamim" as string;
  value = 100 as number;
  //
}
