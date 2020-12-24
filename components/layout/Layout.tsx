import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from "next/router"
import styles from './layout.module.scss'
import {useTranslationUtil} from "../../utils/useTranslationUtil"


type Props = {
	children?: ReactNode
	title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => {

	const {locale, locales, push, pathname} = useRouter()

	const renderLocales = locales?.map((locale, index) => (
		<option key={index}>
			{locale}
		</option>
	))

	const changeLangHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const {value} = event.target

		push(pathname, pathname, {locale: value})
	}

	return (
		<div className={styles.layout}>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Description"/>
				<meta name="keywords" content="Keywords"/>

				<meta charSet="utf-8"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>

				<link rel="manifest" href="/manifest.json"/>
				<link
					href="/favicon-16x16.png"
					rel="icon"
					type="image/png"
					sizes="16x16"
				/>
				<link
					href="/favicon-32x32.png"
					rel="icon"
					type="image/png"
					sizes="32x32"
				/>
				<link rel="apple-touch-icon" href="/apple-icon.png"></link>
				<meta name="theme-color" content="#317EFB"/>
			</Head>
			<header>
				<nav className={styles.navbar}>
					<Link href="/">
						<a>Home</a>
					</Link>
					|
					<Link href="/about">
						<a>About</a>
					</Link>
					|
					<Link href="/users">
						<a>Users List</a>
					</Link>
					|
					<Link href={"/todo"}>
						<a>Todo Page</a>
					</Link>
				</nav>

				<select name="langs" id="langs" defaultValue={locale} onChange={changeLangHandler}>
					{renderLocales}
				</select>
			</header>
			<main>
				{children}
			</main>
			<footer>
				<span>{useTranslationUtil('footer:text')}</span>
			</footer>
		</div>
	)
}

export default Layout
