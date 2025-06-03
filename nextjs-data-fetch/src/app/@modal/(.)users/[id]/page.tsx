import { User } from "@/app/users/page";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};
export const page = async ({ params }: Props) => {
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
        <Link href="/users">&larr; Back to Users list</Link>
        <a
          href={`/users/${data.id}`}
          className="border-1 px-2 mt-1 inline-block rounded-md shadow-md"
        >
          View User Detail
        </a>
      </div>
    </div>
  );
};

export default page;
