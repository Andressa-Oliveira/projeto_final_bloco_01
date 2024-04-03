import { Produto } from "./Produto";

export class Chapeu extends Produto {
    private _tamanho: string;

    constructor(nome: string, preco: number, id: number, tamanho: string) {
        super(nome, preco, id, tamanho);
        this._tamanho = tamanho;
    }

    public get tamanho(): string {
        return this._tamanho;
    }

    public set tamanho(value: string) {
        this._tamanho = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Tamanho: ${this._tamanho}`);
    }
}
