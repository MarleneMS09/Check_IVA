//Imagina que has salido a comer con tus cuatro mejores amigas. 
//La cuenta total del consumo es de 50 dólares,
// pero a eso debes agregarle el 10% de Impuesto al Valor Agregado (IVA). 
//Quieres dividir la cuenta equitativamente entre las cinco. Para eso vamos a crear este programa.
//El ejercicio incluye un boilerplate (plantilla) que ya incluye una función (restaurantBill), 
//la cual espera recibir un argumento (bill) con el monto de la cuenta antes de impuestos (un número), 
//y espera que retornemos un string con la cantidad que le toca pagar a cada una
// ya teniendo en cuenta el 10% de impuestos (e incluyendo el símbolo de dólar).

//Sigue los pasos a continuación para completar la implementación de la función restaurantBill.

//1-Asigna el resultado de multiplicar bill por 10% en la variable tax (impuesto en inglés).
// Tip: 10% en decimal se escribe 0.1.
  const restaurantBill = (bill) => {
    const tax = (bill * 0.1); /* Valor del 10% de la factura */
    //2-  Crea una variable llamada total y asígnale el resultado de sumar bill más tax.
    const total = bill + tax; // Valor total de la factura con el impuesto
  
  
  //3-Retorna el monto que cada una debe pagar (total divido entre 5), con el símbolo $ adelante 
  //(por ejemplo: $11). Tip: puedes usar concatenación de strings (o string literals)
  // para crear un string con el número y el símbolo $ adelante.
    return `$${total / 5}`;/* ??? */
  };
  
  
  module.exports = restaurantBill;