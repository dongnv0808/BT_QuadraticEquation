export class QuadraticEquation{
    a: number;
    b: number;
    c: number;
    constructor(a: number, b: number, c: number){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get A(): number{
        return this.a;
    }
    get B(): number{
        return this.b;
    }
    get C(): number{
        return this.c;
    }
    getInputQuadraticEquation(): string{
        return `${this.A}x^2 + ${this.B}x + ${this.C} = 0`
    }
    getDiscriminant(): number{
        return this.B * this.B - (4 * this.A * this.C);
    }
    getRoot1(): number{
        return ((-this.B) - Math.sqrt(this.getDiscriminant()))/2*this.A;
    }
    getRoot2(): number{
        return ((-this.B) + Math.sqrt(this.getDiscriminant()))/2*this.A;
    }
}