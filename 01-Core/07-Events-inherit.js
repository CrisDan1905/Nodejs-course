'use strict'

const EventEmitter = require('events').EventEmitter;

class Clock extends EventEmitter {

    setClock() {

        setInterval(() => {
            this.emit('tictac');
        }, 1000);

    }

    theTime() {
        let date = new Date(),
            hrs = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            msg = `${hrs}:${min}:${sec}`
            console.log(msg);
    }
}

const cucu = new Clock();

cucu.setClock();
cucu.on('tictac', ()=>cucu.theTime());