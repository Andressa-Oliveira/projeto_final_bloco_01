import { ProdutoController } from "./src/controller/ProdutoController";
import { Chapeu } from "./src/model/Chapeu";
import { Produto } from "./src/model/Produto";

const readlinesync = require("readline-sync");

const produtoController = new ProdutoController();
const novoProduto = new Produto("Chapeu com FPS", 90.00, produtoController.gerarId(), "P");


export function main() {

    let opcao, preco, id: number;

    let nome, tamanho: string;

    const produtoController: ProdutoController = new ProdutoController();


    while (true) {

        console.log("     SUN HAT    ")
        console.log('\n--- MENU ---');
        console.log('1. Listar Produtos')
        console.log('2. Consultar Produto pelo ID')
        console.log('3. Cadastrar Produto')
        console.log('4. Atualizar Produto');
        console.log('5. Deletar Produto');
        console.log('0. Sair');

        console.log("\nOpção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\n SUN HAT ")
            sobre();
            process.exit(0);
        }

        switch (opcao) {

            case 1:
                console.log("\n\nListar Produtos\n\n");
                produtoController.listarTodos();
                break;

            case 2:
                console.log("\n\nConsultar Produto pelo ID\n\n");
                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.procurarPorId(id);

                break;

            case 3:
                console.log("\n\nCadastrar Produto\n\n");

                nome = readlinesync.question("Nome: ");
                preco = readlinesync.questionFloat("Preço: ");
                tamanho = readlinesync.question("Tamanho: ");
                break;

            case 4:
                console.log("\n\nAtualizar Produto\n\n");
                id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                let produto = produtoController.buscarNoArray(id);

                if (produto !== null){

                    nome = readlinesync.question("Nome do produto: ");

                    tamanho = readlinesync.question("Tamanho do produto: ")
    
                    preco = readlinesync.questionFloat("Preço do produto: ");
    
                

                }else
                    console.log("Produto não encontrado")
                break;

            case 5:
                console.log("\n\nDeletar Produto\n\n");
                id = readlinesync.questionInt("Id do Produto: ");
                produtoController.deletar(id);
                break;

            default:
                console.log("\nOpção inválida\n");

                break;

        }
    }
}



   function sobre(): void {
    console.log("*");
    console.log("Projeto de Andressa Oliveira");
    console.log("dressoliver95@gmail.com");
    console.log("*");
    console.log(" ");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();


