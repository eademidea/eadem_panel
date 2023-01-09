import "../screen.css"
export default (props) => {
    var dataComponent = [];
    var counter = 1;
    props.clients.map((client) => {
        dataComponent.push(
            <li id={"cliente" + counter}> {client.nome} - Guichê: {client.guiche}</li>
        );
        counter = counter + 1;
    });

    return <>
        <div id="rightbox">
            <div className="clients">
                <ul>
                    {dataComponent}
                </ul>
            </div>
        </div>
    </>
}