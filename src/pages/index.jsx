import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import Video from "../components/video"
import BikesMP4 from "../videos/BikesRFun.mp4"
import Logo from "../icons/logo"
import {
  container,
  intro,
  subtitle,
  video,
  videoWrapper,
  logo,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`

export default function IndexPage({ data }) {
  return (
    <Layout>
      <div className={container}>
      <h1 className={subtitle}>Art and Shirts and Stuff</h1>
      </div>
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
