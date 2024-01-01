import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <div>
          <Link href={"/todo"} className="underline text-blue-800">
            TODOリストへ
          </Link>
        </div>
        <div>
          <Link href={"/fizzbuzz"} className="underline text-blue-800">
            FizzBuzzへ
          </Link>
        </div>
      </div>
    </>
  );
}
