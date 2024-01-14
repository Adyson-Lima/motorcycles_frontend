import { Link, useNavigate, useParams } from "react-router-dom";
import React,{useState, useEffect} from "react";
import api from '../../services/api';

export default function NewUpdate(){

  const[name, setName] = useState('');
  const[category, setCategory] = useState('');
  const navigate = useNavigate();

  // o idenfificador motorcycle_id é o mesmo definido na rota
  const{motorcycle_id} = useParams();

  async function saveOrUpdate(e){

    e.preventDefault();

    const data = {name, category};

    if (motorcycle_id === '0') {
      try {
        await api.post('api/v1/motorcycles', data, {});
        navigate('/');
      } catch (error) {
        alert('Erro ao salvar!');        
      }      
    } else {
      try {
        await api.patch(`api/v1/motorcycles/${motorcycle_id}`, data, {});
        navigate('/');
      } catch (error) {
        alert('Erro ao atualizar');        
      }      
    }
  }

  // Carrega dados da api e seta dados para atualização
  async function loadMotorcycle(){
    try {
      const response = await api.get(`api/v1/motorcycles/${motorcycle_id}`,{});
      setName(response.data.name);
      setCategory(response.data.category);
    } catch (error) {
      alert('Erro ao buscar registro');
      navigate('/');      
    }
  }

  // Chama loadMotorcycle e preenche form
  useEffect(() => {
    if (motorcycle_id === '0') {
      return;      
    } else {
      loadMotorcycle();      
    }
  }, [motorcycle_id]);

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Motorcycles Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>

          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input data-testid="input1" id="name" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Nome" value={name}
            onChange={e => setName(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoria</label>
            <input data-testid="input2" id="category" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Categoria" value={category}
            onChange={e => setCategory(e.target.value)}></input>
          </div>

          <button data-testid="btnenviar" type="submit" className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>

  );

}