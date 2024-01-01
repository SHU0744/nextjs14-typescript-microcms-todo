"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const fizzbuzz = () => {
  const [count, setCount] = useState<number>(1);
  const [text, setText] = useState<string | number>("");

  useEffect((): void => {
    let value: string | number = "";
    if (count % 3 === 0) value += "Fizz";
    if (count % 5 === 0) value += "Buzz";
    if (value === "") value = count;
    setText(value);
  }, [count]);

  const countUp = (): void => {
    setCount((prevCount): number => prevCount + 1);
  };
  const countDown = (): void => {
    setCount((prevCount: number): number =>
      prevCount > 1 ? prevCount - 1 : prevCount
    );
  };

  // const fizzBuzzList: (string | number)[] = [];
  // for (let i = 1; i <= 100; i++) {
  //   let value: string = "";
  //   if (i % 3 === 0) value += "Fizz";
  //   if (i % 5 === 0) value += "Buzz";
  //   fizzBuzzList.push(value || i);
  // }

  return (
    <div>
      <h2 className="text-[1.6rem]">FizzBuzz</h2>
      <p>
        {count}は{text}
      </p>
      <div className="flex gap-x-2">
        <button onClick={countUp} className="bg-blue-900 text-white p-1">
          +
        </button>
        <button onClick={countDown} className="bg-blue-900 text-white p-1">
          -
        </button>
      </div>
      {/* <p>
        数字を1から100まで順番に出力していき ・3の倍数の時「 Fizz 」
        ・5の倍数の時「 Buzz 」 ・3かつ5の倍数の時「 FizzBuzz 」を表示させる
        ※それ以外の値はそのまま表示
      </p>
      <ul>
        {fizzBuzzList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <div className="mt-4">
        <Link href={"/"} className="underline text-blue-800">
          TOPへ
        </Link>
      </div>
    </div>
  );
};

export default fizzbuzz;
