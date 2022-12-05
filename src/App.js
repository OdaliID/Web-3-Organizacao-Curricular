import "./styles.css";
import { useState } from "react";
import logo from "./logod.svg";

export default function App() {
  const [cursos, setCursos] = useState(null);

  const handleSelecionar = (event) => {
    setCursos(event.target.value);
  };

  return (
    <div className="App">
      <header className="cabecalho">
        <img src={logo} style={{ width:200 }} alt="logo" />;
        <div className="marca">Organização Curricular 2022/2</div>
      </header>
      <h2>Salas por Curso:</h2>
      <select value={cursos} onChange={handleSelecionar}>
        <option value="" selected>
        </option>
        <option value="ciencia">Ciência da Computação</option>
        <option value="sistemas">Sistemas de Informação</option>
        <option value="engenharia">Engenharia de Softaware</option>
        <option value="institucionais">Turmas Institucionais</option>
      </select>
      <p></p>

      {cursos !== "institucionais" ? (
        <table align="center">
          <tr class="linha">
            <td>Disciplina</td>
            <td>Turma</td>
            <td>Sala</td>
            <td>Horário</td>
          </tr>
          {cursos === "sistemas" && (
            <tr>
              <td>Banco de Dados</td>
              <td>5N</td>
              <td>0603</td>
              <td>Labin III - 704</td>
            </tr>
          )}
          {cursos === "engenharia" && (
            <tr>
              <td>Introdução ao Desenvolvimento Web</td>
              <td>2N</td>
              <td>0705</td>
              <td>Labin IV - 706</td>
            </tr>    
          )}

          {cursos === "ciencia" && (
            <tr>
              <td>Computação Gráfica</td>
              <td>6N</td>
              <td>0708</td>
              <td>Labin IV - 706</td>
            </tr>
          )}

          {cursos === "engenharia" && (
            <tr>
              <td>Computação Gráfica</td>
              <td>6N</td>
              <td>0708</td>
              <td>Labin IV - 706</td>
            </tr>    
          )}

        </table>
      ) : (
        <table align="center">
          <tr class="linha">
            <td>Código da Disciplina</td>
            <td>Disciplina</td>
            <td>Turma</td>
            <td>Sala</td>
            <td>Horário</td>
          </tr>
          <tr>
            <td>128100</td>
            <td>Anatomofisiologia</td>
            <td>7002</td>
            <td>207</td>
            <td>5N</td>
          </tr>
          <tr>
            <td>128102</td>
            <td>	Práticas Interprofissionais de Educação em Saúde</td>
            <td>7012-C</td>
            <td>217</td>
            <td>24M</td>
          </tr>
          <tr>
            <td>134102</td>
            <td>Fisiopatologia</td>
            <td>7017</td>
            <td>422</td>
            <td>5N</td>
          </tr>
          <tr>
            <td>118106</td>
            <td>Libras</td>
            <td>7020</td>
            <td>235</td>
            <td>4M</td>
          </tr>
          <tr>
            <td>128101</td>
            <td>Políticas Públicas e Gestão em Saúde</td>
            <td>7010</td>
            <td>320</td>
            <td>2N</td>
          </tr>
        </table>
      )}
    </div>
  );
}
