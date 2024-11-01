const connectionCodes = {
    1: {
        name: "AnyDesk",
        code: "1 516 901 568" // Replace with actual code
    },
    2: {
        name: "RustDesk",
        code: "987 654 321" // Replace with actual code
    }
};

function showConnectionCode(vmNumber) {
    const outputElement = document.getElementById(`vm${vmNumber}-output`);
    const connectionInfo = connectionCodes[vmNumber];

    outputElement.innerText = `Connection Code for ${connectionInfo.name}: ${connectionInfo.code}`;
}
