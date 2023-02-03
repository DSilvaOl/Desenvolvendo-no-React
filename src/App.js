import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";

function App() {
  const nome = "Cláudia";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Diego" />
      <SayMyName nome="Kekel" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Calleb"
        idade="35"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
