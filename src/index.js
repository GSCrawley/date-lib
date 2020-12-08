import { format } from 'path';

class DL {
  constructor(...args) {
    this.date = new Date(...args);
    this.months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December',
    ];
    this.mnthShrt = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
  }

  get year() {
    return this.date.getFullYear();
  }

  get shortYear() {
    return this.date.getFullYear().toString().slice(2);
  }

  get month() {
    const monthIn = this.date.getMonth();
    return this.months[monthIn]
  }

  get monthShrt() {
    const monthIn = this.date.getMonth(); // get the month index
    return this.mnthShrt[monthIn];
  }

  get day() {
    return this.date.getDate();
  }

  get hours() {
    return this.date.getHours();
  }

  get mins() {
    return this.date.getMinutes();
  }

  get secs() {
    return this.date.getSeconds();
  }

  get dayPad() {
    const { day } = this;
    if (day < 10) {
      return `0${day.toString()}`;
    }
    return day;
  }

  get hoursPad() {
    if (this.hours < 10) {
      return `0${this.hours.toString()}`;
    }
    return this.hours;
  }

  get minsPad() {
    if (this.mins < 10) {
      return `0${this.mins.toString()}`;
    }
    return this.mins;
  }

  get secsPad() {
    if (this.secs < 10) {
      return `0${this.secs.toString()}`;
    }
    return this.secs;
  }

  format(str = null) {
    const unmask = {
      Y: this.year,
      y: this.shortYear,
      M: this.month,
      m: this.monthShrt,
      D: this.day_pad,
      d: this.day,
      H: this.hours_pad,
      h: this.hours,
      i: this.mins_pad,
      I: this.mins,
      S: this.secs_pad,
      s: this.secs,
    };

    if (str == null) {
      return `${unmask.Y} ${unmask.M} ${unmask.D}`;
    }

    let result = '';
    //  loop over the string and 
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (ch in unmask) {
        result += unmask[ch];
      } else {
        result += ch;
        //  else append the ch
      }
    }
    return result;
  }

  when() {
    const curr = new Date();
    let diff = curr.getTime() - this.date.getTime();
    //  check if there is no difference
    if (diff === 0) {
      return 'now';
    }
    //  check if there is a seconds difference
    //  calculate seconds
    diff /= 1000;
    if (Math.abs(diff) <= 44) {
      return `a few seconds ${diff < 0 ? 'from now' : 'ago'}`;
    }

    if (Math.abs(diff) === 44) {
      return `${Math.abs(diff).toFixed(0)} seconds ${diff < 0 ? 'from now' : 'ago'}`;
    }

    if (Math.abs(diff) >= 44 && Math.abs(diff) <= 89) {
      return `a minute ${diff < 0 ? 'from now' : 'ago'}`;
    }

    // calculate minute
    diff /= 60;
    if (Math.abs(diff) >= 1.5 && Math.abs(diff) <= 44) {
      return `${Math.abs(diff).toFixed(0)} minutes ${diff < 0 ? 'from now' : 'ago'}`;
    }

    // an hour
    if (Math.abs(diff) > 44 && Math.abs(diff) <= 89) {
      return `an hour ${diff < 0 ? 'from now' : 'ago'}`;
    }

    // calculate hour
    diff /= 60;
    if (Math.abs(diff) > 1.5 && Math.abs(diff) <= 21) {
      return `${Math.abs(diff).toFixed(0)} hours ${diff < 0 ? 'from now' : 'ago'}`;
    }

    // a day
    if (Math.abs(diff) > 21 && Math.abs(diff) <= 35) {
      return `a day ${diff < 0 ? 'from now' : 'ago'}`;
    }

    //  calculate days
    diff /= 24;
    if (Math.abs(diff) > 1.6 && Math.abs(diff) <= 25) {
      return `${Math.abs(diff).toFixed(0)} days ${diff < 0 ? 'from now' : 'ago'}`;
    }

    // a month
    if (Math.abs(diff) > 25 && Math.abs(diff) < 45) {
      return `a month ${diff < 0 ? 'from now' : 'ago'}`;
    }

    // calculate months

    diff /= 30;
    if (Math.abs(diff) >= 1.4 && Math.abs(diff) <= 10.5) {
      return `${Math.abs(diff).toFixed(0)} months ${diff < 0 ? 'from now' : 'ago'}`;
    }
    // year

    diff /= 12;
    return `${Math.abs(diff).toFixed(0)} year${  Math.abs(diff) < 1.5 ? ' ': 's '  }${diff < 0 ? `from now`: `ago`}`
  }
}

export default DL;

// const bday = new DL(1973,7,15,11,7,9)
// console.log(bday)
// console.log(bday.year)
  
// const f = d.format('Y/M/D')
// console.log(f)

//     console.log(d.year)
//     console.log(d.shortYear) 
//     console.log(d.month)
//     console.log(d.monthShrt)
//     console.log(d.day)
//     console.log(d.hours)
//     console.log(d.mins)
//     console.log(d.secs)

//     console.log(d.format('y/m/D'))
//     console.log(d.format('Y/M/D'))
//     console.log(d.format('Y/m/D/H/i/S')}