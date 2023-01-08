import "../screen.css"
export default (props) => {
    return <>
        <div id="leftbox"  >
            <div>
                <h1 id="guiche">
                    Guichê: {props.clients[0].guiche}
                </h1>
            </div>
            <div>
                <h1 id="senha">
                    Senha: {props.clients[0].senha}
                </h1>
            </div>
        </div>
    </>
}