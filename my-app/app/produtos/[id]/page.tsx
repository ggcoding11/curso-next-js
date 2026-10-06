type Props = {
  params: Promise<{
    id: string;
  }>;
};

const Produto = async ({ params }: Props) => {
  const { id } = await params;

  return <div>Produto {id}</div>;
};

export default Produto;
