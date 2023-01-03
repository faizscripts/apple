import CategoryPage from "../components/CategoryPage";
import ProductItem from "../components/ProductItem";
import UserLayout from "../layout/UserLayout";

function Store() {
    return(
        <CategoryPage title='Shop'>
            <ProductItem price={55000} category='Watch, series 7' productName='Watch Series 7 - Midnight Aluminum Case with Leather Link' img='Watch/series-7.webp' options={['41MM','45MM']}/>
            <ProductItem price={30500} category='Watch, series 3' productName='Watch Series 3 – Aluminium Case with Sport Band' img='Watch/series-3-silver.webp' options={['38MM','42MM']}/>
            <ProductItem price={50000} category='Watch, series 6' productName='Watch Series 6 – Gold/Deep Navy, Sport Band' img='Watch/series-6.webp' options={['40MM','45MM']}/>
            <ProductItem price={45000} category='Watch, series se' productName='Watch Series SE – Aluminium Case with Braided Solo Loop' img='Watch/watch-se.webp' options={['40MM','44MM']}/>
            <ProductItem img='MacBook/macbook-air.png' price={123000} productName='Macbook Air' category='Macbook'/>
            <ProductItem img='MacBook/MacBook-Pro-13.png' price={156000} productName='Macbook Pro 13-inch' category='Macbook'/>
            <ProductItem img='MacBook/MacBook-pro-14.png' price={275000} productName='Macbook Pro 14-inch' category='Macbook'/>
            <ProductItem img='MacBook/macbook-16-pro.webp' price={295000} productName='Macbook Pro 16-inch' category='Macbook'/>
            <ProductItem price={4500} category='Accessories, Adapters' productName='20 Watt USB-C Power Adapter' img='Accessories/20-watt-usb.webp'/>
            <ProductItem price={4500} category='Accessories, Magic mouse' productName='Magic Mouse – Black Multi Touch Surface' img='Accessories/magic-mouse-black.webp'/>
            <ProductItem  options={['64GB','128GB','256GB']} img='iphone/iphone-13-pro-max1.png' price={153000} productName='iPhone 13 Pro Max' category='iPhone'/>
            <ProductItem  options={['128GB','256GB','512GB','1TB']} img='iphone/iphone-13-pro-alpine-green.png' price={153000} productName='iPhone 13 Pro' category='iPhone'/>
            <ProductItem options={['128GB','256GB','512GB']}  img='iphone/iphone-13-mini1.png' price={110000} productName='iPhone 13 Mini' category='iPhone'/>
            <ProductItem options={['128GB','256GB','512GB']}  img='iphone/iphone-13-dual.jpg.png' price={108000} productName='iPhone 13 Dual' category='iPhone'/>
            <ProductItem options={['68GB','128GB','256GB']}  img='iphone/iphone-12-black-64gb.png' price={98000} productName='iPhone 12 Pro Max' category='iPhone'/>
        </CategoryPage>
    )
}

Store.pageLayout = UserLayout

export default Store
