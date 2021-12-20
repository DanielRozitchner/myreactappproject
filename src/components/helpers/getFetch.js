const productos = [
    {id: 1,
    foto: 'https://images.deliveryhero.io/image/pedidosya/products/099f56f8-7942-4248-9c12-b2f5b88a7349.jpg?quality=90&width=614&webp=1' ,
    cake: 'MiniCake Cheesecake Maracuya',
    categoria: 'minicakes',
    detalle:' Minicake con base crocante de chocolate, relleno de crema de quesos y leche condensada con suave sabor a maracuya, cubierta con salsa y pulpa de maracuya' ,
    precio: 500,
    cantidad:1,
    stock: 15 },
    {id: 2,
    foto: 'https://images.deliveryhero.io/image/pedidosya/products/0b5847ce-4ddb-498d-a15c-55ad54496446.jpg?quality=90&width=614&webp=1' ,
    cake: 'MiniCake Chocotorta',
    categoria: 'minicakes',
    detalle: 'Clásica torta de Chocolinas con nuestro toque especial.',
    precio: 500,
    cantidad:1,
    stock: 12 },
    {id: 3,
    foto: 'https://images.deliveryhero.io/image/pedidosya/products/778b84d6-cca4-47d2-849f-d1b4698c6493.jpg?quality=90&width=614&webp=1' ,
    cake: 'MiniCake Bombon Oreo',
    categoria: 'minicakes',
    detalle: 'Minicake con base de galletitas Oreo, relleno de mousse de chocolate cubierta de una capa de Oreo',
    precio: 500,
    cantidad:1,
    stock: 10 },
    {id: 4,
    foto: 'https://images.deliveryhero.io/image/pedidosya/products/99a1d86f-8901-46ce-b10a-9dd0f58b9abe.jpg?quality=90&width=614&webp=1' ,
    cake: 'MiniCake Bombon Frutos Rojos',
    categoria: 'minicakes',
    detalle: 'Minicake con base de galletitas, relleno de mousse de chocolate, cubierta de Frutos Rojos',
    precio: 500,
    cantidad:1,
    stock: 8 },
    {id: 5,
    foto: 'http://delfinodulce.com.ar/wp-content/uploads/2017/07/delfinodulce462-copy.jpg' ,
    cake: 'Cake Cheesecake Maracuya',
    categoria: 'cakes',
    detalle: 'Cake con base crocante de chocolate, relleno de crema de quesos y leche condensada con suave sabor a maracuya, cubierta con salsa y pulpa de maracuya',
    precio: 500,
    cantidad:1,
    stock: 7 },
    {id: 6,
    foto: 'https://images.deliveryhero.io/image/pedidosya/products/fca138da-d335-4aca-9181-8f1aa4155eb7.jpg?quality=90&width=461&webp=1' ,
    cake: 'Chocotorta Oreo',
    categoria: 'cakes',
    detalle: 'Chocotorta pero de galletitas Oreo',
    precio: 500,
    cantidad:1,
    stock: 6 },
    {id: 7,
    foto: 'http://delfinodulce.com.ar/wp-content/uploads/2017/07/MG_9879-copyB.jpg' ,
    cake: 'Cake Bombon Oreo',
    categoria: 'cakes',
    detalle: 'Cake con base de galletitas Oreo, relleno de mousse de chocolate cubierta de una capa de Oreo',
    precio: 500,
    cantidad:1,
    stock: 3 },
    {id: 8,
    foto: 'http://delfinodulce.com.ar/wp-content/uploads/2017/07/MG_4993-copy.jpg' ,
    cake: 'Cake Mousse de chocolate',
    categoria: 'cakes',
    detalle: 'Mousse de chocolate con base de brownie',
    precio: 500,
    cantidad:1,
    stock: 4 }
];

export const getFetch = new Promise((resolve) => {
    setTimeout(()=>{
        resolve(productos)
    },3000)
})