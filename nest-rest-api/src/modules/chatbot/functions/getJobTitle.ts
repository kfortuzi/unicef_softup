export const getJobTitle = {
  name: 'getJobTitle',
  description:
    'Ekstrakto titullin e punes nga pyetja e perdoruesit nese perdoruesi deshiron te dije informacione mbi nje vend te lire pune',
  parameters: {
    type: 'object',
    properties: {
      jobTitle: {
        type: 'string',
        description: 'Titulli i punes ne gjuhen shqipe.',
      },
    },
    required: ['jobTitle'],
  },
};
