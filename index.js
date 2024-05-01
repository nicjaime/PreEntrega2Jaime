
class ListaDeCompras {
    constructor (producto, cantidad, precio) {
        this.producto = producto
        this.cantidad = cantidad
        this.precio = precio
        this.comprado =false
    }

precioOferta (){
    this.precio = this.precio * 0.9
}
comprar(){
    this.comprado = true
}

}
//agregando productos al carrito
const producto1 = new ListaDeCompras("arroz", 2, 25)
const producto2 = new ListaDeCompras("carne",1,450)

producto1.precioOferta();  //aplicando oferta
producto1.comprar();       //comprar producto

console.log(producto1)

producto2.precioOferta();
producto2.comprar();

console.log(producto2)



// Pedir al usuario que alija los productos y los ponga en el carrito con un limite de 5 productos

let cantidadpermitida = 5;
let elegirproductos= [];

do{
    let sumarproductos = prompt("ingrese sus productos aqui");
    elegirproductos.push(sumarproductos);
    console.log(elegirproductos.length);
}while(elegirproductos.length !== cantidadpermitida)

// agregar compra obligatoria de dos productos mas al carrito
let totalcomprados= elegirproductos.concat (["bombones", "chocolates"]);

alert("productos seleccionados:" + totalcomprados.join("-")); 



//agrego a un carrito los productos con PUSH y aplico descuento a cada uno con FOR ..OF

class Compras {
    constructor (ingrediente, gramos, costo) {
        this.ingrediente = ingrediente
        this.gramos = gramos
        this.costo = parseFloat(costo);
        this.sumado =false
    }
preciodescuento (){
    this.costo = this.costo * 0.9;
}
sumar(){
    this.sumado = true
}
}

const productos = [];
productos.push (new Compras("manteca",20,25));
productos.push (new Compras("papas", 200, 30));
productos.push (new Compras("fideos",120,45));
productos.push(new Compras("queso",150,200));

for (const Compras of productos)
Compras.preciodescuento()

console.log(productos)

for (const Compras of productos);
Compras.sumar()

console.log(productos);

//// LISTA DE EMPLEADOS

const empleados = [
        {nomre: "cecilia",puesto: "moza", sueldo:600},
        {nombre: "juan",puesto: "barista", sueldo:750},
        {nombre:"solana", puesto: "cajera", sueldo:800},
        {nombre:"valeria", puesto: "supervisora",sueldo: 980}
]

function soloempleadosfijos (fijos){
return fijos.sueldo >= 800;
}

let empleadosfijos = empleados.filter(soloempleadosfijos)
console.log(empleadosfijos);

//

function supervisoresasignado (asignado){
    return asignado.puesto === "supervisor" || "supervisora"
}

let supervisor = empleados.some(supervisoresasignado)
console.log(supervisor);

// sueldos de mayor a menor

empleados.sort((a,b)=>{
    if (a.sueldo < b.sueldo){
        return 1;
    }
    if (a.sueldo > b.sueldo) {
        return -1;
    }
    return 0;
}
)
console.log(empleados);



///funcion para crear personajes de un juego de lucha de forma aleatoria

class personaje {
    constructor (nombre){
        this.nombre = nombre;
        this.vidas = Math.ceil(Math.random()*10);
        this.ataques =Math.ceil(Math.random()*15 +5);
    }
}

//creamos personajes

let personaje1 = new personaje ("sonic");
let personaje2 = new personaje ("mastic");
let personaje3 = new personaje ("gregor");

//imprimo los personajes

console.log(`personaje 1: ${personaje1.nombre},vidas:${personaje1.vidas}, ataques: ${personaje1.ataques}`);
console.log(`personaje 2: ${personaje2.nombre},vidas:${personaje2.vidas}, ataques: ${personaje2.ataques}`);
console.log(`personaje 3: ${personaje3.nombre}, vidas:${personaje3.vidas},ataques:${personaje3.ataques}`);

