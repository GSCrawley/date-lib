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

  get month() {
    const monthIn = this.date.getMonth();
    return this.months[monthIn]
    }
   
    
   
  }

    const d = new DL(1973,8,15)
    console.log(d.year)
    console.log(d.shortYear) 
    console.log(d.month)
    // console.log(d)
    // console.log(d.year)
    // console.log(e)
    // console.log(d.month(1))