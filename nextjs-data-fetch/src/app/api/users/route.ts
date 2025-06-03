export const revalidate = 120;

export async function GET() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  return Response.json(data);
}
