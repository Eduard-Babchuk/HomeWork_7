const prompt = require("prompt-sync")()

start()

function start(){
    console.clear()
    console.log('\x1b[33m%s\x1b[0m',"Choose a deferral method:")
    console.log('\x1b[32m%s\x1b[0m',"=========================")
    console.log("[1] - In some time ")
    console.log("[2] - At a certain time ")
    console.log("[3] - Exit from App ")
    console.log('\x1b[32m%s\x1b[0m',"=========================")
    selectComand()
}


function selectComand(){
    const choose = prompt(">> ")
    switch(choose){
        case "1": InSomeTime(); break
        case "2": AtACertainTime(); break
        case "3": console.clear(); process.exit(0)
        default: console.log('\x1b[31m%s\x1b[0m', 'ERROR: Command not found. Try again'); selectComand()
    }
}

function InSomeTime(){
    console.clear()

    console.log('\x1b[32m%s\x1b[0m',"=========================")
    console.log("Enter the message you want\nto see after a while:")
    const messa = prompt("> ")
    console.log('\x1b[32m%s\x1b[0m',"=========================")
    console.log("Enter number: ")
    const numT = parseInt(prompt("> "))
    console.log('\x1b[33m%s\x1b[0m',"-------------------------")
    console.log("     sec, min, hour");
    console.log('\x1b[33m%s\x1b[0m',"-------------------------")
    console.log("Enter the time unit: ")
    const numO = prompt("> ")
    console.log('\x1b[32m%s\x1b[0m',"=========================")

    whatTime(dodavania, numT, numO);

    function whatTime(Func, x, y) {
        switch (y) {
            case "sec": Func(x); break;
            case "min": Func(x * 60); break;
            case "hour": Func(x * 3600); break;
        }
    }

    function dodavania(x) {
        function countDown(seconds) {
            if (seconds > 0) {
                console.log(seconds + " sec. before the message is displayed");
                setTimeout(() => countDown(seconds - 1), 1000);
            } else {
                console.log('\x1b[32m%s\x1b[0m',"=========================")
                console.log(messa);
                console.log('\x1b[32m%s\x1b[0m',"=========================")
                const PushForExit = prompt("Push ENTER for return to MENU... ")
                start()
            }
        }
        countDown(x);
    }
}

function AtACertainTime(){
    console.clear()

    console.log('\x1b[32m%s\x1b[0m',"=========================")
    console.log("Enter the reminder text:")
    const messaR = prompt("> ")
    console.log('\x1b[32m%s\x1b[0m',"=========================")
    console.log("Enter the reminder time: ")
    console.log('\x1b[33m%s\x1b[0m',"-------------------------")
    console.log('HH:MM:SS')
    console.log('\x1b[33m%s\x1b[0m',"-------------------------")
    const timeR = prompt("> ")
    console.log('\x1b[32m%s\x1b[0m',"=========================")

    const [hours, minutes, seconds] = timeR.split(':').map(Number);

    const today = new Date();
    today.setHours(hours);
    today.setMinutes(minutes);
    today.setSeconds(seconds);

    const nowDate = Date.now()
    toRem = today.getTime() - nowDate 

    setTimeout(() => {
        console.log(messaR)
        console.log('\x1b[32m%s\x1b[0m',"=========================")
        const PushForExit = prompt("Push ENTER for return to MENU... ")
        start()
    }, toRem)
}