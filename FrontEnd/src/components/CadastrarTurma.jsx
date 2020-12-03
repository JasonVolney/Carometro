import React from "react";
import { Link } from 'react-router-dom';

export class CadastrarTurma extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="cturma-container">
          <div className="top-container">
            <h1 className="page-title">Cadastrar turma</h1>
            <button className="btn-voltar"><Link to="/Cadastrar"></Link>Voltar</button>
          </div>
          <div className="section-input-cturma">
              <div className="form-cturma">
              <span className="span-cturma">Nome</span>
                  <input type="text" placeholder="Nome da turma" className="input-cturma"></input>
              </div>
              <div className="form-cturma">
                  <span className="span-cturma">Curso</span>
                  <input type="text" placeholder="Nome do curso" className="input-cturma"></input>
              </div>
          </div>
          <div className="btn-section-turma">
            <button className="btn-turma">Cadastrar</button>
            <button className="btn-turma">Adicionar nova turma</button>
          </div>
        </div>
        );
    }
}

