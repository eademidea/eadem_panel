import "../screen.css"
export default (props) => {
    console.log(props)
    return <>
        <div id="rightbox">
            <div className="clients">
                <ul>
                    <li id="cliente1">{props.clients[0].nome} - Guichê: {props.clients[0].guiche}</li>
                    <li id="cliente2">{props.clients[1].nome} - Guichê: {props.clients[1].guiche}</li>
                    <li id="cliente3">{props.clients[2].nome} - Guichê: {props.clients[2].guiche}</li>
                    <li id="cliente4">{props.clients[3].nome} - Guichê: {props.clients[3].guiche}</li>
                    <li id="cliente5">{props.clients[4].nome} - Guichê: {props.clients[4].guiche}</li>
                    <li id="cliente6">{props.clients[5].nome} - Guichê: {props.clients[5].guiche}</li>
                </ul>
            </div>
        </div>
    </>
}