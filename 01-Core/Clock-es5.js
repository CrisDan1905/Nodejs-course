'use strict'

const Clock = (function() {

    const EventEmitter = require('events').EventEmitter;

    class Clock extends EventEmitter {


        setClock() {

            setInterval(() => {
                this.emit('tictac');
            }, 1000);

        }

        theTime() {
            let date = new Date(),
                hrsAmPm = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
                hrs = this.addZero( hrsAmPm ),
                min = this.addZero( date.getMinutes() ),
                sec = this.addZero( date.getSeconds() ),
                ampm = date.getHours() < 12 ? 'am' : 'pm',
                msg = `${hrs}:${min}:${sec}${ampm}`
                
                console.log(msg);
        }

        addZero(num) {
            return (num < 10 ? '0' + num : num);
        }
    }

    return Clock

})()

module.exports = Clock;



