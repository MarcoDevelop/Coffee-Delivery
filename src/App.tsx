import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/themes/global'
import { defaultTheme } from './styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
