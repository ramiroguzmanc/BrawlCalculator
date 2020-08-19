const MONEDAS = [0, 0, 20, 35, 75, 140, 290, 480, 800, 1250, 0];
const PUNTOS_DE_FUERZA = [0, 0, 20, 30, 50, 80, 130, 210, 340, 550, 0];

class Calculadora {
  constructor() {
    
    const NIVEL_BRAWLER = parseInt(document.getElementById("Level").value);
    const NIVEL_DESEADO = parseInt(document.getElementById("Desired").value);

    if (NIVEL_DESEADO <= NIVEL_BRAWLER) {
        this.imprimirError()
    } else {
      let totalMonedas = this.calcularMonedas(NIVEL_BRAWLER, NIVEL_DESEADO);
      let totalPuntos = this.calcularPuntos(NIVEL_BRAWLER, NIVEL_DESEADO);

      console.log(`Monedas necesarias: ${totalMonedas}`);
      console.log(`Puntos necesarios: ${totalPuntos}`);

      this.imprimirResultado(totalMonedas, totalPuntos, NIVEL_BRAWLER, NIVEL_DESEADO);
    }
  }

  calcularMonedas(NIVEL_BRAWLER, NIVEL_DESEADO) {
    return MONEDAS
      .slice(NIVEL_BRAWLER + 1, NIVEL_DESEADO + 1) // Se suma 1 en cada uno porque sino se incluye el costo del nivel actual y no se toma el último
      .reduce((acum, vlrev) => acum + vlrev);
  }

  calcularPuntos(NIVEL_BRAWLER, NIVEL_DESEADO) {
    return PUNTOS_DE_FUERZA
                           .slice(NIVEL_BRAWLER + 1, NIVEL_DESEADO + 1) // Se suma 1 en cada uno porque sino se incluye el costo del nivel actual y no se toma el último
                           .reduce((acum, vlrev) => acum + vlrev);
  }

  imprimirResultado(totalMonedas, totalPuntos, NIVEL_BRAWLER, NIVEL_DESEADO) {
    swal({
      icon: "success",
      title: `Resultados`,
      text: `Para pasar de fuerza ${NIVEL_BRAWLER} a fuerza ${NIVEL_DESEADO}, tu brawler necesita:

                   🟡 Monedas necesarias: ${totalMonedas} 
                   🟣 Puntos necesarios: ${totalPuntos}`,
    });
  }

  imprimirError(){
    swal({
        icon: 'error',
        title: 'Oops...',
        text: 'El nivel deseado no puede ser menor o igual al actual!',
      })
  }

}

function calcular() {
  window.calculadora = new Calculadora();
}
