let lista_de_registro = {
    ultimoIdGravado: 0,
    pessoas: [{ id: 10, nome: "Débora Antunes", telefone: '(11) 2552-3443' }]
};
function visualizar(paginas) {
    document.body.setAttribute('page', paginas);
    if (pagina === 'cadastro') {
        document.getElementById('nome').focus(); // focus: cursor sobre o campo.
    }
};
function insertpeople(telefone, nome){
    const id = lista_de_registro.ultimoIdGravado + 1;
    lista_de_registro.pessoas.push({id, nome, telefone});
    drow_table(); // chama a função que carrega a tabela
    visualizar('lista');

};
function drow_table(){
    const tbody = document.getElementById("listaRegistroBody");
    if(tbody){
        tbody.innerHTML =lista_de_registro.pessoas.map(pessoa =>{
            return `<tr>
                        <td>${pessoa.id}</td>
                        <td>${pessoa.nome}</td>
                        <td>${pessoa.telefone}</td>
                        </tr>                       `
        }).join('') // map: duplica o array com outros dados

    }
}

function enviarDados (e){
    e.preventDefault();
    const dados = {
        id: document.getElementById('codigo').Value,
        nome: document.getElementById('nome').Value,
        telefone: document.getElementById('telefone').Value
    }
    console.log(dados);
}
 window.addEventListener('load', () => {
    drow_table();
    document.getElementById("cadastro-registros").addEventListener('submit', enviarDados);
 })
