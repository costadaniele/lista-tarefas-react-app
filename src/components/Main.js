import React, { Component } from 'react';

// Form 
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';


import './Main.css';

export default class Main extends Component {
    //Class fields
    
    state = {
        novaTarefa: '',
        tarefas: [],
    };

    /*constructor (props) {
        super(props);

        this.state = {
            novaTarefa: '',
        };

        this.valida = this.valida.bind(this);
    }*/

    handleSubmit = (event) => {
        event.preventDefault();
        const { tarefas } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if (tarefas.indexOf(novaTarefa) !== -1) return;

        const novasTarefas = [...tarefas];

        this.setState({
            tarefas: [... novasTarefas, novaTarefa],
        });
    }

    handleChange = (event) => {
        this.setState ({
            novaTarefa: event.target.value,
        });
    }

    render() {
        const  { novaTarefa, tarefas } = this.state;
      
        return (
            <div className="main">
                <h1> Lista de tarefas </h1>

                <form onSubmit={this.handleSubmit} action="#" className="form">
                    <input onChange={this.handleChange} type="text" valeu={novaTarefa} />
                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>

                <ul className="tarefas">
                    {tarefas.map(tarefa => (
                        <li key={tarefa}>{ tarefa}
                        <div className="alinhamento">
                            <FaEdit className="edit"/>
                            <FaWindowClose className="delete"/>
                        </div>
                        
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}