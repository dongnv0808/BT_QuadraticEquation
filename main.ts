import { QuadraticEquation } from "./Quadratic_Equation";

let quadraticEquation = new QuadraticEquation(6, 6, 6);

function solveQuadraticEquation(){
    console.log(quadraticEquation.getInputQuadraticEquation());
    if(quadraticEquation.getDiscriminant() > 0){
        console.log(`Phuong trình có 2 nghiệm x1 = ${quadraticEquation.getRoot1()} và x2 = ${quadraticEquation.getRoot2()}`)
    }else if(quadraticEquation.getDiscriminant() == 0){
        console.log(`Phương trình có nghiệm kép x1 = x2 = ${-(quadraticEquation.B / 2 * quadraticEquation.A)}`)
    }else{
        console.log(`The equation has no roots`);
    }
}
solveQuadraticEquation();