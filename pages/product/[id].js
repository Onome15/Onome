import React from 'react'
import Head from "next/head";
import Script from 'next/script';
import Butter from "buttercms";

const details = (product) => {
  return (
    <>
    <h1>{product.name}</h1> 
    </>
  )
}

export default details


export const getStaticPaths = async () => {
  const butter =Butter(process.env.REACT_APP_BUTTER_ECOMMERCE);
const res = await butter.content.retrieve(["products"], {
  order: "name",
});
const { data } = await res.data;
const products = data.products;

  // map data to an array of path objects with params (id)
  const paths = products.map(product => {
    return {
      params: { id: product.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const butter =Butter(process.env.REACT_APP_BUTTER_ECOMMERCE);

  const id = context.params.id;

  const res = await butter.content.retrieve(["products"] + id, {
    order: "name",
  });
  const { data } = await res.data;
  const product = data.products ;
  return {
    props: {
      product,
    },
  }
}

