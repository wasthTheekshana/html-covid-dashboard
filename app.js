function loadAPIData() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var mData = JSON.parse(xhttp.responseText);
            console.log(mData);
            console.log(mData.data.local_active_cases);

            document.getElementById('local_total_cases').innerHTML = mData.data.local_active_cases;
        }
    }

    xhttp.open('GET', 'https://hpb.health.gov.lk/api/get-current-statistical', true);
    xhttp.send();

}