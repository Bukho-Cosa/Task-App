//add event listener for clicking the page and switch for time.


/**
 * This codes for the aesthetics of the home page, the declarations are of the titles and the switch method is for the time of day
 */

const title = document.querySelector("#title");
const titleOne = document.querySelector("#titleOne");
const titleTwo = document.querySelector("#titleTwo");

const d = new Date();
let hour = d.getHours();

console.log(hour);

switch(hour){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        console.log("good morning");
        title.style.visibility = "visible";
        document.body.style.backgroundColor = "lightblue";
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        console.log("good afternoon");
        titleOne.style.visibility = "visible";
        document.body.style.backgroundColor = "#46BBFB";
        break;
    default:
        console.log("good evening");
        titleTwo.style.visibility = "visible";
        document.body.style.backgroundColor = "#012031";
}

//this works despite being hefty, I will have to code this into event listener for page backgrounds

//turns out I didn't have to put it into an event listener, it being a switch method works as an event listener of its own

//please remember to code for page switcing.
// done the page switching


// add a thing for using the name in the title of the next page
//  add a thing for the actual moving to the next page (click onpage for next page)

document.body.addEventListener('click', () => {
    document.getElementById('nextPage').click();
})
