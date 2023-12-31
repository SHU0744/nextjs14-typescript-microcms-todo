import { client } from "@/libs/client";
import { dataType } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Props = {
  id: string;
};
export default async function updateTodo({ params }: { params: Props }) {
  const data: dataType = await client.get({
    endpoint: "todo",
    queries: { fields: "id,title", filters: `id[equals]${params.id}` },
  });

  const updateTodo = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const id = formData.get("id") as string;
    const sendData = `{"title":"${title}"}`;
    await client.update({
      endpoint: "todo",
      content: JSON.parse(sendData),
      contentId: id,
    });
    revalidatePath("/todo/[id]", "page");
    revalidatePath("/todo", "page");
    redirect("/todo");
  };

  return (
    <>
      <div className="mx-[2rem]">
        <h2 className="text-[1.6rem] mt-[1rem]">編集</h2>
        <div className="flex mt-[0.5rem]">
          <form action={updateTodo}>
            <input type="hidden" name="id" value={data.contents[0].id} />
            <input
              type="text"
              name="title"
              id=""
              placeholder="編集する"
              defaultValue={data.contents[0].title}
              className="border-solid border-[0.1rem] mr-[0.5rem]"
            />
            <input
              type="submit"
              value="編集"
              className="bg-green-500 text-white rounded-[0.8rem] px-[1rem] cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
}
