import io from 'socket.io-client'
import LeftBox from './left-box/leftbox'
import RightBox from './right-box/rightbox'
import Title from './title/title'
import "./screen.css"
import MockData from "../resources/mockdata.json"
import MockConfigurations from "../resources/mockconfigurations.json"

var clients = getClients();
var configurations = getConfiguration();

export default (props) => {
    return <>
        <div className="screen" style={{background: configurations.corFundo}}>
            <Title configurations={configurations} clients={clients}></Title>
            <LeftBox configurations={configurations} clients={clients}></LeftBox>
            <RightBox configurations={configurations} clients={clients}></RightBox>
        </div>
    </>
}


function getClients() {
    var lastClients = JSON.parse(getResponse("http://localhost:4004/obter-ultimos-registros"));
    if (lastClients.length == 0) {
        lastClients = MockData;
    }
    return lastClients;
}

function getConfiguration() {
    var configurations = JSON.parse(getResponse("http://localhost:4004/obter-configuracoes"));
    if (configurations != null && configurations.length > 0) {
        return configurations[0];
    } else {
        return MockConfigurations[0];
    }
}

const socket = io('http://localhost:4004')
socket.on('data.client', (data) => {
    // Não é uma prática adequada fazer este processo pelo DOM. Será um ajuste para releases futuras.
    document.getElementById('nome').innerHTML = `${data.clientes[0].nome.slice(0, 36)}`;
    document.getElementById('senha').innerHTML = `Senha: ${data.clientes[0].senha}`;
    document.getElementById('guiche').innerHTML = `Guichê: ${data.clientes[0].guiche}`;

    document.getElementById('cliente1').innerHTML = `${data.clientes[0].nome.slice(0, 26)} - Guichê:  ${data.clientes[0].guiche} `;
    document.getElementById('cliente2').innerHTML = `${data.clientes[1].nome.slice(0, 26)} - Guichê: ${data.clientes[1].guiche} `;
    document.getElementById('cliente3').innerHTML = `${data.clientes[2].nome.slice(0, 26)} - Guichê: ${data.clientes[2].guiche} `;
    document.getElementById('cliente4').innerHTML = `${data.clientes[3].nome.slice(0, 26)} - Guichê: ${data.clientes[3].guiche} `;
    document.getElementById('cliente5').innerHTML = `${data.clientes[4].nome.slice(0, 26)} - Guichê: ${data.clientes[4].guiche} `;
    document.getElementById('cliente6').innerHTML = `${data.clientes[5].nome.slice(0, 26)} - Guichê: ${data.clientes[5].guiche} `;

    const audio = new Audio(require('../resources/toque.mp3')) 
    audio.play()
})

function getResponse(yourUrl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}