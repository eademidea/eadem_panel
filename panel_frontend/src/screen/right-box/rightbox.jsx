import "../screen.css"
export default (props) => {
    var dataComponent = [];
    var counter = 1;
    props.clients.map((client) => {
        dataComponent.push(
            <li key={counter} id={"cliente" + counter}> {client.nome.slice(0,26)} - Guichê: {client.guiche}</li>
        );
        counter = counter + 1;
    });

    return <>
        <div id="rightbox" style={{background: props.configurations.corQuadroDireito}}>
            <div className="clients" style={{color: props.configurations.corFonteQuadroDireito}}>
                <ul>
                    {dataComponent}
                </ul>
            </div>
        </div>
    </>
}