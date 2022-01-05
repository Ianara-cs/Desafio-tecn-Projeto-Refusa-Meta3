
class Usuario{
    
    private _usuario: string;

    constructor(usuario:string){
        this._usuario = usuario;
    }

    get usuario(): string{
        return this._usuario;
    }
}

class Postagem {
    private _id: number;
    private _texto: string;
    protected _situacao: string = 'Negativa';
    private _quant_like: number = 0;
    private _quant_dislike: number = 0;
    contas_q_Avaliaram: Usuario[] = [];  // Será inserida somente Usuários que reagiram a postagem


    constructor(id: number, texto: string){
        this._id = id;
        this._texto = texto;
    }

    get id(): number{
        return this._id;
    }

    get quant_like():number{
        return this._quant_like;
    }

    get quant_dislikes(): number{
        return this._quant_dislike;
    }
    
    like(){
        this._quant_like++;
    }

    dislike(){
        this._quant_dislike++;
    }

    toString(): string{
        return (`Postagem: ${this._texto}  -  Like: ${this.quant_like} - Dislike: ${this.quant_dislikes} - Situação : ${this._situacao}`);
    }

    situacao(): void{
        if(this.quant_like > this.quant_dislikes){
            this._situacao = 'Positiva';
        }else{
            this._situacao = 'Negativa';
        }
    }
    
    inserir(conta: Usuario): void {
        this.contas_q_Avaliaram.push(conta);
	}

}

class Microblog{
    private contas: Usuario[] = [];
    private postagens: Postagem [] = [];

    inserir_usuario(conta: Usuario): void {
        let indice = this.consultarUsuarioPorIndice(conta.usuario);
        if(indice == -1 ){  
		    this.contas.push(conta);
        }
	}

    inserir_postagem(postagem : Postagem): void{
        
        let indice = this.consultarPostagemPorIndice(postagem.id);
        if(indice == -1 ){  
		    this.postagens.push(postagem);
        }
    }

    private consultarUsuarioPorIndice(usuario_name: String): number {         
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].usuario == usuario_name) {
				indice = i;
				break;
			}
		}
		return indice;
	}
    private consultarPostagemPorIndice(id: number): number {         
		let indice: number = -1;
		for (let i: number = 0; i < this.postagens.length; i++) {
			if (this.postagens[i].id == id) {
				indice = i;
				break;
			}
		}
		return indice;
	}

    avaliacao_postagem(usuario_name: string, id:number, avaliacao:number): void{
        
        let contaUsuario_indice = this.consultarUsuarioPorIndice(usuario_name);
        let postagem_indice = this.consultarPostagemPorIndice(id);
        let avaliado_indice: number = -1;

        for(let i: number = 0; i < this.postagens[postagem_indice].contas_q_Avaliaram.length; i++){
            if(this.postagens[postagem_indice].contas_q_Avaliaram[i].usuario == usuario_name){
                avaliado_indice = i;
                break;
            }
        }
        
        if(contaUsuario_indice != -1 && postagem_indice != -1 && avaliado_indice == -1){
            let usuario:Usuario = this.contas[contaUsuario_indice];

            if(avaliacao == 1){
                this.postagens[postagem_indice].like();
            }else if(avaliacao == 0){
                this.postagens[postagem_indice].dislike();
            }
            this.postagens[postagem_indice].situacao();
            this.postagens[postagem_indice].inserir(usuario)
        }else{}
    }
    
    mostrarPostagens(): string[]{
        let todas: string[] = []
        for(let i =0; i<this.postagens.length; i++){

            todas.push(this.postagens[i].toString())
        }
        return todas;
    }
}

let microblog: Microblog = new Microblog();
// Cadastro dos Usuário
microblog.inserir_usuario(new Usuario("Nara.cs"));
microblog.inserir_usuario(new Usuario("Mara_rocha"));
microblog.inserir_usuario(new Usuario("Tata"));
microblog.inserir_usuario(new Usuario("Gabriel444"));
// Postagens postadas
microblog.inserir_postagem(new Postagem(1, "Postagem 1"));
microblog.inserir_postagem(new Postagem(2, "Postagem 2"));
microblog.inserir_postagem(new Postagem(3, "Postagem 3"));

// Avaliação dos Usuários nas postagens
microblog.avaliacao_postagem("Nara.cs", 1, 1);
//microblog.avaliacao_postagem("Nara.cs", 1, 0);  
microblog.avaliacao_postagem("Nara.cs", 2, 1);
microblog.avaliacao_postagem("Gabriel444", 1, 1);
microblog.avaliacao_postagem("Tata", 3, 0);
microblog.avaliacao_postagem("Mara_rocha", 3, 0);

console.log(microblog.mostrarPostagens());