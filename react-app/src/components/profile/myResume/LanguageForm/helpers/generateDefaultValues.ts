import { Language } from 'src/api/resumes/types'

import { defaultValues } from '../constants'

const generateDefaultValues = (languages?: Language[]) => {
  if (languages) {
    const adjustedLanguagesProperties = languages.map((language) => ({
      ...language,
      name: [language.name]
    }))

    return adjustedLanguagesProperties
  }

  return [defaultValues]
}

export default generateDefaultValues
