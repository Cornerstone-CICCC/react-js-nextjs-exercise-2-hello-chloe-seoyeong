import { User } from "@/app/users/page";

type Props = {
  params: Promise<{ id: string }>;
};

export const Page = async ({ params }: Props) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const data: User = await res.json();

  return (
    <div className="fixed w-screen h-screen bg-black/50 flex items-center justify-center top-0 left-0 ">
      <div className="bg-white p-5 rounded-xl w-1/3">
        <span>{data.id}</span>
        <p>
          {data.firstName} {data.lastName}
        </p>
        <div className="flex gap-4 justify-between border-t-2 py-3 my-3">
          <a href={"/users"}>&larr; Back to User List</a>
          <a href={`/users/${data.id}`}>View User Detail &rarr;</a>
        </div>
      </div>
    </div>
  );
};

export default Page;
