// Listas/Lista 2/L2_ex08.js
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Agrupamento de Vendas por Cliente ---");
  console.log("Este programa demonstra como agrupar um array de objetos de vendas");
  console.log("por cliente e somar o total de compras de cada um, utilizando o método 'reduce'.");
};

const sales = [
  { cliente: "Lucas Sena", total: 350.75 },
  { cliente: "Marcia Oliveira", total: 219.90 },
  { cliente: "Lucas Sena", total: 30.50 },
  { cliente: "Carlos Frederico", total: 20.00 },
  { cliente: "Marcia Oliveira", total: 176.80 },
  { cliente: "Lucas Sena", total: 820.00 },
  { cliente: "Ana Costa", total: 459.66 },
  { cliente: "Carlos Frederico", total: 99.50 },
];

const groupSalesByCustomer = (salesArray) => {
  return salesArray.reduce((accumulator, currentSale) => {
    const customerName = currentSale.cliente;
    const saleTotal = currentSale.total;

    if (accumulator[customerName]) {
      accumulator[customerName] += saleTotal;
    } else {
      accumulator[customerName] = saleTotal;
    }
    return accumulator;
  }, {});
};

const demonstrateGrouping = () => {
  statements();

  console.log("\nArray de vendas original:");
  sales.forEach(sale => console.log(`- Cliente: ${sale.cliente}, Total: R$ ${sale.total.toFixed(2)}`));

  const totalsByCustomer = groupSalesByCustomer(sales);

  console.log("\nTotal de vendas agrupado por cliente:");
  for (const customer in totalsByCustomer) {
    console.log(`- ${customer}: R$ ${totalsByCustomer[customer].toFixed(2)}`);
  }

  console.log("\n----------------------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default demonstrateGrouping;