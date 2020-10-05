//Display Current date

$("#currentDay").text(moment().format('dddd [,] MMMM Do'));

//variables declaration

let hours = ["9AM", "10AM", "11AM", "12PM","1PM","2PM","3PM","4PM","5PM"];
let mainContainer = $(".container");

//for loop to create block for each working hour
for(var i = 0; i < hours.length ;i++)
{
    let str = hours[i];
    let newAttrVal = str+"block"; 
    let userData = localStorage.getItem(newAttrVal) || "";

     //string manipulation to extract the number and slice AM/PM from the time
    newStr = str.substring(0, str.length - 2);

    //Creating a parent section for each hour block and assigning attributes
    let newSection = $("<section>");
    newSection.attr("class","row time-block");
    mainContainer.append(newSection);

    //Creating child elements and appending it to the parent section
    //child 0 and its attributes declaration
    let col1 = $("<div>");
    col1.attr("class","col-1 hour");
    newSection.append(col1);
    let col1Text = $("<span>");
    col1Text.text(hours[i]);
    col1.append(col1Text);

    //child 1 and its attributes declaration
    let col2 = $("<textarea>");
    col2.attr("class","col-10 description");
    col2.attr("id",str);
    col2.attr("blockName",newAttrVal);
    newSection.append(col2);
    col2.val(userData);
    //function call to determine the background color of text area
    textInputColor(newStr,col2);

    //child 2 and its attributes declaration
    let col3 = $("<div>");
    col3.attr("class","col-1 saveBtn");
    col3.attr("blockName",newAttrVal);
    let icon = $("<i>");
    icon.attr("class","fas fa-save");
    newSection.append(col3);
    col3.append(icon); 
}

//Function to set the background color of each text area 

function textInputColor(str,col2)
{
    let currentHour = moment().hour();
    let textareaHour = parseInt(str);
    if(textareaHour >= 1 && textareaHour <=5)
    {
        textareaHour = textareaHour+12;
    }

    if(textareaHour > currentHour)
    {
        col2.addClass("future");
    }
    else if (textareaHour < currentHour)
    {
        col2.addClass("past");
    }
    else 
    {
        col2.addClass("present");
    }
}

//Click event for save Button

$(".saveBtn").click(function(){

let attrVal = $(this).attr('blockName');
var id = $(this).parents().children("textarea").val();
localStorage.setItem(attrVal,id);

})






