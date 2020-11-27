import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[] = [];
  //   {id:1,nome:"Produto 1",marca:"Marca 1",preco:100.00,dataValidade: new Date(2020,1,1)},
  //   {id:2,nome:"Produto 2",marca:"Marca 2",preco:200.00,dataValidade: new Date(2020,2,2)},
  //   {id:3,nome:"Produto 3",marca:"Marca 3",preco:300.00,dataValidade: new Date(2020,3,3)},
  //   {id:4,nome:"Produto 4",marca:"Marca 4",preco:400.00,dataValidade: new Date(2020,4,4)},
  //   {id:5,nome:"Produto 5",marca:"Marca 5",preco:500.00,dataValidade: new Date(2020,5,5)},
  //   {id:6,nome:"Produto 6",marca:"Marca 6",preco:600.00,dataValidade: new Date(2020,6,6)},
  // ]
  constructor() { }

  adicionar(produto: Produto){
    this.produtos.push(produto);
  }

  listar(): Produto[]{
    return(this.produtos);
  }
  
  deletar(id){
    const index = this.getIndice(id);
    console.log("Index",index);
    if(index >= 0){
      this.produtos.splice(index,1);
    }
  }

  buscarPorId(id: number): Produto{
    return this.produtos.find(prod => prod._id == id);
  }

  editar(id:number, prod:Produto){
    const index = this.getIndice(id);
    if(index >= 0){
      this.produtos[index] = prod;
    }
  }

  private getIndice(id){
    return this.produtos.findIndex(prod => prod._id == id);

  }
}
