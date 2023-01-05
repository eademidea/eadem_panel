import io from 'socket.io-client'
import LeftBox from './left-box/leftbox'
import RightBox from './right-box/rightbox'
import Title from './title/title'
import "./screen.css"

var clients = JSON.parse(getSalas());
console.log(clients)

var teste = []

const socket = io('http://localhost:4004')
socket.on('data.client', (data) => {
    clients = data
    teste.push(data)
    console.log(teste)
    //Não é uma prática adequada fazer este processo pelo DOM. Será um ajuste para releases futuras.
    // document.getElementById('nome').innerHTML = `${data.clientes[0].ID} - ${data.clientes[0].nome}`;
    // document.getElementById('senha').innerHTML = `Senha: ${data.clientes[0].senha}`;
    // document.getElementById('guiche').innerHTML = `Guichê: ${data.clientes[0].guiche}`;
    // document.getElementById('cliente1').innerHTML = `${data.clientes[0].nome} - ${data.clientes[0].guiche} - ${data.clientes[0].senha}`;
    // document.getElementById('cliente2').innerHTML = `${data.clientes[1].nome} - ${data.clientes[1].guiche} - ${data.clientes[1].senha}`;
    // document.getElementById('cliente3').innerHTML = `${data.clientes[2].nome} - ${data.clientes[2].guiche} - ${data.clientes[2].senha}`;
    // document.getElementById('cliente4').innerHTML = `${data.clientes[3].nome} - ${data.clientes[3].guiche} - ${data.clientes[3].senha}`;
    // document.getElementById('cliente5').innerHTML = `${data.clientes[4].nome} - ${data.clientes[4].guiche} - ${data.clientes[4].senha}`;
    // document.getElementById('cliente6').innerHTML = `${data.clientes[5].nome} - ${data.clientes[5].guiche} - ${data.clientes[5].senha}`;
})



export default (props) => {

    console.log(teste)

    return <>

        <div className="screen">
            <Title></Title>
            <LeftBox></LeftBox>
            <RightBox clients={clients}></RightBox>
        </div>
    </>
}

function getSalas(yourUrl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", "http://localhost:4004/obterUltimosRegistros", false);
    Httpreq.send(null);
    return Httpreq.responseText;
}