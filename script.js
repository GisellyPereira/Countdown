const natal = new Date("dec 24, 2022 23:59:59").getTime();

const tempoParaONatal = setInterval(function () {

        const now = new Date().getTime();
        const t = natal - now;
        const days = getTime('day', t);
        const hours = getTime('hour', t);
        const minutes = getTime('minute', t);
        const seconds = getTime('second', t);
        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
        if (t < 0) {
                clearInterval(tempoParaONatal);
                document.getElementById("day").innerHTML = '0';
                document.getElementById("hour").innerHTML = '0';
                document.getElementById("minute").innerHTML = '0';
                document.getElementById("second").innerHTML = '0';
        }
}, 1000);


function getTime(type, time) {
        let result;
        switch (type) {
                case 'day':
                        result = Math.floor(time / (1000 * 60 * 60 * 24));
                        break;
                case 'hour':
                        result = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        break;
                case 'minute':
                        result = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
                        break;
                case 'second':
                        result = Math.floor((time % (1000 * 60)) / 1000);
                        break;
                default:
                        result = '00';
                        break;
        }

        return convertNumber(result);
}


function convertNumber(number) {
        if (number < 10) {
                number = '0' + number;
        }
        return number;
}
