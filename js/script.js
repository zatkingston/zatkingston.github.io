//const div = document.getElementById("div2canv");
//var canvas = document.getElementById("myCanvas");

//document.getElementById("screen_button").addEventListener('click', ()=>{
//    html2canvas(div).then(canvas => {
//        document.body.appendChild(canvas)
//    });});

const tableContainer = document.getElementById("table_container");
const planningSample = document.getElementById("planning_sample");
const downloadButton = document.getElementById("downloadButton");
var sampledImageId = 0;

function download(){
    var sampledImage = document.getElementById("sampledImage" + sampledImageId).toDataURL("image/jpg");
    console.log(sampledImage);
    return sampledImage;
}

document.getElementById("generateButton").addEventListener('click', ()=>{
        html2canvas(tableContainer).then(canvas => {
            var convertedCanvas = document.body.appendChild(canvas);
            convertedCanvas.setAttribute("id", "sampledImage" + sampledImageId);
            l = download();
            downloadButton.href = l;
            convertedCanvas.setAttribute("download", l);
            downloadButton.click();
            sampledImageId += 1;
        });
    });


const tgDay = document.getElementsByClassName("tg-day");
const tgComponent = document.getElementsByClassName("tg-component");
const letsPlayInput = document.getElementsByClassName("letsPlayInput");

letsPlayInput[0].oninput = function(){
    letsPlay1 = letsPlayInput[0].value;
    UpdateDays();
    console.log(daysParts);
    Update("components");
}

letsPlayInput[1].oninput = function(){
    letsPlay2 = letsPlayInput[1].value;
    UpdateDays();
    console.log(daysParts);
    Update("components");
}

const daysRangeInput = document.getElementById("daysRangeInput");
var days = ["Lundi","Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi","Dimanche"];

daysRangeInput.oninput = () => {
        daysRangeInputReturningValue = parseInt(daysRangeInput.value);
        console.log(" after parsing : " + daysRangeInputReturningValue + 2);
        Update("days", daysRangeInputReturningValue);
}


function Update(element, valueVar){
    switch(element){
        case "days" :
            for(var tgDayI = 0; tgDayI < tgDay.length; tgDayI++){
                var localArrSelector = tgDayI + valueVar;
                console.log("localArrValue : " + localArrSelector + " value var : " + valueVar + " tgDayI : " + tgDayI);
                if(localArrSelector >= days.length){
                    localArrSelector = localArrSelector - days.length;
                    console.log("sup");
                }
                tgDay[tgDayI].innerHTML = days[localArrSelector];
                console.log(days.length);
            }
        break;
        case "components" :
            for(var tgComponentI = 0; tgComponentI < tgComponent.length; tgComponentI++){
                tgComponent[tgComponentI].innerHTML = gameslist[tgComponentI];
            }
        break;
    }
}

daysRangeInputReturningValue = parseInt(daysRangeInput.value);
Update("days", daysRangeInputReturningValue);
Update("components");
    
console.log(tgDay);
