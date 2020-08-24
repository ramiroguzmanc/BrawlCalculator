const LEVEL_COST = [
                    {Level: 1, Coins: 0, Power_points: 0},         
                    {Level: 2, Coins: 20, Power_points: 20},          
                    {Level: 3, Coins: 35, Power_points: 30},         
                    {Level: 4, Coins: 75, Power_points: 50},         
                    {Level: 5, Coins: 140, Power_points: 80},
                    {Level: 6, Coins: 290, Power_points: 130},
                    {Level: 7, Coins: 480, Power_points: 210},
                    {Level: 8, Coins: 800, Power_points: 340},
                    {Level: 9, Coins: 1250, Power_points: 550},
                    {Level: 10, Coins: 0, Power_points: 0}
                  ];         

class Calculator {
  constructor() {
    
    const BRAWLER_LEVEL = parseInt(document.getElementById("Level").value);
    const DESIRED_LEVEL = parseInt(document.getElementById("Desired").value);

    if (DESIRED_LEVEL <= BRAWLER_LEVEL) {
        this.printError()
    } else {

       let totalCost = this.calculateCost(BRAWLER_LEVEL, DESIRED_LEVEL)

       this.imprimirResultado(totalCost, BRAWLER_LEVEL, DESIRED_LEVEL);
    }
  }

  calculateCost(BRAWLER_LEVEL, DESIRED_LEVEL) {
    let total_coins =  LEVEL_COST
                                 .slice(BRAWLER_LEVEL, DESIRED_LEVEL)    
                                 .reduce((acum, valev) => acum + valev.Coins, 0)
    let total_pp =  LEVEL_COST
                                 .slice(BRAWLER_LEVEL, DESIRED_LEVEL)    
                                 .reduce((acum, valev) => acum + valev.Power_points, 0)
  
    return {total_coins, total_pp}                                 
  }

  imprimirResultado(totalCost, BRAWLER_LEVEL, DESIRED_LEVEL) {
    swal({
      icon: "success",
      title: `Resultados`,
      text: `Para pasar de fuerza ${BRAWLER_LEVEL} a fuerza ${DESIRED_LEVEL}, tu brawler necesita:

                   🟡 Monedas necesarias: ${totalCost.total_coins} 
                   🟣 Puntos necesarios: ${totalCost.total_pp}`,
    });
  }

  printError(){
    swal({
        icon: 'error',
        title: 'Oops...',
        text: 'El nivel deseado no puede ser menor o igual al actual!',
      })
  }

}

function calculate() {
  window.calculator = new Calculator();
}
