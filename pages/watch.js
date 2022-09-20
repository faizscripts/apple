import CategoryPage from "../components/CategoryPage";
import ProductItem from "../components/ProductItem";

function Watch() {
    return(
        <CategoryPage title='Watch'>

            <ProductItem price={55000} category='Watch, series 7' productName='Watch Series 7 - Midnight Aluminum Case with Leather Link' img='series-7.webp' options={true}/>
            <ProductItem price={30500} category='Watch, series 3' productName='Watch Series 3 – Aluminium Case with Sport Band' img='series-3-silver.webp' options={true}/>
            <ProductItem price={50000} category='Watch, series 6' productName='Watch Series 6 – Gold/Deep Navy, Sport Band' img='series-6.webp' options={true}/>
            <ProductItem price={45000} category='Watch, series se' productName='Watch Series SE – Aluminium Case with Braided Solo Loop' img='watch-se.webp' options={true}/>
        </CategoryPage>
    )
}

export default Watch