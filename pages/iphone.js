import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {faTableCellsLarge} from "@fortawesome/free-solid-svg-icons/faTableCellsLarge";
import {faTableCells} from "@fortawesome/free-solid-svg-icons";
import gadgets from '../public/images/categories/accessories-page-title.jpg'
import CategoryPage from "../components/CategoryPage";
import ProductItem from "../components/ProductItem";
import UserLayout from "../layout/UserLayout";

function iphone() {
    return (
        <CategoryPage title='iPhone'>
            <ProductItem  options={['64GB','128GB','256GB']} img='iphone/iphone-13-pro-max1.png' price={153000} productName='iPhone 13 Pro Max' category='iPhone'/>
            <ProductItem  options={['128GB','256GB','512GB','1TB']} img='iphone/iphone-13-pro-alpine-green.png' price={153000} productName='iPhone 13 Pro' category='iPhone'/>
            <ProductItem options={['128GB','256GB','512GB']}  img='iphone/iphone-13-mini1.png' price={110000} productName='iPhone 13 Mini' category='iPhone'/>
            <ProductItem options={['128GB','256GB','512GB']}  img='iphone/iphone-13-dual.jpg.png' price={108000} productName='iPhone 13 Dual' category='iPhone'/>
            <ProductItem options={['68GB','128GB','256GB']}  img='iphone/iphone-12-black-64gb.png' price={98000} productName='iPhone 12 Pro Max' category='iPhone'/>
        </CategoryPage>
    )
}

iphone.pageLayout = UserLayout

export default iphone

