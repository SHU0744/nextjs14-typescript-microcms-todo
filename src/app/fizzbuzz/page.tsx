"use client";

import { initStateType, typePayloadType } from "@/types";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";

const CALC_OPTIONS: string[] = ["add", "minus", "divide", "multiply"];

const check = (num: number): string | number => {
  let value: string | number = "";
  if (num % 3 === 0) value += "Fizz";
  if (num % 5 === 0) value += "Buzz";
  if (value === "") value = num;
  return value;
};

const reducer = (
  prev: initStateType,
  { type, payload }: typePayloadType
): initStateType => {
  switch (type) {
    case "change":
      const { name, value } = payload;
      return { ...prev, [name]: value };
    case "add":
      return {
        ...prev,
        result: prev.a + prev.b,
        check: check(prev.a + prev.b),
      };
    case "minus":
      return {
        ...prev,
        result: prev.a - prev.b,
        check: check(prev.a - prev.b),
      };
    case "divide":
      return {
        ...prev,
        result: prev.a / prev.b,
        check: check(prev.a / prev.b),
      };
    case "multiply":
      return {
        ...prev,
        result: prev.a * prev.b,
        check: check(prev.a * prev.b),
      };
    default:
      throw new Error("不明なactionです。");
  }
};
const initState: initStateType = {
  a: 10,
  b: 2,
  result: 12,
  check: "Fizz",
};

const fizzbuzz = () => {
  const [count, setCount] = useState<number>(1);
  const [text, setText] = useState<string | number>("");
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect((): void => {
    setText(check(count));
  }, [count]);

  const countUp = (): void => {
    setCount((prevCount): number => prevCount + 1);
  };
  const countDown = (): void => {
    setCount((prevCount: number): number =>
      prevCount > 1 ? prevCount - 1 : prevCount
    );
  };

  const numChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: parseInt(e.target.value) },
    });
  };
  const calculate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch({
      type: e.target.value,
      payload: { name: "", value: 0 },
    });
  };
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

      <div className="mt-6">
        <div>
          a:
          <input
            type="number"
            name="a"
            value={state.a}
            className="border-solid border-[0.1rem] mr-[0.5rem]"
            onChange={numChangeHandler}
          />
        </div>
        <div>
          b:
          <input
            type="number"
            name="b"
            value={state.b}
            className="border-solid border-[0.1rem] mr-[0.5rem]"
            onChange={numChangeHandler}
          />
        </div>
      </div>
      <select
        className="border-solid border-[0.1rem] mr-[0.5rem]"
        onChange={calculate}
      >
        {CALC_OPTIONS.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <h3>
        結果：{state.result}は{state.check}
      </h3>

      <div className="mt-4">
        <Link href={"/"} className="underline text-blue-800">
          TOPへ
        </Link>
      </div>
    </div>
  );
};

export default fizzbuzz;
