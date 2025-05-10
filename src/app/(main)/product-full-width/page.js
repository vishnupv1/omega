import { Row } from 'react-bootstrap'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import ProductPage from '@/components/product-page/ProductPage'
import RelatedProduct from '@/components/product-page/related-product/RelatedProduct'

const page = () => {
    return (
        <>


            <Breadcrumb title={"Product Page"} />
            <section className="gi-single-product padding-tb-40">
                <div className="container">
                    <Row>
                        <ProductPage
                            none={'none'}
                            lg={12}
                        />

                    </Row>
                </div>
            </section>
            <RelatedProduct />

        </>
    )
}

export default page
