import { User } from "../page";

type Props = {
  params: Promise<{ id: string }>;
};
const page = async ({ params }: Props) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const data: User = await res.json();

  return (
    <div className="px-3 py-6">
      <dl className="grid grid-cols-2">
        <dt>First Name</dt>
        <dd>{data.firstName}</dd>
        <dt>Last Name</dt>
        <dd>{data.lastName}</dd>
        <dt>Age</dt>
        <dd>{data.age}</dd>
        <dt>Gender</dt>
        <dd>{data.gender}</dd>
        <dt>Email</dt>
        <dd>{data.email}</dd>
      </dl>
    </div>
  );
};

export default page;
