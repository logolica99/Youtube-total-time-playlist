let showTimeBtn = document.getElementById("showTimeBtn");
const mainDiv = document.querySelector("#time")



showTimeBtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });



    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: ShowTimes
    }

    );
    // mainDiv.innerHTML+=${}

});




function ShowTimes() {

    var totalDuration = { "hours": 0, "minutes": 0, "seconds": 0,"totalTime":0 }
    times = document.querySelectorAll(".style-scope ytd-thumbnail-overlay-time-status-renderer")
    times.forEach(time => {
        let text = time.innerText;
        let splittedText = text.split(":")
        splittedText.forEach((text, index, arr) => {
            if (text.includes("\n")) {
                arr[index] = text.replace("\n", "")
            }
        })

        if (splittedText.length > 2) {
            let duration = { "hours": parseInt(splittedText[0]), "minutes": parseInt(splittedText[1]), "seconds": parseInt(splittedText[2]) }


            totalSeconds = totalDuration.seconds + duration.seconds
            totalMinutes = totalDuration.minutes + duration.minutes



            if (totalSeconds >= 60) {
                totalDuration.minutes += 1
                totalDuration.seconds = totalSeconds - 60
            } else {
                totalDuration.seconds = totalSeconds
            }

            if (totalMinutes >= 60) {
                totalDuration.hours += 1
                totalDuration.minutes = totalMinutes - 60
            } else {
                totalDuration.minutes = totalMinutes
            }
            totalDuration.hours += duration.hours





        } else {
            let duration = { "minutes": parseInt(splittedText[0]), "seconds": parseInt(splittedText[1]) }







            totalSeconds = totalDuration.seconds + duration.seconds
            totalMinutes = totalDuration.minutes + duration.minutes


            if (totalSeconds >= 60) {
                totalDuration.minutes += 1
                totalDuration.seconds = totalSeconds - 60
            } else {
                totalDuration.seconds = totalSeconds
            }

            if (totalMinutes >= 60) {
                totalDuration.hours += 1
                totalDuration.minutes = totalMinutes - 60
            } else {
                totalDuration.minutes = totalMinutes
            }

















        }

    })
    //totalDuration.totalTime=totalDuration.hours*3600+totalDuration.minutes*60+totalDuration.seconds
    console.log(totalDuration)

    const e = document.createElement('div');
    e.innerHTML = `<h2 id="totaltime">Total Time</h2> <p id="timeShown">${totalDuration.hours}:${totalDuration.minutes}:${totalDuration.seconds}</p> 
    
        <p>

    `;
    e.style.position = "fixed"
    e.style.top = "100px";
    e.style.right = 0;
    e.style.zIndex = 1000000;
    e.style.background = "#181818"
    e.style.color = "white"
    e.style.padding = "10px"

    document.body.appendChild(e);
    timeElement = document.querySelectorAll("#timeShown")
    timeElement.forEach(element => {
        element.style.fontSize = "30px"
    })






}















































// var totalDuration = { "hours": 0, "minutes": 0, "seconds": 0 }

// function timeCalculation(hours, minutes, seconds) {
//     totalSeconds = totalDuration.seconds + seconds
//     totalMinutes = totalDuration.minutes + minutes
//     totalHours = totalDuration.hours + hours

//     if (totalSeconds >= 60) {
//         totalDuration.minutes += 1
//         totalDuration.seconds = totalSeconds - 60
//     } else {
//         totalDuration.seconds = totalSeconds
//     }

//     if (totalMinutes >= 60) {
//         totalDuration.hours += 1
//         totalDuration.minutes = totalMinutes - 60
//     } else {
//         totalDuration.minutes = totalMinutes
//     }

//     totalDuration.hours += totalHours

// }

