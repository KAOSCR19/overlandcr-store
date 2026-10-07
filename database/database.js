// ==========================================================
// PROYECTO: Overland Store
// BASE DE DATOS: overland_store
// DESCRIPCIÓN:
// Base de datos para una tienda de accesorios 4x4 y overlanding.
// ==========================================================


// Selecciona la base de datos que se utilizará en el proyecto.
use("overland_store");


// ==========================================================
// COLECCIÓN: marcas
// ==========================================================


// Inserta una marca.
db.marcas.insertOne({
    nombre: "ARB",
    pais: "Australia",
    activo: true
});


// Inserta varias marcas.
db.marcas.insertMany([
    {
        nombre: "WARN",
        pais: "Estados Unidos",
        activo: true
    },
    {
        nombre: "Ironman 4x4",
        pais: "Australia",
        activo: true
    },
    {
        nombre: "MAXTRAX",
        pais: "Australia",
        activo: true
    },
    {
        nombre: "Rhino-Rack",
        pais: "Australia",
        activo: true
    },
    {
        nombre: "Smittybilt",
        pais: "Estados Unidos",
        activo: true
    }
]);


// Actualiza el país de la marca Smittybilt.
db.marcas.updateOne(
    { nombre: "Smittybilt" },
    {
        $set: {
            pais: "USA"
        }
    }
);


// Elimina la marca Smittybilt.
db.marcas.deleteOne(
    { nombre: "Smittybilt" }
);


// ==========================================================
// COLECCIÓN: productos
// ==========================================================


// Inserta un producto.
db.productos.insertOne({
    nombre: "Winch WARN VR EVO 10-S",
    categoria: "Recuperación",
    marca: {
        nombre: "WARN",
        pais: "Estados Unidos"
    },
    precio: 485000,
    stock: 8,
    descripcion: "Winch eléctrico de 10000 libras con cuerda sintética",
    vehiculoUniversal: true,
    activo: true
});


// Inserta varios productos.
db.productos.insertMany([
    {
        nombre: "Recovery Boards MAXTRAX MKII",
        categoria: "Recuperación",
        marca: {
            nombre: "MAXTRAX",
            pais: "Australia"
        },
        precio: 95000,
        stock: 14,
        descripcion: "Planchas de recuperación para arena, barro y terrenos difíciles",
        vehiculoUniversal: true,
        activo: true
    },
    {
        nombre: "Barra LED Ironman 4x4 22 pulgadas",
        categoria: "Iluminación",
        marca: {
            nombre: "Ironman 4x4",
            pais: "Australia"
        },
        precio: 135000,
        stock: 10,
        descripcion: "Barra LED para conducción nocturna y uso off-road",
        vehiculoUniversal: true,
        activo: true
    },
    {
        nombre: "Rack Rhino-Rack Pioneer",
        categoria: "Carga",
        marca: {
            nombre: "Rhino-Rack",
            pais: "Australia"
        },
        precio: 420000,
        stock: 6,
        descripcion: "Rack de techo para transporte de equipo y accesorios de overlanding",
        vehiculoUniversal: false,
        activo: true
    },
    {
        nombre: "Compresor ARB CKMA12",
        categoria: "Aire y neumáticos",
        marca: {
            nombre: "ARB",
            pais: "Australia"
        },
        precio: 215000,
        stock: 9,
        descripcion: "Compresor de aire de alto rendimiento para inflado de neumáticos",
        vehiculoUniversal: true,
        activo: true
    },
    {
        nombre: "Toldo lateral ARB 2.5 x 2.5",
        categoria: "Camping",
        marca: {
            nombre: "ARB",
            pais: "Australia"
        },
        precio: 185000,
        stock: 7,
        descripcion: "Toldo lateral para protección contra sol y lluvia",
        vehiculoUniversal: true,
        activo: true
    }
]);


// Actualiza el stock
db.productos.updateOne(
    { nombre: "Rack Rhino-Rack Pioneer" },
    {
        $set: {
            stock: 8
        }
    }
);


// Elimina el Toldo lateral ARB.
db.productos.deleteOne(
    { nombre: "Toldo lateral ARB 2.5 x 2.5" }
);


// ==========================================================
// COLECCIÓN: clientes
// ==========================================================


// Inserta un cliente.
db.clientes.insertOne({
    nombre: "Carlos Rodríguez",
    correo: "carlos@example.com",
    telefono: "8888-8888",
    provincia: "Cartago",
    vehiculos: [
        {
            marca: "Suzuki",
            modelo: "Grand Vitara",
            anio: 2000
        }
    ],
    activo: true
});


// Inserta varios clientes.
// Se crea arreglo de vehículos para cada cliente, ya que un cliente puede tener más de un vehículo.
db.clientes.insertMany([
    {
        nombre: "Andrea Mora",
        correo: "andrea.mora@example.com",
        telefono: "8777-1122",
        provincia: "San José",
        vehiculos: [
            {
                marca: "Toyota",
                modelo: "Hilux",
                anio: 2020
            }
        ],
        activo: true
    },
    {
        nombre: "Luis Jiménez",
        correo: "luis.jimenez@example.com",
        telefono: "8666-3344",
        provincia: "Alajuela",
        vehiculos: [
            {
                marca: "Nissan",
                modelo: "Frontier",
                anio: 2019
            }
        ],
        activo: true
    },
    {
        nombre: "María Fernández",
        correo: "maria.fernandez@example.com",
        telefono: "8555-7788",
        provincia: "Heredia",
        vehiculos: [
            {
                marca: "Mitsubishi",
                modelo: "Montero",
                anio: 2017
            },
            {
                marca: "Suzuki",
                modelo: "Jimny",
                anio: 2022
            }
        ],
        activo: true
    },
    {
        nombre: "José Vargas",
        correo: "jose.vargas@example.com",
        telefono: "8444-9900",
        provincia: "Cartago",
        vehiculos: [
            {
                marca: "Jeep",
                modelo: "Wrangler",
                anio: 2018
            }
        ],
        activo: true
    }
]);


// Actualiza el teléfono del cliente Andrea Mora.
db.clientes.updateOne(
    { nombre: "Andrea Mora" },
    {
        $set: {
            telefono: "8999-2233"
        }
    }
);


// Elimina el cliente José Vargas.
db.clientes.deleteOne(
    { nombre: "José Vargas" }
);


// ==========================================================
// COLECCIÓN: ventas
// ==========================================================


// Inserta una venta.
db.ventas.insertOne({
    fecha: new Date("2026-10-06"),
    cliente: {
        nombre: "Carlos Rodríguez",
        provincia: "Cartago"
    },
    productos: [
        {
            nombre: "Winch WARN VR EVO 10-S",
            marca: "WARN",
            cantidad: 1,
            precioUnitario: 485000,
            subtotal: 485000
        },
        {
            nombre: "Recovery Boards MAXTRAX MKII",
            marca: "MAXTRAX",
            cantidad: 2,
            precioUnitario: 95000,
            subtotal: 190000
        }
    ],
    metodoPago: "Tarjeta",
    total: 675000
});


// Inserta varias ventas.
db.ventas.insertMany([
    {
        fecha: new Date("2026-10-07"),
        cliente: {
            nombre: "Andrea Mora",
            provincia: "San José"
        },
        productos: [
            {
                nombre: "Barra LED Ironman 4x4 22 pulgadas",
                marca: "Ironman 4x4",
                cantidad: 1,
                precioUnitario: 135000,
                subtotal: 135000
            },
            {
                nombre: "Compresor ARB CKMA12",
                marca: "ARB",
                cantidad: 1,
                precioUnitario: 215000,
                subtotal: 215000
            }
        ],
        metodoPago: "SINPE",
        total: 350000
    },
    {
        fecha: new Date("2026-10-07"),
        cliente: {
            nombre: "Luis Jiménez",
            provincia: "Alajuela"
        },
        productos: [
            {
                nombre: "Recovery Boards MAXTRAX MKII",
                marca: "MAXTRAX",
                cantidad: 3,
                precioUnitario: 95000,
                subtotal: 285000
            }
        ],
        metodoPago: "Efectivo",
        total: 285000
    },
    {
        fecha: new Date("2026-10-08"),
        cliente: {
            nombre: "María Fernández",
            provincia: "Heredia"
        },
        productos: [
            {
                nombre: "Rack Rhino-Rack Pioneer",
                marca: "Rhino-Rack",
                cantidad: 1,
                precioUnitario: 420000,
                subtotal: 420000
            },
            {
                nombre: "Compresor ARB CKMA12",
                marca: "ARB",
                cantidad: 2,
                precioUnitario: 215000,
                subtotal: 430000
            }
        ],
        metodoPago: "Tarjeta",
        total: 850000
    },
    {
        fecha: new Date("2026-10-09"),
        cliente: {
            nombre: "Carlos Rodríguez",
            provincia: "Cartago"
        },
        productos: [
            {
                nombre: "Winch WARN VR EVO 10-S",
                marca: "WARN",
                cantidad: 1,
                precioUnitario: 485000,
                subtotal: 485000
            },
            {
                nombre: "Barra LED Ironman 4x4 22 pulgadas",
                marca: "Ironman 4x4",
                cantidad: 2,
                precioUnitario: 135000,
                subtotal: 270000
            }
        ],
        metodoPago: "Transferencia",
        total: 755000
    }
]);


// Actualiza el método de pago de la venta de Luis Jiménez.
db.ventas.updateOne(
    { "cliente.nombre": "Luis Jiménez" },
    {
        $set: {
            metodoPago: "SINPE"
        }
    }
);


// Elimina la venta de María Fernández del 08 de octubre de 2026.
db.ventas.deleteOne(
    {
        "cliente.nombre": "María Fernández",
        fecha: new Date("2026-10-08")
    }
);


// ==========================================================
// CONSULTAS
// ==========================================================


// CONSULTA 1:
// Obtiene la cantidad total vendida de cada producto en una fecha específica.
db.ventas.aggregate([
    {
        $match: {
            fecha: new Date("2026-10-07")
        }
    },
    {
        $unwind: "$productos"
    },
    {
        $group: {
            _id: "$productos.nombre",
            cantidadVendida: {
                $sum: "$productos.cantidad"
            }
        }
    },
    {
        $sort: {
            cantidadVendida: -1
        }
    }
]);


// CONSULTA 2:
// Obtiene la lista de todas las marcas que tienen al menos un producto registrado dentro de una venta.
db.ventas.aggregate([
    {
        $unwind: "$productos"
    },
    {
        $group: {
            _id: "$productos.marca"
        }
    },
    {
        $sort: {
            _id: 1
        }
    }
]);


// CONSULTA 3:
// Obtiene los productos que han sido vendidos, la cantidad total vendida de cada uno y el stock actual disponible en inventario.
db.ventas.aggregate([
    {
        $unwind: "$productos"
    },
    {
        $group: {
            _id: "$productos.nombre",
            cantidadVendida: {
                $sum: "$productos.cantidad"
            }
        }
    },
    {
        $lookup: {
            from: "productos",
            localField: "_id",
            foreignField: "nombre",
            as: "productoInfo"
        }
    },
    {
        $unwind: "$productoInfo"
    },
    {
        $project: {
            _id: 0,
            producto: "$_id",
            cantidadVendida: 1,
            stockRestante: "$productoInfo.stock"
        }
    },
    {
        $sort: {
            cantidadVendida: -1
        }
    }
]);


// CONSULTA 4:
// Obtiene las cinco marcas con mayor cantidad de unidades vendidas y ordena el resultado de mayor a menor.
db.ventas.aggregate([
    {
        $unwind: "$productos"
    },
    {
        $group: {
            _id: "$productos.marca",
            cantidadVendida: {
                $sum: "$productos.cantidad"
            }
        }
    },
    {
        $sort: {
            cantidadVendida: -1
        }
    },
    {
        $limit: 5
    }
]);