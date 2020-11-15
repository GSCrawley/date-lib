// challenge 1

class DL {
  constructor(...args) {
    this.date = new Date(...args)
    this.months = [
      'January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'
    ]
    this.monthShrt = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
  }

  get year() {
    return this.date.getFullYear();
      }
    
  get shortYear() {
    return this.date.getFullYear().toString().slice(2)
    }

}
const d = new DL(1973,8,15)
  console.log(d.year)
  console.log(d.shortYear)

    // get month() {
    //     this.monthMap = [{1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'}]
    //     const month = this.monthMap[this.date.getMonth()];
    //     return month;
    //     }
    
    //     shortMonth() {
    //         const month = this.month();
    //         return month.slice(0, 3);
    //         }
        
    //     day() {
    //         return this.date.getUTCDate();
    //         }
        
    //     longDay() {
    //         const day = this.day();
            
    //         if (day < 10) {
    //             return `0${day}`;
    //         }
            
    //         return String(day);
    //         }    
        
    //     hours() {
    //         return this.date.getHours();
    //         }
        
    //     longHours() {
    //         const hours = this.hours();
            
    //         if (hours < 10) {
    //             return `0${hours}`;
    //         }
            
    //         return String(hours);
    //         }
    
    //     minutes() {
    //         return this.date.getMinutes();
    //         }
                
    //     }
        
    // const d = new D('8/15/1973')
    // const e = new D(1975, 1, 29)
    

    // console.log(d)
    // console.log(d.year)
    // console.log(e)
    // console.log(d.month(1))