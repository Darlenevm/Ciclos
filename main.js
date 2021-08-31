class App {
    constructor(){
        console.log(this.s(10));
        console.log(this.e(10));
    }

    s(limite){
        let valor = 1;
        let cicloS = (4/valor);
        for(let i = 0; i <= limite; i++){
            if(i < limite){
                valor += 2
                cicloS -= (4/valor)
            }

            i++

            if(i < limite){
                valor += 2
                cicloS += (4/valor)
            }
        }
        return cicloS;
    }
    
    factorial(numero){
        let total = 1; 
        for (let i=1; i<=numero; i++) {
            total *= i; 
        }
        return total;
    }

    e(limite){
        let factorial = 1;
        let cicloE = 1;
        for(let i = 0; i <= limite; i++){
            cicloE += (1/(this.factorial(factorial)))
            if(factorial < limite){
                factorial ++
            }
        }
        return cicloE;

    }
    

}
 new App();

