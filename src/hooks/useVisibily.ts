import { useState } from "react";

export default function useVisibily() {
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  const exibirTabela = () => setVisivel("tabela");
  const exibirFormulario = () => setVisivel("form");

  return {
    formVisivel: visivel === "form",
    tableVisivel: visivel === "tabela",
    exibirTabela,
    exibirFormulario,
  };
}
