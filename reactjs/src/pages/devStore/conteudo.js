import {Container} from './conteudo.styled'

import Api from '../../service/api'

import { useEffect, useState, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const api = new Api();

export default function Conteudo() {

    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState();
    const [categoria, setCategoria] = useState();
    const [avaliacao, setAvaliacao] = useState();
    const [precode, setPrecode] = useState();
    const [precopor, setPrecopor] = useState();
    const [estoque, setEstoque] = useState();
    const [imagem, setImagem] = useState();
    const [descricao, setDescricao] = useState();
    const [idAlterando, setIdAlterando] = useState(0);


    const validarResposta = (resp) => {
        if (!resp.erro)
            return true
        toast.error(`${resp.erro}`)
        return false
    }

    const limparCampos = () => {
        setNome('')
        setCategoria('')
        setAvaliacao('')
        setPrecode('')
        setPrecopor('')
        setEstoque('')
        setImagem('')
        setDescricao('')
    }

    const carregarProdutos = async() => {
        loading.current.continuousStart();
        let r = await api.carregarProdutos();
        if(!validarResposta(r)) 
            return;
        setProdutos(r);
        loading.current.complete()
    }

    const inserirProduto = async() => {
        loading.current.continuousStart();
        if (idAlterando === 0) {
            let r = await api.inserirProduto(nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagem)
            console.log(r)
            if (!validarResposta(r)) {
                loading.current.complete();
                return;
            } else {
                loading.current.complete()
                toast.dark('Produto cadastrado')
            }
        } else {
            let r = await api.alterarProduto(idAlterando, nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagem)
            if (!validarResposta(r)) {
                loading.current.complete()
                return;
            } else {
                loading.current.complete()
                toast.dark('Produto alterado')
            }
        }

        setIdAlterando(0);
        limparCampos();
        carregarProdutos()
    }

    const alterarProduto = async(produto) => {
        setNome(produto.nm_produto)
        setCategoria(produto.ds_categoria)
        setAvaliacao(produto.vl_avaliacao)
        setPrecode(produto.vl_preco_de)
        setPrecopor(produto.vl_preco_por)
        setEstoque(produto.qtd_estoque)
        setImagem(produto.img_produto)
        setDescricao(produto.ds_produto)
        setIdAlterando(produto.id_produto)
    }

    const deletarProduto = async(id) => {
        confirmAlert({
            title: 'Deseja excluir o produto?',
            message: 'Clique para confirmar',
            buttons: [
              {
                label: 'Sim',
                onClick: async() => {
                    loading.current.continuousStart();
                    await api.deletarProduto(id)
                    toast.dark('Produto excluido')
                    loading.current.complete();
                    carregarProdutos()
                } 
              },
              {
                label: 'Não',
              }
            ]
        });
    };

    const loading = useRef();

    useEffect(() => {
        carregarProdutos();
    }, [])

    return (
        <Container>
            <LoadingBar color='#f11946' ref={loading} />
            <ToastContainer />
            <div className="novo-produto"> 
                <div className="titulo"> 
                    <div className="titulo-barra"> </div>
                    <h1 className="titulo-texto"> {idAlterando === 0 ? "Novo Produto" : `Alterando produto ${idAlterando}`} </h1>
                </div>
                <div className="displayrow"> 
                    <div className="form"> 
                        <div className="displayrow">
                            <div className="agp-input"> 
                                <div>
                                    <div className="label"> Nome: </div>
                                    <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div>
                                    <div className="label"> Categoria: </div>
                                    <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/>
                                </div>
                                <div>
                                    <div className="label"> Avaliação: </div>
                                    <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)} />
                                </div>
                            </div>
                            <div className="agp-input"> 
                                <div>
                                    <div className="label"> Preco DE: </div>
                                    <input type="text" value={precode} onChange={e => setPrecode(e.target.value)} />
                                </div>
                                <div>
                                    <div className="label"> Preco POR: </div>
                                    <input type="text" value={precopor} onChange={e => setPrecopor(e.target.value)} />
                                </div>
                                <div>
                                    <div className="label"> Estoque: </div>
                                    <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="displaycolumn">
                            <div>
                                <div className="label1"> Link Imagem: </div>
                                <input type="text" className="width" value={imagem} onChange={e => setImagem(e.target.value)}/>
                            </div>
                            <div>
                                <div className="label"> Descrição: </div>
                                <textarea value={descricao} onChange={e => setDescricao(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <button className="btn-cadastrar" onClick={inserirProduto}> {idAlterando === 0 ? "Cadastrar" : "Alterar"} </button>
                </div>
            </div>
            <div className="cadastrados"> 
                <div className="titulo"> 
                    <div className="titulo-barra"> </div>
                    <h1 className="titulo-texto"> Produtos Cadastrados </h1>
                </div>
                <div className="tabela"> 
                <table>
                        <thead>
                            <tr>
                                <th> </th> 
                                <th> ID </th>
                                <th> Produto </th>
                                <th> Categoria </th>
                                <th> Preço </th>
                                <th> Estoque </th>
                                <th> </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            {produtos.map((item, i) => 
                                <tr className={i % 2 === 0 ? "linha-alternada" : ""}>
                                    <td className="table-img"> <img src={item.img_produto} alt=""/> </td>
                                    <td> {item.id_produto} </td>
                                    <td title={item.nm_produto}> {item.nm_produto != null && item.nm_produto.length >= 25 
                                        ? item.nm_produto.substr(0, 25) + '...'
                                        : item.nm_produto} 
                                    </td>
                                    <td> {item.ds_categoria} </td>
                                    <td> R$ {item.vl_preco_por} </td>
                                    <td> {item.qtd_estoque} </td>
                                    <td className="img"> <button> <img src="/src/assets/images/alterar.png" alt=""
                                        onClick={() => alterarProduto(item)} 
                                    /> </button> </td>
                                    <td className="img"> <button> <img src="/src/assets/images/delete.png" alt=""
                                        onClick={() => deletarProduto(item.id_produto)}
                                    /> </button> </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    )
}