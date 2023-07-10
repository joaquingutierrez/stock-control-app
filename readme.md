# Aplicacion de control de stock pensada para la casa.

Esta aplicacion esta pensada para tener tres pestañas o tabs
*Crear
*Inventario => Categorias => Productos => Detalles del Producto
*Carrito

## Crear producto
Al crear un producto (o editarlo), se puede poner un stock mínimo, esto sirve para que cuando se baje de ese número, se agregue autómaticamente al carrito la cantidad necesaria para llegar a ese stock mínimo.

Propiedades del objeto producto:
*id: identificacion única del producto (autogenerado)
*title: Nombre del producto (OBLIGATORIO, mínimo de tres letras)
*description: Descripcion del producto (opcional)
*category: categoría a la cual pertenece el producto (opcional, opcion múltiple entre las disponibles)
*minimum: cantidad crítica, si se baja de este número, se agrega la cantidad necesaria hasta llegar a este en el carrito (opcional)
*stock: Cantidad que se tiene del producto (opcional)
*image: imagen del producto (opcional)

En "Crear" hay una opcion de crear categoría, es solamente un nombre identificativo para luego organizar los productos.

## Inventario
Esta pestaña cuenta con varias pantallas:
### Pantalla Categorias: 
En esta pantalla se elige la categoría de entre las creadas, tambien hay una opcion para ver todos los productos.
### Pantalla Productos: 
En esta pantalla se muestran todos los productos de la categoría elegida.
### Pantalla Detalles del Producto: 
En esta pantalla se muestran los detalles del producto elegido en la pantalla anterior, mostarando todas sus propiedades, más algunos botones (editar producto, actualizar stock, agregar al carrito)
*Editar producto: Permite editar todas sus propiedades (misma UI que al crear un producto)
*Actualizar stock: permite restar y sumar manualmente mediante un botón y un input number
*Agregar al carrito: agrega al carrito de la compra el producto seleccionado manualmente (se puede elegir la cantidad a comprar)

## Carrito
Lista con todos los productos a comprar, cada producto cuenta con un checkbox para saber si se alcanzó la cantidad deseada (se pone en verde cuando se alcanza o se supera), además de un input con la cantidad que se está comprando (por defecto es cero). El botón terminar compra hace que se vacíe el carrito y se sumen todas las cantidades de cada producto al stock.



## Más información
La aplicación guarda por defecto la información en el celular, aunque tiene la opción de guardado en la nube. Para esto último, se necesita entrar en opciones y cambiar el switch de alamacenamiento en la nube (las imágenes no se suben, solo la ruta de la imagen). Los almacenamientos son independientes, por el momento no es posible descargar o subir los datos.
### Cambios futuros:
*Posibilidad de descargar y subir los datos de la nube.
*Posibiliadad de cambiar el User ID para que los integrantes de una misma casa puedan compartir la cuenta.