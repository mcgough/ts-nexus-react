import { Props, Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './Header'
import Meta from './Meta'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/Theme'

const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.black};
`

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

const Page = (props: Props<any>) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{props.children}</Inner>
        </StyledPage>
      </Fragment>
    </ThemeProvider>
  )
}

export default Page
