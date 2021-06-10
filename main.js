let marHours = {
    month: 'March',
    wknd_open: '10:00 AM',
    wknd_close: '6:30 PM',
    fri_open: '11:00 AM',
    fri_close: '6:30 PM',
    mth_open: 'CLOSED',
    mth_close: 'CLOSED',
    last_put_in: '2:30 PM'
};

let aprHours = {
    month: 'April',
    wknd_open: '10:00 AM',
    wknd_close: '7:00 PM',
    fri_open: '11:00 AM',
    fri_close: '7:00 PM',
    mth_open: '11:00 AM',
    mth_close: '7:00 PM',
    last_put_in: '2:30 PM'
};

let may_augHours = {
    month: 'May-August',
    wknd_open: '9:00 AM',
    wknd_close: '7:00 PM',
    fri_open: '10:00 AM',
    fri_close: '7:00 PM',
    mth_open: '10:00 AM',
    mth_close: '7:00 PM',
    last_put_in: '3:00 PM'
};

let sepHours = {
    month: 'September',
    wknd_open: '10:00 AM',
    wknd_close: '7:00 PM',
    fri_open: '11:00 AM',
    fri_close: '7:00 PM',
    mth_open: '11:00 AM',
    mth_close: '7:00 PM',
    last_put_in: '3:00 PM'
};

let octHours = {
    month: 'October',
    wknd_open: '10:00 AM',
    wknd_close: '6:30 PM',
    fri_open: '11:00 AM',
    fri_close: '6:30 PM',
    mth_open: 'CLOSED',
    mth_close: 'CLOSED',
    last_put_in: '2:30 PM'
};

let offHours = {
    month: '(Off-Season)',
    wknd_open: 'CLOSED',
    wknd_close: 'CLOSED',
    fri_open: 'CLOSED',
    fri_close: 'CLOSED',
    mth_open: 'CLOSED',
    mth_close: 'CLOSED',
    last_put_in: 'CLOSED'
};

function getCurrMonthNum() { //returns current month number
    let d = new Date();
    return d.getMonth() + 1;
}

function getMonthOpt(month) {

    let outMonthOpt;

    if (month == 3)
        outMonthOpt = document.getElementById('maropt');
    else if (month == 4)
        outMonthOpt = document.getElementById('apropt');
    else if (month == 5 || month == 6 || month == 7 || month == 8)
        outMonthOpt = document.getElementById('mayaugopt');
    else if (month == 9)
        outMonthOpt = document.getElementById('sepopt');
    else if (month == 10)
        outMonthOpt = document.getElementById('octopt');
    else 
        outMonthOpt = document.getElementById('offopt');

    return outMonthOpt;
}

function getMonthObj(month) { //takes in month and gives associated month object

    if (typeof month == String) {
        month = Number(month);
    }

    let outMonth;

    if (month == 3) 
        outMonth = marHours;
    else if (month == 4)
        outMonth = aprHours;
    else if (month == 5 || month == 6 || month == 7 || month == 8)
        outMonth = may_augHours;
    else if (month == 9)
        outMonth = sepHours;
    else if (month == 10)
        outMonth = octHours;
    else 
        outMonth = offHours;

    return outMonth;

}

function fillHours(monthObj) { //fills html table with data from month object

    document.getElementById('open-wknd').innerHTML = monthObj.wknd_open;
    document.getElementById('close-wknd').innerHTML = monthObj.wknd_close;
    document.getElementById('open-fri').innerHTML = monthObj.fri_open;
    document.getElementById('close-fri').innerHTML = monthObj.fri_close;
    document.getElementById('open-mth').innerHTML = monthObj.mth_open;
    document.getElementById('close-mth').innerHTML = monthObj.mth_close;

    document.getElementById('putintime').innerHTML = monthObj.last_put_in;

}

//hours table execution

//set hours based on current month, on load
window.onload = fillHours(getMonthObj(getCurrMonthNum()));
window.onload = getMonthOpt(getCurrMonthNum()).selected = 'selected';
//

//fill table with selected hours when select box is changed
document.getElementById('hours-select').addEventListener('change', function() {
    
    let cMonth = getMonthObj(document.getElementById('hours-select').value);

    fillHours(cMonth);
 
});
//

//close hamburger menu on selection
var checkbox = document.getElementById('toggle');

document.getElementById('homelink').addEventListener('click', function() {
        checkbox.checked = false;
});

document.getElementById('priceslink').addEventListener('click', function() {
    checkbox.checked = false;
});

document.getElementById('hourslink').addEventListener('click', function() {
    checkbox.checked = false;
});

document.getElementById('sectionslink').addEventListener('click', function() {
    checkbox.checked = false;
});

document.getElementById('moreinfolink').addEventListener('click', function() {
    checkbox.checked = false;
});
//
