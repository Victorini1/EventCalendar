const saveBtn = $("#savebutton");
const curDate = moment().format('MMMM Do YYYY');
let header = $("#currentday");

// Read from the local drive
let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
let setPlans = JSON.parse(localStorage.setItem())


//Time has to appear at the top of page
header.text(curDate)

// 9 hours in a day and each need a seperate section to write memos in

/* add time blocks  that change color depending on the time..
get the current time and query the time with a specified time to get the color to change*/

// save the events 

saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    
});

// Write things to the local drive

