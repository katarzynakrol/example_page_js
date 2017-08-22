"use strict";

var setupClock = function () {
    var now = new Date();
    var secs = now.getSeconds();
    var mins = now.getMinutes() * 60;
    var hours = now.getHours() * 3600;

    var secondsHand = document.querySelector('.seconds');
    var minutesHand = document.querySelector('.minutes');
    var hoursHand = document.querySelector('.hours');

    secondsHand.style.animationDelay = '-' + secs + 's';
    minutesHand.style.animationDelay = '-' + mins + 's';
    hoursHand.style.animationDelay = '-' + hours + 's';
}

setupClock();


var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + " dni " + '<br>' + hours + " godź. " +
        minutes + " min. " + seconds + " sek. ";

}, 1000);