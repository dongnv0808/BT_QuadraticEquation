"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuadraticEquation = void 0;
class QuadraticEquation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get A() {
        return this.a;
    }
    get B() {
        return this.b;
    }
    get C() {
        return this.c;
    }
    getInputQuadraticEquation() {
        return `${this.A}x^2 + ${this.B}x + ${this.C} = 0`;
    }
    getDiscriminant() {
        return this.B * this.B - (4 * this.A * this.C);
    }
    getRoot1() {
        return ((-this.B) - Math.sqrt(this.getDiscriminant())) / 2 * this.A;
    }
    getRoot2() {
        return ((-this.B) + Math.sqrt(this.getDiscriminant())) / 2 * this.A;
    }
}
exports.QuadraticEquation = QuadraticEquation;
