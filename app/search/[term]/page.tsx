import { notFound } from "next/navigation";

type Params = Promise<{ term: string }>;

const SearchPage = async (props: { params: Params }) => {
  const params = await props.params;
  const term = params.term;

  if (!term) notFound();

  const termToUse = decodeURI(term);

  return <div>SearchPage {termToUse}</div>;
};

export default SearchPage;
