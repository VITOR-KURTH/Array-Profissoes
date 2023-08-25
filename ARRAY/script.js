const nomes = [];
        const profissoes = [];
       
        function adicionar() {
            const nome = document.getElementById("nome").value.toUpperCase();
            const profissao = document.getElementById("profissao").value.toUpperCase();
           
            nomes.push(nome);
            profissoes.push(profissao);
           
            atualizarLista();

            
        }
       
        function remover() {
            const nome = document.getElementById("nome").value.toUpperCase();
            const index = nomes.indexOf(nome);
           
            if (index !== -1) {
                nomes.splice(index, 1);
                profissoes.splice(index, 1);
                alert(`${nome} removido(a) com sucesso.`);
            } else {
                alert(`${nome} não encontrado(a).`);
            }
           
            atualizarLista();
        }
       
        function atualizarLista() {
            const listaPessoas = document.getElementById("listaPessoas");
            listaPessoas.innerHTML = "";
           
            for (let i = 0; i < nomes.length; i++) {
                const item = document.createElement("li");
                item.textContent = `${nomes[i]} - ${profissoes[i]}`;
                listaPessoas.appendChild(item);
            }
        }
    