import "../screen.css"
export default (props) => {
    console.log(props.configurations)
    console.log(props.configurations.corFonteCabecalho)
    return <>
        <div id="leftbox"  style={{background: props.configurations.corQuadroEsquerdo}}>
            <div>
                <h1 id="guiche" style={{color: props.configurations.corFonteQuadroEsquerdo}}>
                    Guichê: {props.clients[0].guiche}
                </h1>
            </div>
            <div>
                <h1 id="senha" style={{color: props.configurations.corFonteQuadroEsquerdo}}>
                    Senha: {props.clients[0].senha}
                </h1>
            </div>
        </div>
    </>
}