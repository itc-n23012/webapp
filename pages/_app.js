// pages/_app.js

import './styles.css' // グローバル CSS をインポート
import { AppProps } from 'next/app'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
