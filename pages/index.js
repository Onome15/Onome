import Butter from "buttercms";

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

    <div className="container flex flex-col grid place-items-center mt-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">

      {cookies.map(cookies => (

        <div key={cookies.id} className='text-blue-700 relative mb-10 max-w-sm rounded shadow-lg hover:shadow-xl h-full'>
          <img src={cookies.image} alt={`${cookies.name}`} className="w-full" />
          <div className="px-6 py-4 ">
            <div className="text-3xl mb-5">
              <h3>{cookies.name}
                <span className="float-right text-green-700"> ${cookies.price}</span>
              </h3>
            </div>

            <p className='flex-1'>{cookies.description}</p> <br /><br /><br />

            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 btn flex-1 text-2xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent items-center rounded justify-self-center mt-10">Add To Cart</button>
          </div>
        </div>


      ))}
    </div>
  )
}

export default cookies;
// 08037149865 