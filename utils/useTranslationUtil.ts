import useTranslation from "next-translate/useTranslation"

export const useTranslationUtil = (locale: string) => {
	const {t} = useTranslation()
	return t(locale)
}
