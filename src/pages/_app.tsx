import React from 'react'
import { AppProps } from 'next/app'
import { createWrapper } from 'next-redux-wrapper'
import { Provider, useDispatch } from 'react-redux'
import { store } from '../store'

import 'tailwindcss/tailwind.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
