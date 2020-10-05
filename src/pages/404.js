import React from "react"

import Layout from "../components/Layout/index"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>Ops Não tem nada aqui</p>
  </Layout>
)

export default NotFoundPage
