import "./App.css";
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

const nome= 'Cláudia'

  return (
    <div className="App">
    
      <SayMyName nome='Diego'/>
      <SayMyName nome='Kekel'/>
      <SayMyName nome= {nome} />
      <Pessoa nome= 'Calleb' 
      idade='35' 
      profissao= 'Programador'
       foto='https://via.placeholder.com/150'

      />

    </div>
  );
}

export default App;
