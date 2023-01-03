import CategoryPage from "../components/CategoryPage";
import ProductItem from "../components/ProductItem";
import UserLayout from "../layout/UserLayout";

function Watch() {
    return(
        <CategoryPage title='Watch'>
            <ProductItem price={55000} category='Watch, series 7' productName='Watch Series 7 - Midnight Aluminum Case with Leather Link' img='Watch/series-7.webp' options={['41MM','45MM']}/>
            <ProductItem price={30500} category='Watch, series 3' productName='Watch Series 3 – Aluminium Case with Sport Band' img='Watch/series-3-silver.webp' options={['38MM','42MM']}/>
            <ProductItem price={50000} category='Watch, series 6' productName='Watch Series 6 – Gold/Deep Navy, Sport Band' img='Watch/series-6.webp' options={['40MM','45MM']}/>
            <ProductItem price={45000} category='Watch, series se' productName='Watch Series SE – Aluminium Case with Braided Solo Loop' img='Watch/watch-se.webp' options={['40MM','44MM']}/>
        </CategoryPage>
    )
}

Watch.pageLayout = UserLayout

export default Watch
