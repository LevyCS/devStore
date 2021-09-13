import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async carregarProdutos() {
        let r = await api.get('/produto');
        return r.data;
    }

    async inserirProduto(nomeProduto, categoria, precoDe, precoPor, avaliacao, descricao, quantidadeEstoque, imagemProduto) {
        let r = await api.post('/produto', {nomeProduto, categoria, precoDe, precoPor, avaliacao, descricao, quantidadeEstoque, imagemProduto})
        return r.data;
    }

    async alterarProduto(id, nomeProduto, categoria, precoDe, precoPor, avaliacao, descricao, quantidadeEstoque, imagemProduto) {
        let r = await api.put(`/produto/${id}`, {nomeProduto, categoria, precoDe, precoPor, avaliacao, descricao, quantidadeEstoque, imagemProduto})
        return r.data
    }

    async deletarProduto(id) {
        let r = await api.delete(`/produto/${id}`)
        return r.data
    }
}