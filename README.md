# 🚙 Overland Store

Este proyecto esta pensado en la creación de una base de datos en MongoDB para una tienda de accesorios 4x4 y overlanding.

La base de datos permite administrar marcas, productos, clientes y ventas. Además, incluye operaciones básicas de CRUD sobre los datos almacenados.

---

## 🗂️ Colecciones y Ejemplos

### 🏷️ Marcas

```json
{
  "nombre": "ARB",
  "pais": "Australia",
  "activo": true
}
```

### 🧰 Productos

```json
{
  "nombre": "Winch WARN VR EVO 10-S",
  "categoria": "Recuperación",
  "marca": {
    "nombre": "WARN",
    "pais": "Estados Unidos"
  },
  "precio": 485000,
  "stock": 8,
  "descripcion": "Winch eléctrico de 10000 libras con cuerda sintética",
  "vehiculoUniversal": true,
  "activo": true
}
```

### 👤 Clientes

```json
{
  "nombre": "Carlos Rodríguez",
  "correo": "carlos@example.com",
  "telefono": "8888-8888",
  "provincia": "Cartago",
  "vehiculos": [
    {
      "marca": "Suzuki",
      "modelo": "Grand Vitara",
      "anio": 2000
    }
  ],
  "activo": true
}
```

### 🧾 Ventas

```json
{
  "fecha": "2026-10-06",
  "cliente": {
    "nombre": "Carlos Rodríguez",
    "provincia": "Cartago"
  },
  "productos": [
    {
      "nombre": "Winch WARN VR EVO 10-S",
      "marca": "WARN",
      "cantidad": 1,
      "precioUnitario": 485000,
      "subtotal": 485000
    },
    {
      "nombre": "Recovery Boards MAXTRAX MKII",
      "marca": "MAXTRAX",
      "cantidad": 2,
      "precioUnitario": 95000,
      "subtotal": 190000
    }
  ],
  "metodoPago": "Tarjeta",
  "total": 675000
}
```

---

## 👥 Integrantes del Proyecto

- Kevin Orozco
