import io from 'socket.io-client'
import LeftBox from './left-box/leftbox'
import RightBox from './right-box/rightbox'
import Title from './title/title'
import "./screen.css"
import MockData from "../resources/mockdata.json"

var clients = getClients();

export default (props) => {

    return <>

        <div className="screen">
            <Title clients={clients}></Title>
            <LeftBox clients={clients}></LeftBox>
            <RightBox clients={clients}></RightBox>
        </div>
    </>
}


function getClients() {
    var lastClients = JSON.parse(getLastClients("http://localhost:4004/obterUltimosRegistros"));
    if (lastClients.length == 0) {
        lastClients = MockData;
    }
    return lastClients;
}

const socket = io('http://localhost:4004')
socket.on('data.client', (data) => {
    // Não é uma prática adequada fazer este processo pelo DOM. Será um ajuste para releases futuras.
    document.getElementById('nome').innerHTML = `${data.clientes[0].ID} - ${data.clientes[0].nome}`;
    document.getElementById('senha').innerHTML = `Senha: ${data.clientes[0].senha}`;
    document.getElementById('guiche').innerHTML = `Guichê: ${data.clientes[0].guiche}`;

    document.getElementById('cliente1').innerHTML = `${data.clientes[0].nome} - Guichê:  ${data.clientes[0].guiche} `;
    document.getElementById('cliente2').innerHTML = `${data.clientes[1].nome} - Guichê: ${data.clientes[1].guiche} `;
    document.getElementById('cliente3').innerHTML = `${data.clientes[2].nome} - Guichê: ${data.clientes[2].guiche} `;
    document.getElementById('cliente4').innerHTML = `${data.clientes[3].nome} - Guichê: ${data.clientes[3].guiche} `;
    document.getElementById('cliente5').innerHTML = `${data.clientes[4].nome} - Guichê: ${data.clientes[4].guiche} `;
    document.getElementById('cliente6').innerHTML = `${data.clientes[5].nome} - Guichê: ${data.clientes[5].guiche} `;

})

function getLastClients(yourUrl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}