import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './style.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';


export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDecription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    
    async function handleNewIncident(){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile');
        } catch (error) {
            alert ('Erro ao cadastrar caso, tente novamente.')
        }
    }

    return(
    <div className="new-incident-container">
           <div className="content">
               <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar uma ajuda com seu problema.</p>

                <Link className="back-link" to="/profile">
                        <FiArrowLeft size = {16} color="#E02041"/>
                        Voltar
                    </Link>
               </section>
               <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        value = {title}
                        onChange = {e => setTitle(e.target.value)}
                    />
   
                    <textarea  
                        placeholder="Descreva o caso aqui"
                        value = {description}
                        onChange = {e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value = {value}
                        onChange = {e => setValue(e.target.value)}
                    />
   
                    <button className="button" type="submit">Login</button>
               </form>
           </div> 
       </div>
    );
}