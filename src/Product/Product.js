import './Product.css';

function Product(props){

    const {title, image, price, category, description, id} = props.data

    const ondlt = () => {
        props.ondelete(id)
    }
    
    return (
    <div className="product">
        <div className="productimg">
            <img src = {image}/>
        </div>
        <div className="productdetails">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <hr/>
        <div className="minordetails">
            <span> category: {category} </span>
            <span> Price: {price}</span>
        </div>
        <hr/>
        <button onClick={ondlt} className='deletebtn'>Delete</button>
    </div>)

}

export default Product