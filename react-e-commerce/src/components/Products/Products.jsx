import React, { useState, useEffect } from 'react';




const Products = () => {
    const [productData, setProductData] = useState(null);

    console.log('Product Page Loaded');

    useEffect(() => {
        const fetchProductData = async () => {
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
        </div>
    )
}

export default Products
