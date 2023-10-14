import { useEffect, useState } from "react";
import Client from "../core/Client";
import ColecaoCliente from "../firebase/db/ColecaoCliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useVisibily from "./useVisibily";

export default function useClient() {
  const { tableVisivel, exibirTabela, exibirFormulario } = useVisibily();
  const [cliente, setCliente] = useState<Client>(Client.vazio);
  const [clientes, setClientes] = useState<Client[]>([]);

  const repo: ClienteRepositorio = new ColecaoCliente();

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  function selecionarCliente(cliente: Client) {
    setCliente(cliente);
    exibirFormulario();
  }

  async function excluirCliente(cliente: Client) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Client) {
    await repo.salvar(cliente);
    exibirTabela();
    obterTodos();
  }

  function novoCliente() {
    setCliente(Client.vazio());
    exibirFormulario();
  }

  return {
    tableVisivel,
    cliente,
    clientes,
    exibirTabela,
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
  };
}
