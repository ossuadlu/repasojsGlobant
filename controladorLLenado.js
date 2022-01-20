// arreglo de objetos

let productos=[

    {nombre:"Aguardiente tapa roja", 
    tamaño: "1/2 Botella", 
    precio:200000, 
    foto:"img/foto3.jpg"
},
    {nombre:"Aguardiente tapa azul", 
    tamaño: " 1 Botella", 
    precio:220000, 
    foto:"img/foto4.jpg"
},
    {nombre:"Tequila don julio",
    tamaño: "1 Botella", 
    precio:300000, 
    foto:"img/foto5.jpg"
},
    {nombre:"cerveza Aguila", 
    tamaño: "1 Botella",
    precio:8000, 
    foto:"img/foto6.jpg"
},
    {nombre:"Cerveza pilsen", 
    tamaño: "1 Botella", 
    precio:7000, 
    foto:"img/foto7.jpg"
},
    {nombre:"Ron medellin", 
    tamaño: "1/2 Botella", 
    precio:220000, 
    foto:"img/foto8.jpg"},

    {nombre:"Ron añejo 220 de Caldas", 
    tamaño: "1/2 Botella", 
    precio:100000, 
    foto:"img/foto9.jpg"},

    {nombre:"Agua", 
    tamaño: "1 Botella", 
    precio:4000, 
    foto:"img/foto10.jpg"},

    {nombre:"Soda", 
    tamaño: "1 Botella", 
    precio:6000, 
    foto:"img/foto11.jpg"},

    {nombre:"Gatorade", 
    tamaño: "1 Botella", 
    precio:9000, 
    foto:"img/foto12.jpg"}

]

let productos2=[1,2,3,4,5,6,7,8,9,10]

// crear una referencia a la etiqueta

let fila=document.getElementById("fila")

//recorrer el arreglo y sacarle copia a la informacion que hay dentro

productos.forEach(function (producto){
  
   let columna=document.createElement("div")
   columna.classList.add("col")
   let tarjeta=document.createElement("div")
   tarjeta.classList.add("card")
   tarjeta.classList.add("h-100")
   let imagen=document.createElement("img")
   imagen.classList.add("card-img-top")
   imagen.classList.add("h-50")
  
   imagen.src=producto.foto

   let nombreProducto=document.createElement("h4")
   nombreProducto.textContent=producto.nombre

   let tamañoProducto=document.createElement("h5")
   tamañoProducto.textContent=producto.tamaño

   let preciogit statusProducto=document.createElement("h6")
   precioProducto.textContent=producto.precio

   tarjeta.appendChild(imagen)
   tarjeta.appendChild(nombreProducto)
   tarjeta.appendChild(tamañoProducto)
   tarjeta.appendChild(precioProducto)

   columna.appendChild(tarjeta)
   fila.appendChild(columna)

})

