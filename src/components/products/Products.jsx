import {useEffect, useState} from "react";
import './Products.css';

export const Products = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <>
            <h1>Product List</h1>
            <div className="wrapper">
                {products?.map(product => (
                    <div className="card">
                        <span>{product.title}</span>
                        <img src={product.image} style={{width: '80px', height: '80px'}} />
                    </div>
                ))}
            </div>
        </>
    )
}