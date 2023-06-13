// ctrl + alt + N to run
const prompt = require('prompt-sync')(); //Allows to read user input

function main() {
    console.log('Type "Hey Chatbot" in order to search.');
    let start = prompt(); 


    if (start === "Hey Chatbot" || start === "hey chatbot" || start === "Hey chatbot") {
        printMenu();

        while(true) {
            console.log('');
            let option = prompt('What can Chatbot do for you?: ');
    
            if (option === "q" || option === "quit" || option === "Quit") {
                return;
            } else if (option === "Date" || option === "date"){
                dateFunction(option);
                continue;
            } else if (option === "Time" || option === "time") {
                timeFunction(option);
                continue;
            } else if (option === "m" || option === "menu" || option === "Menu") {
                printMenu();
                continue;
            } else if (option === "Web" || option === "web") {
                webFunction(option);
                continue;
            } else {
                console.log('Wrong option, try again.');
                continue;
            }
        }
    
    }
         

    

}


function printMenu() {
    console.log('');
    console.log('MENU');
    console.log('Date - Chatbot will get todays date from you');
    console.log('Time - Chatbot will get the current time for you');
    console.log('Open Webpage - Enter "web" in order to open a webpage');
    console.log('Quit - Enter q or quit to exit the program');
    console.log('Menu - Enter m or menu to see the menu again');
}

function dateFunction(menuOption) {
    // get the current date
    dateFormat = new Date().toDateString();
    console.log("Today's date is " + dateFormat);
}

function timeFunction(menuOption) {
    // get the current time
    military = new Date().getHours();
    nonMilitary = military - 12; 

    let timeFrame = "";

    if(military >= 12) {
        timeFrame = " PM";
    }
    if(military < 12) {
        timeFrame = " AM";
    }

    timeFormat = nonMilitary + ":" + new Date().getMinutes();
    console.log("The time is: " + timeFormat + timeFrame);
}

function webFunction(menuOption) {
    // open a URL
    site = prompt('Enter a URL, without the http:// : ');
    const open = require('open'); //Allows to use open method, giving error
    open('http://' + site);
}


main();