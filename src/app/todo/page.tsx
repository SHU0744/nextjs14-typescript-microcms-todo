import { client } from "@/libs/client";
import { dataType } from "@/types";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function todo() {
  const data: dataType = await client.get({
    endpoint: "todo",
    queries: { fields: "id,title" },
  });

  const createTodo = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const sendData = `{"title":"${title}"}`;
    await client.create({ endpoint: "todo", content: JSON.parse(sendData) });
    revalidatePath("/todo", "page");
  };

  return (
    <>
      <div className="mt-[1rem] w-full mx-[2rem]">
        <h2 className="text-[1.6rem]">List</h2>
        {data?.contents.map((value, index) => (
          <div key={value.id} className="flex my-[0.5rem]">
            <div className="w-[20rem]">{value.title}</div>
            <Link
              className="bg-green-500 text-white rounded-[0.8rem] px-[1rem] mr-[0.5rem] cursor-pointer"
              href={`/todo/${value.id}`}
            >
              編集する
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-[1rem] w-full mx-[2rem]">
        <h2 className="text-[1.6rem] mb-[0.5rem]">CREATE</h2>
        <form action={createTodo}>
          <input
            type="text"
            name="title"
            placeholder="入力してください"
            defaultValue={""}
            className="border-solid border-[0.1rem] mr-[0.5rem]"
          />
          <input
            type="submit"
            value={"送信"}
            className="bg-blue-500 text-white rounded-[0.8rem] px-[1rem] cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}
