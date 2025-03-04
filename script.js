function verMessage() {
    let messageToVer = prompt("Enter a word to verify: ");

    if (messageToVer.includes('FR') && messageToVer.includes('AI')) {
        document.getElementById('result').innerHTML = `The message "${messageToVer}" is legitimate!`;
    }  
    else if (messageToVer.includes('AI') || messageToVer.includes('aI') || messageToVer.includes('Ai')) {
        document.getElementById('result').innerHTML = `The message "${messageToVer}" is tampered!!`;
    }
    else if (messageToVer.includes('FR')) {
        document.getElementById('result').innerHTML = `The message "${messageToVer}" is legitimate!`;
    }
    else {
        document.getElementById('result').innerHTML = `The message "${messageToVer}" is not yet encoded!!`;
    }
}
