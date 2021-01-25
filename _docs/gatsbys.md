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
