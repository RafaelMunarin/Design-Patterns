// Função auxiliar para gerar cores aleatórias
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Gerenciador Singleton de Usuários
class RegistroDeUsuarios {
    constructor() {
        if (RegistroDeUsuarios.instancia) {
            return RegistroDeUsuarios.instancia;
        }
        this.usuarios = [];
        RegistroDeUsuarios.instancia = this;
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
        this.atualizarListaUsuarios();
    }

    listarUsuarios() {
        return this.usuarios;
    }

    atualizarListaUsuarios() {
        const lista = document.getElementById('usuarios');
        lista.innerHTML = '';
        this.usuarios.forEach((usuario, indice) => {
            const li = document.createElement('li');
            li.textContent = `${indice + 1}. ${usuario}`;
            lista.appendChild(li);
        });
    }
}

// Implementação do padrão Decorator para Relatórios
class Relatorio {
    gerar() {
        return "Conteúdo do Relatório: Dados e Estatísticas Importantes.";
    }
}

class DecoradorDeCabecalho {
    constructor(relatorio) {
        this.relatorio = relatorio;
    }

    gerar() {
        return (
            `<div style="text-align: center; font-weight: bold; font-size: 1.2em; margin-bottom: 10px; color: #333;">=== Cabeçalho do Relatório ===</div>` +
            this.relatorio.gerar()
        );
    }
}

class DecoradorDeRodape {
    constructor(relatorio) {
        this.relatorio = relatorio;
    }

    gerar() {
        return (
            this.relatorio.gerar() +
            `<div style="text-align: center; font-style: italic; margin-top: 10px; color: #333;">=== Rodapé do Relatório ===</div>`
        );
    }
}

class DecoradorDeBorda {
    constructor(relatorio) {
        this.relatorio = relatorio;
    }

    gerar() {
        return (
            `<div style="border: 2px solid #333; padding: 10px; border-radius: 8px;">` +
            this.relatorio.gerar() +
            `</div>`
        );
    }
}

// Decorador para aplicar cores aleatórias
class DecoradorDeCores {
    constructor(relatorio) {
        this.relatorio = relatorio;
    }

    gerar() {
        const corTexto = gerarCorAleatoria();
        const corFundo = gerarCorAleatoria();
        return ` 
            <div style="color: ${corTexto}; background-color: ${corFundo}; padding: 10px; border-radius: 4px;">
                ${this.relatorio.gerar()}
            </div>
        `;
    }
}

// Inicialização do Singleton
const registro = new RegistroDeUsuarios();

// Interação com o DOM para registro de usuários
document.getElementById('form-registro').addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nomeUsuario = document.getElementById('nome-usuario').value.trim();
    if (nomeUsuario) {
        registro.adicionarUsuario(nomeUsuario);
        document.getElementById('nome-usuario').value = '';
    } else {
        alert('Por favor, insira um nome de usuário válido.');
    }
});

// Gerar relatórios com decoradores
document.getElementById('btn-relatorio').addEventListener('click', () => {
    const relatorio = new Relatorio();
    document.getElementById('relatorio').innerHTML = relatorio.gerar();
});

document.getElementById('btn-relatorio-cabecalho').addEventListener('click', () => {
    const relatorio = new DecoradorDeCabecalho(new Relatorio());
    document.getElementById('relatorio').innerHTML = relatorio.gerar();
});

document.getElementById('btn-relatorio-rodape').addEventListener('click', () => {
    const relatorio = new DecoradorDeRodape(new DecoradorDeCabecalho(new Relatorio()));
    document.getElementById('relatorio').innerHTML = relatorio.gerar();
});

document.getElementById('btn-relatorio-borda').addEventListener('click', () => {
    const relatorio = new DecoradorDeBorda(new DecoradorDeRodape(new DecoradorDeCabecalho(new Relatorio())));
    document.getElementById('relatorio').innerHTML = relatorio.gerar();
});

document.getElementById('btn-relatorio-cores').addEventListener('click', () => {
    const relatorio = new DecoradorDeCores(new Relatorio());
    document.getElementById('relatorio').innerHTML = relatorio.gerar();
});
