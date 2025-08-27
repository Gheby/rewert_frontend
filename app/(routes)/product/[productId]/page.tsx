import getProduct from "../../../../actions/get-product";
import getProducts from "../../../../actions/get-products";
import Gallery from "../../../../components/gallery";
import Info from "../../../../components/info";
import ProductList from "../../../../components/product-list";
import Container from "../../../../ui/container";

interface ProductPageProps {
    params: {
        productId: string;
    };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
    const product = await getProduct(params.productId);
    const suggestedProductsRaw = await getProducts({
        categoryId: product?.category?.id,
    });
    // Related items: the selected product + other products from the same category
    const relatedItems = [
        product,
        ...suggestedProductsRaw.filter(
            (item: { id: string; category?: { id?: string } }) =>
                item.id !== product?.id && item.category?.id === product?.category?.id
        ),
    ];

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                        <Gallery images={product.images}/>
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={product} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    {/* Show related items (selected + others from same category) */}
                    <ProductList title="Related Items" items={relatedItems} />
                </div>
            </Container>
        </div>
    );
};

export default ProductPage;
