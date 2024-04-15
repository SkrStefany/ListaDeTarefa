import React, { useState, useEffect } from 'react'; 


function App() {
  const [input, setInput] = useState('');
  
  const [tarefas, setTarefas] = useState([
    
  ]);

  const removerTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };
  

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefas');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefas', JSON.stringify(tarefas));
  }, [tarefas]);



  function enviar(e) {
    e.preventDefault();

    setTarefas([...tarefas, input])
    setInput('');
  }


  return (
    <div class='container'>
      <h1 class='Titulo'>Lista de Tarefas </h1>

      <form onSubmit={enviar}>
        <label>Tarefa: </label> <br/>
        <input placeholder='Digite aqui:' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type='submit' >Enviar</button>
      </form>

    
  <ul>
    {tarefas.map((tarefa, index) => (
      <li key={index}>
        {tarefa}
        <button class='remover' onClick={() => removerTarefa(index)}>Remover</button>
      </li>
    ))}
  </ul>

      
    </div>
  );
}

export default App;