export class ErrorException {

    constructor(public _timestamp?:Date, public _status?:Number, public _error?:Text , public _exception?:Text, public _message?:Text, public _path?:string)
    {

    }

}