class D {
    constructor(...args) {
      this.date = new Date(...args)
    }

    get year() {
        return this.date.getFullYear();
        }
    
    get shortYear() {
        const yearStr = this.year().toString();
        const slicedYear = yearStr.slice(2, yearStr.length);
        
        return Number(slicedYear);
        }

    get month() {
        this.monthMap = [{1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'}]
        const month = this.monthMap[this.date.getMonth()];
        return month;
        }
    
    
}
    const d = new D('8/15/1973')
    const e = new D(1975, 1, 29)
    

    console.log(d)
    console.log(d.year)
    console.log(e)
    console.log(d.month(1))