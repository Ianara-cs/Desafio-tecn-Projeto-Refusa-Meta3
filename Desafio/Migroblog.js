var Usuario = /** @class */ (function () {
    function Usuario(usuario) {
        this._usuario = usuario;
    }
    Object.defineProperty(Usuario.prototype, "usuario", {
        get: function () {
            return this._usuario;
        },
        enumerable: false,
        configurable: true
    });
    return Usuario;
}());
var Postagem = /** @class */ (function () {
    function Postagem(id, texto) {
        this._situacao = 'Negativa';
        this._quant_like = 0;
        this._quant_dislike = 0;
        this.contas_q_Avaliaram = []; // Será inserida somente Usuários que reagiram a postagem
        this._id = id;
        this._texto = texto;
    }
    Object.defineProperty(Postagem.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "quant_like", {
        get: function () {
            return this._quant_like;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "quant_dislikes", {
        get: function () {
            return this._quant_dislike;
        },
        enumerable: false,
        configurable: true
    });
    Postagem.prototype.like = function () {
        this._quant_like++;
    };
    Postagem.prototype.dislike = function () {
        this._quant_dislike++;
    };
    Postagem.prototype.toString = function () {
        return ("Postagem: ".concat(this._texto, "  -  Like: ").concat(this.quant_like, " - Dislike: ").concat(this.quant_dislikes, " - Situa\u00E7\u00E3o : ").concat(this._situacao));
    };
    Postagem.prototype.situacao = function () {
        if (this.quant_like > this.quant_dislikes) {
            this._situacao = 'Positiva';
        }
        else {
            this._situacao = 'Negativa';
        }
    };
    Postagem.prototype.inserir = function (conta) {
        this.contas_q_Avaliaram.push(conta);
    };
    return Postagem;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.contas = [];
        this.postagens = [];
    }
    Microblog.prototype.inserir_usuario = function (conta) {
        var indice = this.consultarUsuarioPorIndice(conta.usuario);
        if (indice == -1) {
            this.contas.push(conta);
        }
    };
    Microblog.prototype.inserir_postagem = function (postagem) {
        var indice = this.consultarPostagemPorIndice(postagem.id);
        if (indice == -1) {
            this.postagens.push(postagem);
        }
    };
    Microblog.prototype.consultarUsuarioPorIndice = function (usuario_name) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].usuario == usuario_name) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Microblog.prototype.consultarPostagemPorIndice = function (id) {
        var indice = -1;
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Microblog.prototype.avaliacao_postagem = function (usuario_name, id, avaliacao) {
        var contaUsuario_indice = this.consultarUsuarioPorIndice(usuario_name);
        var postagem_indice = this.consultarPostagemPorIndice(id);
        var avaliado_indice = -1;
        for (var i = 0; i < this.postagens[postagem_indice].contas_q_Avaliaram.length; i++) {
            if (this.postagens[postagem_indice].contas_q_Avaliaram[i].usuario == usuario_name) {
                avaliado_indice = i;
                break;
            }
        }
        if (contaUsuario_indice != -1 && postagem_indice != -1 && avaliado_indice == -1) {
            var usuario = this.contas[contaUsuario_indice];
            if (avaliacao == 1) {
                this.postagens[postagem_indice].like();
            }
            else if (avaliacao == 0) {
                this.postagens[postagem_indice].dislike();
            }
            this.postagens[postagem_indice].situacao();
            this.postagens[postagem_indice].inserir(usuario);
        }
        else { }
    };
    Microblog.prototype.mostrarPostagens = function () {
        var todas = [];
        for (var i = 0; i < this.postagens.length; i++) {
            todas.push(this.postagens[i].toString());
        }
        return todas;
    };
    return Microblog;
}());
var microblog = new Microblog();
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
