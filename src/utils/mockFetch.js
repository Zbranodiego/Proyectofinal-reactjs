let productos = [
    {id : '1', categoria: 'COLOR', name: "KAW COLOR", price : 70 , foto: 'https://dr.savee-cdn.com/things/thumbnails/5/d/b4a87c2d6ce90896e337f5.webp'},
    {id : '2', categoria: 'COLOR', name: "KAW COLOR", price : 70 , foto: 'https://dr.savee-cdn.com/things/6/1/b768f4ccaa2cdb3f7cd139.webp'},
    {id : '3', categoria: 'COLOR', name: "KAW COLOR", price : 70 , foto: 'https://dr.savee-cdn.com/things/6/1/0ba900e3364c5d117c31db.webp'},
    {id : '4', categoria: 'COLOR', name: "KAW COLOR", price : 70 , foto: 'https://dr.savee-cdn.com/things/thumbnails/5/d/b4a87c2d6ce90896e337f5.webp'},
    {id : '5', categoria: 'B&W', name: "KAW B&W", price : 70 , foto: 'https://dr.savee-cdn.com/things/thumbnails/5/9/669dafce6f726991367906.webp'},
    {id : '6', categoria: 'B&W', name: "KAW B&W", price : 70 , foto: 'https://dr.savee-cdn.com/things/5/9/72648f41327d34535852d5.webp'},
    {id : '7', categoria: 'B&W', name: "KAW B&W", price : 70 , foto: 'https://dr.savee-cdn.com/things/5/9/72648f41327d34535852d5.webp'},
    {id : '8', categoria: 'B&W', name: "KAW B&W", price : 70 , foto: 'https://dr.savee-cdn.com/things/5/9/72648f41327d34535852d5.webp'},
]

export let mockFetch = (id) =>{

    return new Promise( (resolve)=>{
            setTimeout(()=>{
                resolve(id ? productos.find(prod => prod.id === id ) : productos);
            }, 800)
    })

}