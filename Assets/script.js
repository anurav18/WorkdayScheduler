//Display Current date

$("#currentDay").text(moment().format('dddd [,] MMMM Do'));

//Defining working hours in an array

let hours = ["9AM", "10AM", "11AM", "12PM","1PM","2PM","3PM","4PM","5PM"];

for(var i = 0; i < hours.length ;i++)
{
    let mainContainer = $(".container");
    let newSection = $("<div>");
    newSection.attr("class","row time-block");
    let col1 = $("<div>");
    col1.attr("class","col-1 hour");
    let col2 = $("<textarea>");
    col2.attr("class","col-10 description");
    let col3 = $("<div>");
    col3.attr("class","col-1 saveBtn");
    let icon = $("<i>");
    icon.attr("class","fas fa-save");
    let col1Text = $("<span>");
     //string manipulation
     let str = hours[i];
     str = str.substring(0, str.length - 2);
    col1Text.text(hours[i]);
    col2.attr("id",str);
    mainContainer.append(newSection);
    newSection.append(col1);
    col1.append(col1Text);
    newSection.append(col2);
    newSection.append(col3);
    col3.append(icon);
    textInputColor(str,col2);
}

//Setting Text Area backgound color 

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
        col2.attr("style","background-color:green");
    }
    else if (textareaHour < currentHour)
    {
        col2.attr("style","background-color:blue");
    }
    else {
        col2.attr("style","background-color:red");
    }
}


