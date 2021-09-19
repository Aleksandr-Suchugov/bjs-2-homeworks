class AlarmClock {
    constructor () {
        this.alarmCollection = [],
        this.timerId = undefined
    }
    addClock(time, callback, id) {
        try {
            if (typeof id === 'undefined') {
                throw new Error('error text');
            }
            else if (typeof this.alarmCollection.find(id => clock.id === id) === 'undefined') {
                return console.error('The Alert already exist.');
            }
        }
        finally {
            return this.alarmCollection.push({id, time, callback});
        }
    }
    removeClock (id) {
        let inputArrLength = this.alarmCollection.length;
        let outputArrLength = this.alarmCollection.filter(clock => clock.id !== id).length;
        return (outputArrLength < inputArrLength) ? true : false;
    }
    getCurrentFormattedTime () {
        let actualTime = new Date.now();
        return actualTime.getHours() + ':' + actualTime.getMinutes();
    }
    start () {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
                return clock.callback;
            }
        }
        if (typeof this.timerId === 'undefined') {
            this.timerId = setInterval(() => {
                let callIndex = 0;
                checkClock(this.alarmCollection[callIndex]);
                callIndex ++;
            }, 1000);
        }
        return;
    }
    stop () {
        if (typeof this.timerId !== 'undefined') {
            clearInterval(this.timerId);
            return delete this[timerId];
        }
        return;
    }
    printAlarms () {
        return console.log(this.alarmCollection.forEach(clock => clock.id, clock.time));
    }
    clearAlarms () {
        this.stop();
        return this.alarmCollection.forEach(clock => delete clock);
    }
}

//Sample:

let PhoneClock = new AlarmClock();
PhoneClock.addClock('00:20', () => console.log ('New week!'), 1);
PhoneClock.addClock('00:21', () => console.log ('New week!!!'), 2);
PhoneClock.removeClock(2);
PhoneClock.addClock('00:22', () => console.log ('Go sleep'), 3);
PhoneClock.stop();
PhoneClock.printAlarms();