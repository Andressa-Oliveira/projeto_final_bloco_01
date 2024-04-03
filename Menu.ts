const readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

        console.log("     SUN HAT    ")
        console.log('\n--- MENU ---');
        console.log('1. Listar Produtos')
        console.log('2. Listar Produto pelo ID')
        console.log('3. Cadastrar Produto')
        console.log('4. Atualizar Produto');
        console.log('5. Deletar Produto');
        console.log('0. Sair');

        console.log("\nOpção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0){
            console.log("\n SUN HAT ")
            sobre();
            process.exit(0);
        }

        switch (opcao){

            case 1:
                console.log("\n\nListar Produtos\n\n");
                break;

            case 2:
                console.log("\n\nListar Produto pelo ID\n\n");
                break;

            case 3:
                    console.log("\n\nCadastrar Produto\n\n");
                    break;

                    case 4:
                        console.log("\n\nAtualizar Produto\n\n");

                        break;

                        case 5:
                        console.log("\n\nDeletar Produto\n\n");

                        break;

                        case 0:
                        console.log("\n\nSair\n\n");

                        break;

                        default:
                            console.log("\nOpção inválida\n");

                            break;

        }
    }
}

 

export function sobre(): void {
    console.log("*");
    console.log("Projeto de Andressa Oliveira");
    console.log("dressoliver95@gmail.com");
    console.log("*");
    console.log(" ");
}

main();


