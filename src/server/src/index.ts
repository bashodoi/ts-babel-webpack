import cleanNumber from "lib/Number";
import greeting from "~common/Test";

export class C {

    private x: number;

    constructor(num: string){
        this.x = cleanNumber(num);
    }
    getX = () => this.x;
    setX = (newVal: number) => { this.x = newVal; }
}

const numberString = "10cccx";
export let x = new C(numberString);
export let y = { ...{ some: "value" } }
console.log(`${greeting(`poopyface`)} your number is ${x.getX()}`);