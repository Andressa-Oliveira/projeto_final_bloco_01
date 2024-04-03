export abstract class Produto {

    private _nome: string;
    private _preco: number;
    private _id: number;


    constructor(nome: string, preco: number, id: number, tamanho: string) {
        this._nome = nome;
        this._preco = preco;
        this._id = id;
    }



    public get nome(): string {
        return this._nome;
    }


    public get preco(): number {
        return this._preco;
    }


    public get id(): number {
        return this._id;
    }


    public set nome(value: string) {
        this._nome = value;
    }


    public set preco(value: number) {
        this._preco = value;
    }


    public set id(value: number) {
        this._id = value;
    }



    public visualizar(): void {


        console.log("****************************************************")
        console.log("Produto")
        console.log("****************************************************")
        console.log(`Nome do produto: ${this._nome}`)
        console.log(`Preço: ${this._preco}`)
        console.log(`Id: ${this._id}`)
    }

}
