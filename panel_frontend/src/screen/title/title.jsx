import "../screen.css"
export default (props) => {
    return <>
        <div id="title">
            <h1 id="nome">
                {props.clients[0].nome}
            </h1>
        </div>
    </>
}