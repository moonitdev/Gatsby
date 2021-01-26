## sheets

- [Running your business off of Gatsby and Google Sheets](https://saasquickly.com/blog/running-your-business-off-of-gatsby-and-google-sheets/)

### googlesheet
- https://docs.google.com/spreadsheets/d/100PbplhMziDbU6fygezclb2wyWz6fmao-eR6LZ1Y4kk/edit#gid=0
- create new sheet: covid
- populate data: insert A1
  - =IMPORTDATA("https://covidtracking.com/api/v1/states/current.csv")

### github setting
#### create github remote repository
- https://github.com/moonitdev/Gatsby.git
- .gitignore: node

#### create github local repository
- git clone
```
C:\Dev\docMoon\trainings> git clone https://github.com/moonitdev/Gatsby.git
```

- .gitignore

```
client_secret.json
```

### visual studio code
#### install extension
- React/Redux/Typescript/javascrdipt/Omi snippets
- React Extension Pack

#### Add Folder to Workspace
- C:\Dev\docMoon\trainings\Gatsby

### gatsby new

```bash
gatsby new sheets
cd sheets
yarn add gatsby-source-google-sheets
```

### gatsby-config.js

```js
// gatsby-config.js
// ...
{
    resolve: 'gatsby-source-google-sheets',
    options: {
        spreadsheetId: '100PbplhMziDbU6fygezclb2wyWz6fmao-eR6LZ1Y4kk',
        worksheetTitle: 'covid',
        credentials: require('../_credentials/client_secret.json')
    }
},
```


### check gatsby server

#### gatsby server start(develop)

```bash
yarn start
```

### check browser
- http://localhost:8000/
- http://localhost:8000/___graphql


### edit index.js
```js
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
```



## sheets-flexible
- [gatsby-source-google-sheets-flexible](https://www.gastbyjs.com/plugins/gatsby-source-google-sheets-flexible/)

- [Running your business off of Gatsby and Google Sheets](https://saasquickly.com/blog/running-your-business-off-of-gatsby-and-google-sheets/)


### googlesheet
- https://docs.google.com/spreadsheets/d/100PbplhMziDbU6fygezclb2wyWz6fmao-eR6LZ1Y4kk/edit#gid=0
- sheets: gallery / covid


### gatsby new

```bash
gatsby new sheets-flexible
cd sheets-flexible
yarn add gatsby-source-google-sheets-flexible
```

### gatsby-config.js

```js
// gatsby-config.js
// ...
{
    resolve: "gatsby-source-google-sheets-flexible",
    options: {
        apiKey: "AIzaSyDmwMgEADYAZ0pNTI71M3CZx5wqCUzaDD0",
        spreadsheetUrl: "https://docs.google.com/spreadsheets/d/100PbplhMziDbU6fygezclb2wyWz6fmao-eR6LZ1Y4kk/edit#gid=0",
        tabName: "gallery",
        cellRange: "A1:E5",
        majorDimension: "COLUMNS",
    },
},
{
    resolve: 'gatsby-source-google-sheets-flexible',
    options: {
        apiKey: "AIzaSyDmwMgEADYAZ0pNTI71M3CZx5wqCUzaDD0",
        spreadsheetId: "100PbplhMziDbU6fygezclb2wyWz6fmao-eR6LZ1Y4kk",
        tabName: "covid",
        cellRange: "A1:BB57",
        majorDimension: "ROWS",
    }
}
```


### check gatsby server

#### gatsby server start(develop)

```bash
yarn start
```

* BUG!
```bash
ERROR #11321  PLUGIN

"gatsby-source-google-sheets-flexible" threw an error while running the sourceNodes lifecycle:

Request failed with status code 403
```

* SOL!
  - googlesheet 공유 > 링크 보기 > 링크가 있는 인터넷상의 모든 사용자가 볼 수 있음
  - TODO: 권한 있는 사용자만 볼 수 있는 경우에 오류 없도록!


### check browser
#### home
- http://localhost:8000/

#### graphql
- http://localhost:8000/___graphql
- Explorer: all<tabName>SheetsData


## mdx

- [Intro to MDX in Gatsby](https://www.digitalocean.com/community/tutorials/gatsbyjs-mdx-in-gatsby)
- [Your First Steps with Gatsby v2](https://www.digitalocean.com/community/tutorials/gatsbyjs-gatsby-first-steps)



### installation

```bash
gatsby new mdxs
cd mdxs
yarn add gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react
yarn add gatsby-source-filesystem
```

### configuration
- gatsby-config.js
```js
module.exports = {
  //...siteMetadata, etc
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
      },
    },
    // ... other plugins
  ],
}
```

### Basic Usage
- /src/pages/mdx-intro/index.mdx

```md
---
title: MDX is Magical!
path: /mdx-intro
date: 2019-08-25
---

# Hooray For MDX!

This will be like turbo-charged Markdown!
```

### Using Components in MDX
- /src/components/TitleBar.js
```js
import React from 'react';

const TitleBar = ({ text, size, bkgdColor }) => (
  <div
    style={{
      margin: '2rem 0',
      padding: '2rem',
      backgroundColor: bkgdColor || '#fff',
    }}
  >
    <h2
      style={{
        fontSize: size || '18px',
        margin: 0,
      }}
    >
      {text}
    </h2>
  </div>
);

export default TitleBar;
```

- /src/pages/mdx-intro/index.mdx
```md
---
title: MDX is Magical!
path: /mdx-intro
date: 2019-08-25
---
import TitleBar from "../../components/TitleBar.js";

<TitleBar
  size={"32px"}
  bkgdColor={"#4aae9b"}
  text={props.pageContext.frontmatter.title}
/>

This will be like turbo-charged Markdown!
```

### Assigning Layouts
- gatsby-config.js
```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/src/blog/`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          // posts: require.resolve("./src/components/blog-layout.js"),
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
  ],
}
```

### Importing Other MDX Files
- /src/components/postSignature.mdx
```md
##### Thanks for Reading!

*🐊 Al E. Gator | alligator.io | al@example.com*

export default ({ children }) => (
  <>
    {children}
  </>
)
```

- /src/pages/mdx-intro/index.mdx
```md
---
title: MDX is Magical!
path: /mdx-intro
date: 2019-08-25
---
import TitleBar from "../../components/TitleBar.js";
import PostSignature from "../../components/postSignature.mdx";

<TitleBar
  size={"32px"}
  bkgdColor={"#4aae9b"}
  text={props.pageContext.frontmatter.title}
/>

This is like turbo-charged Markdown!

<PostSignature />
```

### GraphQL Queries
```
query {
  allMdx {
    edges {
      node {
        frontmatter {
          title
          path
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
```

### Providing Other Data
```js
export const myReviews = [
  {
    name: "Tim's Tacos",
    overall: 9,
    variety: 7,
    price: 8,
    taste: 9
  },
  {
    name: "Noodleville",
    overall: 7,
    variety: 5,
    price: 6,
    taste: 8
  },
  {
    name: "Waffle Shack",
    overall: 6,
    variety: 5,
    price: 4,
    taste: 6
  },
];
```

```
query MdxExports {
  allMdx {
    nodes {
      exports {
        myReviews {
          name
          overall
          variety
          price
          taste
        }
      }
    }
  }
}
```

### A Practical Example
- recharts
```bash
$ yarn add recharts
```

- /src/components/BarChart.js
```js
import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const colorsList = ['#008f68', '#6db65b', '#4aae9b', '#dfa612'];

class ExampleChart extends PureComponent {
  render() {
    return (
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={this.props.data}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 10]} />
            <Tooltip />
            <Legend />

            {this.props.bars.map((bar, i) => (
              <Bar
                dataKey={bar}
                fill={colorsList[i]}
                key={`bar_${i}`}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default ExampleChart;
```

- /src/pages/mdx-intro/index.mdx
```md
---
title: MDX is Magical!
path: /mdx-intro
date: 2019-08-25
---

import TitleBar from '../../components/TitleBar';
import PostSignature from '../../components/postSignature.mdx';
import BarChart from "../../components/BarChart";

export const myReviews = [
  {
    name: "Tim's Tacos",
    overall: 9,
    variety: 7,
    price: 8,
    taste: 9
  },
  {
    name: "Noodleville",
    overall: 7,
    variety: 5,
    price: 6,
    taste: 8
  },
  {
    name: "Waffle Shack",
    overall: 6,
    variety: 5,
    price: 4,
    taste: 6
  },
];

<TitleBar
  text={props.pageContext.frontmatter.title}
  size={'32px'}
  bkgdColor={'#4aae9b'}
/>


This page is built with turbo-charged Markdown!

#### My Food Reviews:

<BarChart
  data={myReviews}
  bars={["overall", "variety", "price", "taste"]}
/>

<PostSignature />
```




[gatsby-source-github](https://github.com/mosch/gatsby-source-github)
[createremotefilenode gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=#createremotefilenode)
[Intro to MDX in Gatsby](https://www.digitalocean.com/community/tutorials/gatsbyjs-mdx-in-gatsby)
[MDX Getting Started](https://mdxjs.com/getting-started)
[Composing Documents with MDX: Markdown for the Component Era](https://blog.bitsrc.io/composing-documents-with-mdx-markdown-for-the-component-era-ed9d87142703)

[storybook](https://storybook.js.org/)
[Introduction to Storybook for React](https://storybook.js.org/docs/react/get-started/introduction)