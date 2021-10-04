import React, { useState, useEffect } from 'react';




const Products = () => {
    const [productData, setProductData] = useState([]);
    
    
    useEffect(() => {
        console.log("It is Rendered");
        const fetchProductData = async () => {
            console.log('Product Page Loaded');
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json();
            setProductData(data);
            console.log(data);
        }
        fetchProductData()
    }, [])
    
    
    return (
        <div className="products">
            <h1>Products Listing</h1>
            <div className="product-listings">
                {
                    productData.map((product) => {
                        return <article key={product.id}>
                                    <h4>{product.title}</h4>
                                    <img src={product.image} alt={product.title} />
                               </article>
                    })
                }
            </div>
        </div>
    )
}

export default Products
