import io from 'socket.io-client'
import BigBox from './big-box/bigbox'
import "./screen.css"

const socket = io('http://localhost:4004')
socket.on('data.client', (data) => {
    document.getElementById('nome').innerHTML = data.nome
    document.getElementById('senha').innerHTML = data.senha
    document.getElementById('guiche').innerHTML = data.guiche

})

export default (props) => {

    return <>

        <div class="container text-center">
            <div class="row">
                <div class="col-12">
                    <div id="titulo">
                        <h1 id="nome"></h1>
                    </div>
                </div>
            </div>

            <BigBox></BigBox>
        </div>

    </>
}