import Slider from "../../components/Slider/Slider";
import ProductLayoutPage from "../../layout/ProductLayoutPage";
import styles from "./ProductDetailPage.module.css";

const breadcrumbsBusiness = [
    {label: "دانه قهوه اسپرسو جیورنو", link: "/bussiness/products/1"},
    {label: "دانه اسپرسو", link: "/bussiness/products/2"},
    {label: "قهوه اسپرسو", link: "/bussiness/products/3"},
    {label: "محصولات بن‌مانو", link: "/bussiness/products/4"},
    {label: "خانه", link: "/bussiness/products/4"},
]

const images = ["banana", "apple", "orange", "pineapple", "strawberry", "watermelon", "mango", "grape", "pear", "peach"]

const ProductDetailPage = () => { 
    return (
        <ProductLayoutPage breadcrumbItems={breadcrumbsBusiness}>
            <div className={styles.root}>
                <Slider images={images} />
                <div>
                    product details
                </div>
                <div>
                    card
                </div>
            </div>
        </ProductLayoutPage>
    );
};

export default ProductDetailPage;
