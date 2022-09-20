const image = document.getElementById("dawn");
const imageOne = document.getElementById("dawnOne");


const newImage = document.createElement('img');
newImage.innerHTML = '<img src="../images/day/day 1.jpg" width="300kb">';

const newImageOne = document.createElement('img');
newImageOne.innerHTML = '<img src="../images/day/day 2.jpg" width="300kb">';

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
        document.body.style.backgroundColor = "lightblue";
        image.style.visibility = "visible";
        imageOne.style.visibility = "visible"; 
        /* check your flex and placements in general for css and try to change visibility on html first and then do the styling here ir do it on css and then change it here*/ 
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        console.log("good afternoon");
        document.body.style.backgroundColor = "#46BBFB";
        image.parentNode.replaceChild(newImage, image);
        newImage.style.visibility = "visible";

        imageOne.parentNode.replaceChild(newImageOne, imageOne);
        newImageOne.style.visibility = "visible";
        break;
    default:
        console.log("good evening");
        document.body.style.backgroundColor = "#012031";
}

/**
 * do this so your pictures aren't chunky:
 * e.g listItem.parentNode.replaceChild(newItem, listItem);
 */