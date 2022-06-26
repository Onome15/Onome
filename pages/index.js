import Head from "next/head";
import Script from 'next/script';
import { MdAddShoppingCart } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';


const butter = require('buttercms')('69cb07d577457e0eb1ac7e197b31e4f94eb41825');

export async function getStaticProps() {

  const res = await butter.content.retrieve(["cookies"], {
    order: "name",
  });
  const { data } = await res.data;
  const all = data.cookies;
  return {
    props: {
      cookies: all
    },
  }
}

const cookies = ({ cookies }) => {
  return (
    <>
      <Head>
        <title>Shop</title>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
      </Head>
      <main className="container">
        <nav className="container fixed inset-x-0 top-0 bg-white mb-32 z-10">
          <h1 className="text-xl md:text-3xl m-2 md:m-5 font-bold font-mono text-green-700">PHONE-MALL
            <span className="float-right text-l md:text-2xl rounded-lg bg-transparent hover:bg-purple-300 text-purple-700 p-1 snipcart-checkout title">  <span className="float-left"><FiShoppingBag size={25} /></span> View</span>
          </h1>
          <hr className="style-eight" />
        </nav>
        <div className="grid place-items-center mt-32 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {cookies.map(cookies => (

            <div key={cookies.id} className=' relative mb-10 max-w-sm rounded shadow-lg hover:shadow-xl h-full'>
              <img src={cookies.image} alt={`${cookies.name}`} className="w-full" />
              <div className="px-6 py-4 ">
                <div className="text-2xl mb-5">
                  <h3 className="text-purple-700 font-bold uppercase">{cookies.name}
                    <span className="float-right text-green-700"> ${cookies.price}</span>
                  </h3>
                </div>
                <p className='flex-1'>{cookies.description}</p> <br /><br /><br />
                <button className="absolute bottom-10 left-1/2 transform 
                -translate-x-1/2 w-64 sm:w-52 btn flex-1 text-xl 
                bg-transparent hover:bg-purple-500 text-purple-700 font-semibold 
                hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent 
                items-center rounded justify-self-center mt-10 snipcart-add-item"
                  data-item-id={cookies.id}
                  data-item-image={cookies.image}
                  data-item-name={cookies.name}
                  data-item-url="/"
                  data-item-description={cookies.description}
                  data-item-price={cookies.price}
                >
                  <span className="float-left"><MdAddShoppingCart size={25} /></span>Add To Cart

                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key="OTYwMzkxMzktOWYyNy00NWY3LTlmMGYtOTFhOTJkYjM0OTI0NjM3OTE4MjY5OTY4OTQ1Njcy"></div>
    </>
  )
}

export default cookies;