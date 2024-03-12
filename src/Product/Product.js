function Product(props){

    const name = props.data.title
    const id = props.data.id
    console.log(props)
    return <h4>Product {id}: {name}</h4>

}

export default Product