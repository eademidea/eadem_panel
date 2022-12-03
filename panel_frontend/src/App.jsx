import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'

var content;
const socket = io('http://localhost:4004')
socket.on('connect', () => console.log(`[IO] Connect => Uma nova conexão de socket foi estabelecida ${socket.id}`));
socket.on('data.client', (data) => {
  console.log(data);
})



function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <p>
            {content}
        </p>


      </header>
    </div>
  );
}

export default App;
