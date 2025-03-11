import { useEffect, useState } from 'react';
import Input from '../../components/Input';

const Products = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setcategory] = useState('');

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState();

    console.log('component re-render');
    console.log({
        products, loading
    });

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => {
                setProducts(res.products)
                console.log('api call is done:');
                const arr = res.products.map(i => i.category)
                const unique = [...new Set(arr)]
                setCategories(unique.map(i => ({id: i, label: i})))
                setLoading(false)
            })
    }, []);

    const findCategoryById = (id) => {
        // TODO:
        return [].find(item => item.id === id)
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (!products) {
        return <div>No data</div>
    }

    const filteredProducts = products.filter(item => {
        return item.title.toLowerCase().includes(name.toLowerCase()) &&
                item.price >= price
    })

    return (
        <div>
            <button className='btn font-size-big text-color-red text-red flex flex-row p-20 m-auto'>click</button>
            <Input
                value={name}
                placeholder='نام'
                type="text"
                onChange={value => setName(value)}
            />
            <Input
                value={price}
                style={{border: '1px solid red', padding: '10px', borderRadius: '5px'}}
                placeholder='قیمت'
                type="number"
                onChange={value => setPrice(value)}
            />
            <select onChange={e => {
                setcategory(e.target.value)
                }}>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.label}</option>
                ))}
            </select>            
            {filteredProducts.map(item => <li key={item.id}>{item.title} {item.price} {item.category}</li>)}
        </div>
    )
}

export default Products;