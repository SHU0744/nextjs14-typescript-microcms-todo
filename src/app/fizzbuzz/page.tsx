"use client";
const fizzbuzz = () => {
  const fizzBuzzList: (string | number)[] = [];
  for (let i = 1; i <= 100; i++) {
    let value: string = "";
    if (i % 3 === 0) value += "Fizz";
    if (i % 5 === 0) value += "Buzz";
    fizzBuzzList.push(value || i);
  }

  return (
    <div>
      <h2 className="text-[1.6rem]">FizzBuzz</h2>
      <p>
        数字を1から100まで順番に出力していき ・3の倍数の時「 Fizz 」
        ・5の倍数の時「 Buzz 」 ・3かつ5の倍数の時「 FizzBuzz 」を表示させる
        ※それ以外の値はそのまま表示
      </p>
      <ul>
        {fizzBuzzList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default fizzbuzz;
