type Props = {
  searchParams: Promise<{
    categoria: string;
    ordem: string;
    pagina: string;
  }>;
};

const Produtos = async ({ searchParams }: Props) => {
  const { categoria, ordem, pagina } = await searchParams;

  return (
    <div>
      Produtos
      {categoria && <div>Categoria selecionada: {categoria}</div>}
      {ordem && <div>Ordem por: {ordem}</div>}
      {pagina && <div>Página: {pagina}</div>}
    </div>
  );
};

export default Produtos;
