function Product(props){
    const onCart = () => {
        alert('Successfully added "' + props.name + '" to cart.')
    }

    const onFav = () => {
        alert('Successfully added "' + props.name + '" to favorites.')
    }

    

    return(
        <div className="card">
            <img src={props.img} alt="products"/>
            <table>
                <tr>
                <th><h3>{props.name}</h3></th>
                <th><h4>{props.price}</h4></th>
                </tr>
            </table>
            
            <p>{props.desc}</p>
            
            <button 
                className="btnAddCart"
                onClick={onCart}
                >
                Add to Cart
            </button>

            <button 
            className="btnAddFav"
            onClick={onFav}>
                Add to Favorites
            </button>
        </div>
    )
}

export default Product;