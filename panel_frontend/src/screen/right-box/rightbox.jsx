import "../screen.css"
export default (props) => {
    console.log(props)
    return <>
        <div id="rightbox">
            <div className="clients">
                <ul>
                    <li id="cliente1">{props.clients[0].nome}</li>
                    <li id="cliente2"></li>
                    <li id="cliente3"></li>
                    <li id="cliente4"></li>
                    <li id="cliente5"></li>
                    <li id="cliente6"></li>
                </ul>
            </div>
        </div>
    </>
}