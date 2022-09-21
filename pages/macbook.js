import CategoryPage from "../components/CategoryPage";
import ProductItem from "../components/ProductItem";

function Macbook() {
    return(
        <CategoryPage title='Macbook'>
            <ProductItem img='MacBook/macbook-air.png' price={123000} productName='Macbook Air' category='Macbook'/>
            <ProductItem img='MacBook/MacBook-Pro-13.png' price={156000} productName='Macbook Pro 13-inch' category='Macbook'/>
            <ProductItem img='MacBook/MacBook-pro-14.png' price={275000} productName='Macbook Pro 14-inch' category='Macbook'/>
            <ProductItem img='MacBook/macbook-16-pro.webp' price={295000} productName='Macbook Pro 16-inch' category='Macbook'/>
        </CategoryPage>
    )
}

export default Macbook