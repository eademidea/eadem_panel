import io from 'socket.io-client'


export default () => {
    const socket = io('http://localhost:4004')
    socket.on('connect', () => console.log(`[IO] Connect => Uma nova conexão de socket foi estabelecida ${socket.id}`));
    socket.on('data.client', (data) => {
        return data;
    })
}

