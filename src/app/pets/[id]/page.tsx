export default async function Pet({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <div>page pet &gt;&gt; {id} </div>;
}
