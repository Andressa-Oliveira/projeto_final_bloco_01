import { Produto } from "../model/Produto";


export interface ProdutoRepository{

    // Métodos CRUD: Create, Read, Update, Delete
    
    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
    
}