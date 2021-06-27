function loadAPIData() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var mData = JSON.parse(xhttp.responseText);
            console.log(mData);
            console.log(mData.data.local_active_cases);

            document.getElementById('local_total_cases').innerHTML = mData.data.local_total_cases;
            document.getElementById('local_new_cases').innerHTML = mData.data.local_new_cases;
            document.getElementById('local_active_cases').innerHTML = mData.data.local_active_cases;
            document.getElementById('local_recovered').innerHTML = mData.data.local_recovered;
            document.getElementById('local_new_deaths').innerHTML = mData.data.local_new_deaths;
            document.getElementById('local_deaths').innerHTML = mData.data.local_deaths;

            document.getElementById('global_total_cases').innerHTML = mData.data.global_total_cases;
            document.getElementById('global_new_cases').innerHTML = mData.data.global_new_cases;
            document.getElementById('global_recovered').innerHTML = mData.data.global_recovered;
            document.getElementById('global_new_deaths').innerHTML = mData.data.global_new_deaths;
            document.getElementById('global_deaths').innerHTML = mData.data.global_deaths;

            document.getElementById('update_date_1').innerHTML = "Last Update :" + mData.data.update_date_time;
            document.getElementById('update_date_2').innerHTML = "Last Update :" + mData.data.update_date_time;
            document.getElementById('update_date_3').innerHTML = "Last Update :" + mData.data.update_date_time;
            document.getElementById('update_date_4').innerHTML = "Last Update :" + mData.data.update_date_time;
            document.getElementById('update_date_5').innerHTML = "Last Update :" + mData.data.update_date_time;
            document.getElementById('update_date_6').innerHTML = "Last Update :" + mData.data.update_date_time;
            document.getElementById('update_date_7').innerHTML = "Last Update :" + mData.data.update_date_time;
            document.getElementById('update_date_8').innerHTML = "Last Update :" + mData.data.update_date_time;
            document.getElementById('update_date_9').innerHTML = "Last Update :" + mData.data.update_date_time;
            document.getElementById('update_date_10').innerHTML = "Last Update :" + mData.data.update_date_time;
            document.getElementById('update_date_11').innerHTML = "Last Update :" + mData.data.update_date_time;


        }
    }

    xhttp.open('GET', 'https://hpb.health.gov.lk/api/get-current-statistical', true);
    xhttp.send();

}


function updateTime() {

    var dateTime = new Date();

    var hr;
    var min = (dateTime.getMinutes < 10) ? "0" + dateTime.getMinutes() : dateTime.getMinutes();
    var sec = (dateTime.getSeconds < 10) ? "0" + dateTime.getSeconds() : dateTime.getSeconds();
    var amPm = (dateTime.getHours >= 12) ? "PM" : "AM";

    //show hours in 24 
    if (dateTime.getHours() == 0) {
        hr = 12;
    } else if (dateTime.getHours() > 12) {
        hr = dateTime.getHours() - 12;
    } else {
        hr = dateTime.getHours();
    }

    document.getElementById('sysDateTime').innerHTML = hr + ":" + min + ":" + sec;
    document.getElementById('sysAmPm').innerHTML = amPm;

    var dates = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    var month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var currentDay = dates[dateTime.getDay()] + "," + month[dateTime.getMonth()] + " " + dateTime.getDate();
    document.getElementsByClassName('date')[0].innerHTML = currentDay;
}

updateTime();
setInterval(function() {
    updateTime()
}, 1000);