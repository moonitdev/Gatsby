import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allGoogleSheetCovidRow {
        nodes {
          state
          death
          positive
          negative
        }
      }
    }
  `);
  const { nodes } = data.allGoogleSheetCovidRow;

  nodes.sort((a, b) => {
    return (b.positive + b.negative) - (a.positive + a.negative);
  });

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Covid Cases</h1>
      <table>
        <tr>
          <th>State</th>
          <th>Positive</th>
          <th>Negative</th>
          <th>Total</th>
          <th>Deaths</th>
        </tr>
        {nodes.map((st) => {
          const { state, death, positive, negative } = st;
          const total = positive + negative;
          return (
            <tr>
              <td>{state}</td>
              <td>{positive}</td>
              <td>{negative}</td>
              <td>{total}</td>
              <td>{death}</td>
            </tr>
          )
        })}
      </table>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
};

export default IndexPage