import Link from 'next/link'
import Layout from '../components/layout/Layout'
import Container from "../components/container/Container"
 import {useRouter} from "next/router"
import useTranslation from "next-translate/useTranslation"

interface props {

}

const IndexPage = ({}: props) => {
	const router = useRouter()
	const {t} = useTranslation()

	const {locale, locales, defaultLocale} = router

	return (
		<Layout title="Home | Next.js + TypeScript Example">
			<Container>
				<h1>{t('common:title')}👋</h1>
				<p>
					<Link href="/about">
						<a>About</a>
					</Link>
				</p>

				<p>Current locale: {locale}</p>
				<p>Default locale: {defaultLocale}</p>
				<p>Locales: {JSON.stringify(locales)}</p>
			</Container>
		</Layout>
	)
}

export default IndexPage
