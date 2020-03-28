export class personModel {
    constructor(name,age)
    {
        this.name = name
        this.age = age
    }

    get myName(){
        return this.name
    }

    conlog(logTarget){
        console.log(logTarget)
    }
}
