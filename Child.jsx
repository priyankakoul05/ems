function Child ({sendData}){
    return (
        <button onClick={() => sendData("Hello from Child")}>
            Send Data

        </button>
    )
}

export default Child;