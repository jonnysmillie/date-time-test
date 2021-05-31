import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Datetime from '../components/datetime'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Date/Time</h1>
    <p>Here you retrieve the date and time from an api endpoint using hooks and state</p>
    <Datetime />
  </Layout>
)

export default IndexPage
