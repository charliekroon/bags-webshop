import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PRODUCTS } from "../../app/data/products";
import { Button } from "../../app/components/elements/Button";

interface Product {
  id: string;
  name: string;
  imgUrl: string;
  title: string;
  description: string;
}

const imageLoader = ({ src }: { src: string }) => {
  return `/images/products/${src}`;
};

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      const index = PRODUCTS.findIndex(product => product.id === productId);
      if (index > -1) {
        setProduct(PRODUCTS[index]);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }
  }, [productId]);

  if (notFound) {
    return <div>Product not found</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-lg mx-auto my-6">
        {product && (
          <>
            <div className="col-span-2">
              <div className="border rounded border-slate-300 flex items-center justify-center">
                <Image loader={imageLoader} src={product.imgUrl} alt="product image" width={width} height={height} />
              </div>
            </div>
            <div className="col-span-3 flex flex-col justify-between">
              <div className="product-info">
                <h1>{product.title}</h1>
                <p className="font-playfairRegular">{product.description}</p>
              </div>
              <div className="product-controls flex flex-row items-end">
                <Button variant="dark">Add to Cart</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductPage;