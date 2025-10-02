var livros = [];

function adicionarLivro(titulo, autor, quantidade) {
    if (!livros.find(livro => livro.Titulo == titulo)) {
        livros.push({ Titulo: titulo, Autor: autor, Quantidade: quantidade });
        console.log("Livro adicionado!")
    } else {
        console.log("Livro já existe!")
    }

}

function removerLivro(titulo) {
    if (livros.find(livro => livro.Titulo == titulo)) {
        livros = livros.filter(livro => livro.Titulo !== titulo);
        console.log("Livro removido!")

    } else {
        console.log("Livro não encontrado!")
    }

}

function atualizarQuantidade(titulo, novaQuantidade) {
    if (livros.find(livro => livro.Titulo == titulo)) {
        var edit = livros.find(livro => livro.Titulo == titulo);
        livros = livros.filter(livro => livro.Titulo !== titulo);
        livros.push({ Titulo: edit.Titulo, Autor: edit.Autor, Quantidade: novaQuantidade });
        console.log("Quantidade editada!");
    } else {
        console.log("Livro não encontrado!");
    }
}

function listarLivros() {
    console.log(livros);
}
