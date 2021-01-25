// import React from "react"
// import { Link, useStaticQuery } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const IndexPage = () => {
//   const data = useStaticQuery(graphql`
//     query MyQuery {
//       allGoogleSheetGalleryRow {
//         nodes {
//           idx
//           title
//           image
//         }
//       }
//     }
//   `);
//   const { nodes } = data.allGoogleSheetGalleryRow;

//   console.log(nodes)

//   return (
//     <Layout>
//       <SEO title="Gallery" />
//       <div>
//         {nodes.map((st) => {
//           const { title, image } = st;
//           return (
//             <div>
//             <h1>{title}</h1>
//             <img src={image} alt={title} />
//             </div>
//           )
//         })}
//         </div>
//       <Link to="/page-2/">Go to page 2</Link>
//     </Layout>
//   )
// };

// export default IndexPage