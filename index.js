class D {
    constructor(date) {
        if(arguments.length === 0) this.date = new Date()
        else if(date instanceof Date) this.date = new Date(date)
    }
}