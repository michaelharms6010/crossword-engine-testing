function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question + "\n");

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

prompt("What's your name?", input => {
    console.log("Your name is " + input)
    process.exit()})

