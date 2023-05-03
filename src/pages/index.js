import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    contentstackHeader{
       logo {
          url
        },
      navigation_menu {
        label
        page_reference {
          uid
          title
          created_by
          page_components {
            hero_banner{
              bg_color,
              text_color
              banner_title
              banner_image {
                id
              }
              banner_description
              call_to_action {
                title
                href
              }
            },
          }
        }
      }
    }
  }
  `)

  React.useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <main style={pageStyles}>
    <h1>Hello World</h1>
    <img src={data.contentstackHeader.logo.url} ></img>
    <ul>
      {
        data.contentstackHeader.navigation_menu.map(({label}) => {
          return<li><span>{label}</span></li>
        })
      }
    </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
