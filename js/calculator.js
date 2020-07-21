const MONEDAS = [0, 0, 20, 35, 75, 140, 290, 480, 800, 1250, 0]
const PUNTOS_DE_FUERZA = [0, 0, 20, 30, 50, 80, 130, 210, 340, 550, 0]

class Calculadora{
    
    constructor(){

        const NIVEL_BRAWLER = document.getElementById("Level").value;
        const NIVEL_DESEADO = document.getElementById("Desired").value;
        let totalMonedas = this.calcularMonedas(NIVEL_BRAWLER, NIVEL_DESEADO);
        let totalPuntos = this.calcularPuntos(NIVEL_BRAWLER, NIVEL_DESEADO);        
        
        console.log(`Monedas necesarias: ${totalMonedas}`)
        console.log(`Puntos necesarios: ${totalPuntos}`)

        swal({
            icon: "success",
            title: `Resultados`,
            text: `Para pasar de fuerza ${NIVEL_BRAWLER} a fuerza ${NIVEL_DESEADO}, tu brawler necesita:

                   🟡 Monedas necesarias: ${totalMonedas} 
                   🟣 Puntos necesarios: ${totalPuntos}`,
                               
        })

    }
    
    calcularMonedas(NIVEL_BRAWLER, NIVEL_DESEADO){
        var totalMonedas = 0;
    
        for (let nivel = parseInt(NIVEL_BRAWLER) + 1; nivel <= NIVEL_DESEADO ; nivel++) { //Se suma 1 porque sino se contaría las monedas del nivel actual del brawler
           
             totalMonedas = totalMonedas + MONEDAS[nivel];
            
        }
        return(totalMonedas);
    }
    
    calcularPuntos(NIVEL_BRAWLER, NIVEL_DESEADO){
        var totalPuntos = 0;
    
        for (let nivel = parseInt(NIVEL_BRAWLER) + 1; nivel <= NIVEL_DESEADO ; nivel++) { //Se suma 1 porque sino se contaría los puntos del nivel actual del brawler
           
             totalPuntos = totalPuntos + PUNTOS_DE_FUERZA[nivel];
            
        }
        return(totalPuntos)
    }

}

function calcular(){
   window.calculadora = new Calculadora();
}