import Head from "next/head";
import Script from 'next/script';
import { MdAddShoppingCart } from 'react-icons/md';
// import Nav from '../Components/Nav'
// import Footer from '../Components/Footer'
import Butter from "buttercms";
import { FiShoppingBag } from 'react-icons/fi';
import Link from "next/link"
import { AiFillGithub } from 'react-icons/ai';
import { RiLinkedinBoxFill } from 'react-icons/ri';

const products = ({ products }) => {

  return (
    <div className="bg-gray-800 pt-20 md:pt-32">
      <Head>
        <title>Shop</title>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
      </Head>

      <main className="container">
      <div>
            <nav className="container fixed inset-x-0 top-0 z-10 text-slate-100 px-2 bg-gray-800">
                <h1 className="text-xl md:text-2xl lg:text-3xl m-2 md:m-5 font-bold font-mono ">Phone-Mall
                    <span className="float-right text-lg md:text-2xl rounded-lg bg-transparent hover:bg-purple-300 p-1 snipcart-checkout title">
                        <span className="float-left"><FiShoppingBag size={25} /></span>
                        View
                    </span>
                </h1>
                <hr className="style-eight" />
            </nav>


        </div>
        <div className="grid place-items-center gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {products.map(product => (

            <div key={product.id} className=' relative mb-10 max-w-sm rounded shadow-xl dark:rounded-lg hover:shadow-2xl hover:shadow-grey-50 h-full mb-10'>
              <img src={product.image} alt={`${product.name}`} className="w-full" />
              <div className="px-4 py-4 items-center">
                <div className="text-xl mb-5">
                  <h3 className="text-slate-400 font-bold uppercase">{product.name}
                    <span className="float-right text-green-500"> ${product.price}</span>
                  </h3>
                </div>
                <p className='flex-1 justify-self-center text-slate-200'> {product.description}</p> <br /><br />
                <button className="absolute bottom-10 left-1/2 transform 
                -translate-x-1/2 w-64 sm:w-52 btn flex-1 text-xl 
                bg-transparent hover:bg-slate-400 text-slate-400 font-semibold 
                hover:text-white py-2 px-4 border border-slate-400 hover:border-transparent 
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
        <footer className="bg-gray-900 text-slate-200 text-center lg:text-left text-2xl md:-mx-10 -mx-4">
            <hr className="footer" />
            <div className="text-center p-3 pb-4 foot">
                <ul className="flex place-content-center">
                    <li >
                        <Link href="https://github.com/Onome15" >
                            <a target="_blank" rel="noopener noreferrer">
                                <AiFillGithub size={30} className='text-green-400' />
                            </a>
                        </Link>
                    </li>

                    <li >
                        <Link href="https://www.linkedin.com/in/orhero-onome/" >
                            <a target="_blank" rel="noopener noreferrer">
                                <RiLinkedinBoxFill size={30} className='text-green-400' />
                            </a>
                        </Link>
                    </li>
                </ul>
                © 2022 Copyright:
                <Link href="https://orherojoe.netlify.com/"><a className="underline"> JoeTechOn</a></Link>
            </div>
        </footer>
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