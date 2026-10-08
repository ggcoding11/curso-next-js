type Product = {
  title: string,
  stock: number,
  price: number
}

const Produtos = async () => {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error("Erro ao carregar os produtos");
  }

  const data = await response.json();

  console.log(data.products);

  return (
    <div>
      <h1>Lista de produtos</h1>

      {data.products.map((product: Product) => (
        <ul className="mb-6">
          <li>Name: {product.title}</li>
          <li>Stock: {product.stock}</li>
          <li>Price: {product.price}</li>
        </ul>
      ))}
    </div>
  );
};

export default Produtos;
