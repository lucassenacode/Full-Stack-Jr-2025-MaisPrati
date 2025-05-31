import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Mapeamento e Ordenação de Produtos ---");
  console.log("Este programa pega um array de produtos (com nome e preço),");
  console.log("e retorna um novo array contendo apenas os nomes dos produtos,");
  console.log("ordenados pelo preço original em ordem crescente.");
};

const products = [
  { name: "Asus Tuff ", price: 7500.00 },
  { name: "Headphone Havit", price: 189.50 },
  { name: "G403 Hero", price: 475.00 },
  { name: "Robo Aspirador", price: 2200.75 },
  { name: "DDR5 32gb", price: 600.00 },
  { name: "Kit Mouse/Teclado (sem fio)", price: 320.00 },
];

const getSortedProductNamesByPrice = (productArray) => {
  const sortedProducts = [...productArray];
  sortedProducts.sort((a, b) => a.price - b.price);
  const productNames = sortedProducts.map(product => product.name);
  return productNames;
};

const demonstrateMappingAndSorting = () => {
  statements();

  console.log("\nArray de produtos original:");
  products.forEach(p => console.log(`- ${p.name}: R$ ${p.price.toFixed(2)}`));

  const sortedNames = getSortedProductNamesByPrice(products);

  console.log("\nNomes dos produtos ordenados por preço crescente:");
  console.log(sortedNames);

  console.log("\n----------------------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default demonstrateMappingAndSorting;