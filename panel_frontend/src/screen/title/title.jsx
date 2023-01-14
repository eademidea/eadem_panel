import "../screen.css"
export default (props) => {
    return <>
        <div id="title" style={{background: props.configurations.corFundoCabecalho}}>
            <h1 id="nome" style={{color: props.configurations.corFonteCabecalho}}>
                {props.clients[0].nome.slice(0,36)}
            </h1>
        </div>
    </>
}