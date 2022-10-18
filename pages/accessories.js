import CategoryPage from "../components/CategoryPage";
import ProductItem from "../components/ProductItem";

function Accessories() {
    return(
        <CategoryPage title='Accessories'>
            <ProductItem price={4500} category='Accessories, Adapters' productName='20 Watt USB-C Power Adapter' img='Accessories/20-watt-usb.webp'/>
            <ProductItem price={4500} category='Accessories, Magic mouse' productName='Magic Mouse – Black Multi Touch Surface' img='Accessories/magic-mouse-black.webp'/>
        </CategoryPage>
    )
}

export default Accessories