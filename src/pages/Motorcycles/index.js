import { Link, useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react";
import api from '../../services/api';

export default function Motorcycles(){

  const[my_motorcycles, setMotorcycles] = useState([]);
  const navigate = useNavigate();

  // Read, busca todos os registros na api
  useEffect(() => {
    api.get('api/v1/motorcycles', {})
    .then(response => {setMotorcycles(response.data)})
  }, []);

  // Update, navega para tela NewUpdate
  async function updateMotorcycle(id){
    try {
      navigate(`/newupdate/${id}`);      
    } catch (error) {
      alert('Erro ao navegar');      
    }
  }

  // Delete, exclui um registro na api
  async function deleteMotorcycle(id){
    try {
      await api.delete(`api/v1/motorcycles/${id}`, {});
      setMotorcycles(my_motorcycles.filter(motorcycle => motorcycle.id !== id));      
    } catch (error) {
      alert('Erro ao excluir');      
    }
  }

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Motorcycles Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Categoria</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_motorcycles.map(motorcycle => (
               <tr key={motorcycle.id}>
                  <th scope="row">{motorcycle.id}</th>
                    <td>{motorcycle.name}</td>
                    <td>{motorcycle.category}</td>
                    <td>
    
                      <button data-testid="mybtn1" type="button"
                      className="btn btn-outline-info" style={{margin: '2px'}}
                      onClick={() => updateMotorcycle(motorcycle.id)}>Editar</button>
    
                      <button data-testid="mybtn2" type="button"
                      className="btn btn-outline-danger" style={{margin: '2px'}}
                      onClick={() => deleteMotorcycle(motorcycle.id)}>Excluir</button>
    
                    </td>
                </tr>
            ))}
           
          </tbody>
        </table>

      </div>
    </div>

  );

}