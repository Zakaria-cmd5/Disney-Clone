type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ term: string }>;

interface Props {
  params: Params;
  searchParams: SearchParams;
}

const GenrePage = async ({ params, searchParams }: Props) => {
  const param = await params;
  const id = param.id;

  const searchParam = await searchParams;
  const term = searchParam.term;

  return (
    <div>
      GenrePage {id} {term}
    </div>
  );
};

export default GenrePage;
