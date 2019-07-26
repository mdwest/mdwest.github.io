class ShowPopup {
    constructor(userData,lifeTime = null) {
        this.lifeTime = lifeTime;
        this.convertedUserData = this.convertUserData(userData);
        this.popUpWindow = document.querySelector('.popup-window');
        this.popUpClose = document.querySelector('.popup-close');
        this.offsetTimeZoneMinutes = -180;
    }
    
    convertUserData() {
        let convertedUserData =[];
        arguments[0].forEach(function(obj,i){
             convertedUserData[i] ={};
             convertedUserData[i].days = [];
             convertedUserData[i].hours = [];
             obj.days.forEach((day)=>{
                if (day == 'Monday') {
                    convertedUserData[i].days.push(1);
                }
                if (day == 'Tuesday') {
                    convertedUserData[i].days.push(2);
                }
                if (day == 'Wednesday') {
                    convertedUserData[i].days.push(3);
                }
                if (day == 'Thursday') {
                    convertedUserData[i].days.push(4);
                }
                if (day == 'Friday') {
                    convertedUserData[i].days.push(5);
                }
                if (day == 'Saturday') {
                    convertedUserData[i].days.push(6);
                }
                if (day == 'Sunday') {
                    convertedUserData[i].days.push(7);
                }
            });
    
            obj.hours.forEach((hour)=>{
                if (hour.charAt( hour.length - 2 ) == 'a' ) {
                    convertedUserData[i].hours.push(parseInt(hour));
                } else if (hour.charAt( hour.length - 2 ) == 'p' ) {
                    convertedUserData[i].hours.push(parseInt( hour ) + 12 );
                }
            });
        });
        return convertedUserData;
    }


    getCurrentWeekDay() {
        let now = this.getCurrentDate() 
        return now.getDay();
    }

    getCurrnetHour() {
        let now = this.getCurrentDate() 
        return now.getHours();
    }

    getCurrentMinute() {
        let now = this.getCurrentDate() 
        return now.getMinutes();
    }

    getCurrentDate() {
        let dateCurrentTimeZone = new Date();
        let dateOffsetMs = dateCurrentTimeZone.getTimezoneOffset()*60*1000;
        let dateOfGivenTimeZone = new Date(Date.now() + dateOffsetMs + this.offsetTimeZoneMinutes*60*1000 );
        return dateOfGivenTimeZone;

    }

    checkCurrentDate(){
        let currentDay = this.getCurrentWeekDay();
        let currentHour = this.getCurrnetHour();
        let fullCoincidience = false;
        this.convertedUserData.forEach((userDate)=>{
            let dayCoincidience = false;
            let hourCoincidience = false;
            userDate.days.forEach((userDay)=>{
                if (userDay == currentDay) {
                    dayCoincidience = true;
                    return
                }
            });

            userDate.hours.forEach((userHour)=>{
                if (userHour == currentHour) {
                    hourCoincidience = true;
                    return
                }
            });

            if (dayCoincidience && hourCoincidience) {
                fullCoincidience = true;
            }
        });
        return fullCoincidience;
    }

    openPopUp() {
        this.popUpWindow.style.display = 'block';
        setTimeout(()=>{
            this.popUpWindow.style.opacity = 1;
        }, 100);
        if (typeof this.lifeTime == 'number') {
            this.closePopup();
        }
    }

    closePopup() {
        setTimeout(()=>{
            this.popUpWindow.style.opacity = 0;
            setTimeout(()=>{
                this.popUpWindow.style.display = 'none';
            }, 800);
        }, this.lifeTime*1000);
    }

    setListeners() {
        this.popUpClose.addEventListener('click',()=>{
            this.popUpWindow.style.opacity = 0;
            setTimeout(()=>{
                this.popUpWindow.style.display = 'none';
            }, 800);
        });
    }

    runPopUp() {
        this.setListeners();
        setInterval(()=>{
            if (this.checkCurrentDate()){
                this.openPopUp();
            }
        }, 1000);
    } 
}

let CyclicalModal = new ShowPopup([
    {
       days: ['Monday'],
       hours: [
           '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am',
           '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'
        ]
    },
    {
        days: ['Tuesday'],
        hours: [
            '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am',
            '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'
         ]
     },
     {
        days: ['Wednesday'],
        hours: [
            '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am',
            '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'
         ]
     },
     {
        days: ['Thursday'],
        hours: [
            '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am',
            '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'
         ]
     },
     {
        days: ['Friday'],
        hours: [
            '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am',
            '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'
         ]
     },
     {
        days: ['Saturday'],
        hours: [
            '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am',
            '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'
         ]
     },
     {
        days: ['Sunday'],
        hours: [
            '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am',
            '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'
         ]
     }
],null);

CyclicalModal.runPopUp();





