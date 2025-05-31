
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Conversor: Array de Pares/Objeto ---");
  console.log("Este programa demonstra duas funções:");
  console.log("1. paresParaObjeto: Converte um array de pares [chave, valor] para um objeto.");
  console.log("2. objetoParaPares: Converte um objeto para um array de pares [chave, valor].");
};

function paresParaObjeto(arrayDePares) {
  const newObject = {};
  if (Array.isArray(arrayDePares)) {
    for (const par of arrayDePares) {
      if (Array.isArray(par) && par.length === 2) {
        const key = par[0];
        const value = par[1];
        newObject[key] = value;
      } else {
        console.warn("Par inválido encontrado no array. Esperado [chave, valor]. Par ignorado:", par);
      }
    }
  } else {
    console.warn("Entrada para paresParaObjeto não é um array.");
  }
  return newObject;
}

function objetoParaPares(obj) {
  const arrayDePares = [];
  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        arrayDePares.push([key, obj[key]]);
      }
    }
  } else {
    console.warn("Entrada para objetoParaPares não é um objeto válido.");
  }
  return arrayDePares;
}

const demonstrateConversions = () => {
  statements();

  const sampleArrayOfPairs = [
    ["nome", "Alice"],
    ["idade", 30],
    ["cidade", "País das Maravilhas"],
    ["ativo", true]
  ];

  const sampleObject = {
    item: "Livro",
    autor: "Lewis Carroll",
    paginas: 192,
    disponivel: false
  };

  console.log("\n--- Testando paresParaObjeto ---");
  console.log("Array de Pares Original:", sampleArrayOfPairs);
  const convertedObject = paresParaObjeto(sampleArrayOfPairs);
  console.log("Objeto Convertido:", convertedObject);

  console.log("\n--- Testando objetoParaPares ---");
  console.log("Objeto Original:", sampleObject);
  const convertedArrayOfPairs = objetoParaPares(sampleObject);
  console.log("Array de Pares Convertido:", convertedArrayOfPairs);

  console.log("\n----------------------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default demonstrateConversions;