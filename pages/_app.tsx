import type {AppProps} from 'next/app'
import {wrapper} from '../store'
import NextNprogress from 'nextjs-progressbar'

import 'antd/dist/antd.css' // or 'antd/dist/antd.less'


function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<NextNprogress
				color={"#29D"}
				startPosition={0.5}
				stopDelayMs={500}
				height={4}
			/>
			<Component {...pageProps} />
			</>
	)
}

export default wrapper.withRedux(MyApp)
