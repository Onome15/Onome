import Head from "next/head";
import Script from 'next/script';
import { MdAddShoppingCart } from 'react-icons/md';
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Butter from "buttercms";

const products = ({ products }) => {

  return (
    <div>
      <Head>
        <title>Shop</title>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
      </Head>

      <main className="container">
        <Nav />
        <div className="grid place-items-center mt-32 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {products.map(product => (

            <div key={product.id} className=' relative mb-10 max-w-sm rounded shadow-lg dark:rounded-lg hover:shadow-xl h-full mb-10'>
              <img src={product.image} alt={`${product.name}`} className="w-full" />
              <div className="px-4 py-4 items-center">
                <div className="text-xl mb-5">
                  <h3 className="text-purple-500 font-bold uppercase">{product.name}
                    <span className="float-right text-green-500"> ${product.price}</span>
                  </h3>
                </div>
                <p className='flex-1 justify-self-center'> {product.description}</p> <br /><br />
                <button className="absolute bottom-10 left-1/2 transform 
                -translate-x-1/2 w-64 sm:w-52 btn flex-1 text-xl 
                bg-transparent hover:bg-purple-500 text-purple-500 font-semibold 
                hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent 
                items-center rounded justify-self-center mt-10 snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.name}
                  data-item-url="/"
                  data-item-description={product.description}
                  data-item-price={product.price}
                >
                  <span className="float-left"><MdAddShoppingCart size={25} /></span>Addd To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </main>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key="OTYwMzkxMzktOWYyNy00NWY3LTlmMGYtOTFhOTJkYjM0OTI0NjM3OTE4MjY5OTY4OTQ1Njcy"></div>
    </div>
  )
}
export default products;

export async function getStaticProps() {
  const butter = Butter("69cb07d577457e0eb1ac7e197b31e4f94eb41825");
  const res = await butter.content.retrieve(["products"], {
    order: "name",
  });
  const { data } = await res.data;
  const products = data.products;
  return {
    props: {
      products,
    },
  }
}