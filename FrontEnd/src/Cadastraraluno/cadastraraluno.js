import React from "react";
import estilos from './CadastrarAluno.module.css';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone-uploader';
import add from '../img/add.png';
import aluno from '../img/aluno.png';
import list from '../img/list.png';
import turma from '../img/turma.png';
import { Header } from '../Header/Header.js';

export class cadastraraluno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = e => {
    const target = e.currentTarget;

    if (
      target.checked &&
      this.state[`${target.name}-${target.value}`] === target.checked
    ) {
      target.checked = false;
      target.click();
    }
  };

  handleChange = e => {
    const target = e.target;

    if (this.state[`${target.name}-${target.value}`] !== target.checked) {
      this.setState({
        [`${target.name}-${target.value}`]: target.checked
      });
    }
  };

  handleFormChange = e => {
    console.log("Field::", e.target, e.target.checked, e.type);
  }

  render() {
    return (

      <div className={estilos["nav-container"]}>
        <Header />
        <div className={estilos["container-cadastro1"]}>
          <div className={estilos["container-homebtn"]}>
            <div className={estilos["top-container1"]}>
              <h1 className={estilos["page-title1"]}>Cadastrar alunos</h1>
              <Link to="/Home">
                <button className={estilos["btn-voltar1"]}>Voltar</button>
              </Link>
            </div>
              <div className={estilos["form-group1"]}>
                <div className={estilos["form1"]}>
                  <label>Nome completo</label>
                  <input type="text" name="username" placeholder="Nome Completo" className={estilos["input-cadastro"]}/>
                </div>

                <div className={estilos["form1"]}>
                  <label>Turma</label>
                  <input type="text" name="Turma" placeholder="Turma" className={estilos["input-cadastro"]} />
                </div>

                <div className={estilos["form1"]}>
                  <label>Matricula</label>
                  <input type="text" name="Matrícula" placeholder="000000000" className={estilos["input-cadastro"]} />
                </div>

                <div className={estilos["form1"]}>
                  <label>Telefone</label>
                  <input type="text" name="Telefone" placeholder="0000-0000" className={estilos["input-cadastro"]} />
                </div>

                <div className={estilos["form1"]}>
                  <label>Celular</label>
                  <input type="tel" name="Celular" placeholder="(00) 00000-0000" className={estilos["input-cadastro"]} />
                </div>

                <div className={estilos["form1"]}>
                  <label>Data de Nascimento</label>
                  <input type="date" name="Nascimento" placeholder="DD/MM/AAAA" className={estilos["input-cadastro"]} />
                </div>

                <div className={estilos["form1"]}>
                  <label>E-mail</label>
                  <input type="text" name="Email" placeholder="E-mail" className={estilos["input-cadastro"]} />
                </div>
                
                <div className={estilos["form2"]} style={{marginLeft: -10}}>
                  <label>Foto do aluno</label>
                  <div className={estilos["dzu-dropzone10"]}>
                    <label className={estilos["dzu-inputLabel"]} >
                      Drag files or Click to Browse
                      <input className={estilos["dzu-input10"]}  type="file" accept="*" multiple></input>
                    </label>
                  </div>
                </div>
                
                {/* <Dropzone /> */}
              </div>
              <div className={estilos["bot-container1"]}>
                <Link to="" style={{ color: '#FFF', textDecoration: 'none' }}>
                  <button type="submit" className={estilos["btn-end"]}>
                    Concluir
                  </button>
                </Link>

                <Link to="" style={{ color: '#FFF', textDecoration: 'none' }}>
                  <button type="button" className={estilos["btn-add-new"]}>
                    Adicionar novo
                  </button>
                </Link>
              </div>
            
          </div>
        </div>
      </div>
    );
  }
}
