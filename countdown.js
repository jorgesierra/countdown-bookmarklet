var mins = window.prompt('Enter minutes:');
if ($('#js-timer').length > 0) {
    $('#js-timer').remove();
    if (window.jsTimeout != undefined) {
        window.clearTimeout(window.jsTimeout);
    }
}
if (mins != null && jQuery.isNumeric(mins)) {
    $('body').append('<div id="js-timer" style="position:fixed;top:20px;right:10px;width:270px; background-color: black; color: white; font-size: 25px; padding: 8px; font-weight: bold; text-align:center"></div>');

    $('#js-timer').append('<span class="time-remaining-time"></span> <span class="time-remaining-text"></span>');

    countDown(mins * 60);
}

function countDown(secs) {
    var dt = moment.duration(secs, 'seconds');
    var hours = dt.hours();
    var minutes = dt.minutes();
    var seconds = dt.seconds();
    var remainingTime = "";
    var timeUnit = "";
    var refresh = 1000;

    if (hours > 0) {
        timeUnit = "hour";
        if (hours > 1) {
            timeUnit = "hours";
        }
        remainingTime = hours;
    } else if (minutes > 0) {
        timeUnit = "minute";
        if (minutes > 1) {
            timeUnit = "minutes";
        }
        remainingTime = minutes;
    } else if (seconds > 0) {
        timeUnit = "second";
        if (seconds > 1) {
            timeUnit = "seconds";
        }
        remainingTime = seconds;
    } else {
        timeUnit = "TIME IS UP!";
        remainingTime = '';
    }

    if ((timeUnit == "minute" || timeUnit == "minutes") && remainingTime <= 5) {
        $('#js-timer').css('background-color', 'orange');
    }

    if ((timeUnit == "second" || timeUnit == "seconds") && remainingTime <= 59) {
        $('#js-timer').css('background-color', 'red');
    }


    $('.time-remaining-time').html(remainingTime);
    if (timeUnit != "TIME IS UP!") {
        timeUnit += ' remaining';
    }
    $('.time-remaining-text').html(timeUnit);

    if (secs > 0) {
        window.jsTimeout = window.setTimeout(function() {
            countDown(secs - 1);
        }, refresh);
    }
}