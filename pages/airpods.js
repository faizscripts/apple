import CategoryPage from "../components/CategoryPage";
import ProductItem from "../components/ProductItem";

function Airpods() {
    return(
        <CategoryPage title='AirPods'>
            <ProductItem price={16500} category='AirPods' productName='AirPods – 2nd Generation' img='AirPods/airpods2.webp'/>
            <ProductItem price={23000} category='Airpods' productName='AirPods – 3rd Generation' img='AirPods/airpods-3.webp'/>
            <ProductItem price={59000} category='Airpods' productName='AirPods Max' img='AirPods/airpods-max-1.webp'/>
            <ProductItem price={25000} category='Airpods' productName='AirPods Pro' img='AirPods/airpod-pros.jpg.webp'/>
        </CategoryPage>
    )
}

export default Airpods