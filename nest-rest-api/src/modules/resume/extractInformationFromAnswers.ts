import { ChatCompletionCreateParams } from 'openai/resources';

export const extractInformationFromAnswers: ChatCompletionCreateParams.Function =
  {
    name: 'extractInformationFromAnswers',
    description:
      'Extract information about a CV based on text. If the data is not provided, set the value to empty string ("").',
    parameters: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          description: 'My email',
        },
        firstName: {
          type: 'string',
          description: 'My extracted first name',
        },
        lastName: {
          type: 'string',
          description: 'My extracted last name',
        },
        profilePicture: {
          type: 'string',
          description: 'My profile picture',
        },
        nationality: {
          type: 'string',
          description:
            'If not provided, find based on the language of the answers.',
        },
        linkedinUrl: {
          type: 'string',
          description: 'URL of my LinkedIn profile',
        },
        location: {
          type: 'string',
          description: 'My location',
        },
        phoneNumber: {
          type: 'string',
          description: 'My phone number',
        },
        summary: {
          type: 'string',
          description: 'Generate an 80 character summary for my CV.',
        },
        educations: {
          type: 'array',
          description: 'List of educations',
          items: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                description:
                  'Extract the field of study. For example: Computer Science, Electrical Engineering, etc.',
              },
              type: {
                type: 'string',
                description:
                  'Extract the type of education. For example: Bachelor, Master, etc.',
              },
              location: {
                type: 'string',
                description:
                  'Extract the address or location where the education took place. For example: University of California, Los Angeles, etc.',
              },
              startDate: {
                type: 'string',
                format: 'date-time',
              },
              endDate: {
                type: 'string',
                format: 'date-time',
              },
            },
            required: ['title', 'type', 'location', 'startDate', 'endDate'],
          },
        },
        experiences: {
          type: 'array',
          description: 'List of experiences',
          items: {
            type: 'object',
            properties: {
              position: {
                type: 'string',
                description:
                  'Extract the position. For example: Software Engineer, etc.',
              },
              startDate: {
                type: 'string',
                format: 'date-time',
              },
              endDate: {
                type: 'string',
                format: 'date-time',
              },
              company: {
                type: 'string',
                description:
                  'Extract the name of the company. For example: Google, etc.',
              },
              responsibilities: {
                type: 'string',
                description: 'Extract the responsibilities.',
              },
            },
            required: [
              'position',
              'startDate',
              'endDate',
              'company',
              'responsibilities',
            ],
          },
        },
        languages: {
          type: 'array',
          description: 'List of languages',
          items: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              isNative: {
                type: 'boolean',
              },
              reading: {
                type: 'string',
                description:
                  'Extract the level or reading. Must be of type A1,A2,B1,B2,C1,C2.',
              },
              listening: {
                type: 'string',
                description:
                  'Extract the level or listening. Must be of type A1,A2,B1,B2,C1,C2.',
              },
              speaking: {
                type: 'string',
                description:
                  'Extract the level or speaking. Must be of type A1,A2,B1,B2,C1,C2.',
              },
            },
          },
          required: ['name', 'isNative', 'reading', 'listening', 'speaking'],
        },
        digitalSkills: {
          description: `List of extacted digital skills.  EX: ['microsoft word', 'microsoft powerpoint']`,
          type: 'array',
          items: {
            type: 'string',
          },
        },
        technicalSkills: {
          description: `List of extracted technical skills.  EX: ['Kodimi', 'Testimi i softuerit','Simulimet kompjuterike']`,
          type: 'array',
          items: {
            type: 'string',
          },
        },
        softSkills: {
          description: `List of extracted soft skills. EX: ['Bashkepunimi','Puna ne grup','Komunikimi']`,
          type: 'array',
          items: {
            type: 'string',
          },
        },
        hobbies: {
          type: 'array',
          description: `List of extracted hobbies. EX: ['Te luaj ping ping','Te luaj futboll','Te shikoj filma']`,
          items: {
            type: 'string',
          },
        },
        certificates: {
          type: 'array',
          description: 'My certificates',
          items: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              receivedDate: {
                type: 'string',
                format: 'date-time',
              },
              expirationDate: {
                type: 'string',
                format: 'date-time',
              },
            },
            required: ['name', 'receivedDate', 'expirationDate'],
          },
        },
        volunteering: {
          type: 'array',
          description: 'My volunteering experiences',
          items: {
            type: 'object',
            properties: {
              role: {
                type: 'string',
              },
              organization: {
                type: 'string',
              },
            },
            required: ['role', 'organization'],
          },
        },
        publications: {
          type: 'array',
          description: 'My publications',
          items: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              link: {
                type: 'string',
              },
              releaseDate: {
                type: 'string',
                format: 'date-time',
              },
            },
            required: ['name', 'link', 'releaseDate'],
          },
        },
        drivingLicense: {
          type: 'string',
          enum: [
            'AM',
            'A1',
            'A2',
            'A',
            'B1',
            'BE',
            'C1',
            'C1E',
            'C',
            'CE',
            'D1',
            'D1E',
            'D',
            'DE',
          ],
          description: 'My driving license',
        },
      },
      required: [
        'email',
        'firstName',
        'lastName',
        'nationality',
        'profilePicture',
        'linkedinUrl',
        'location',
        'phoneNumber',
        'summary',
        'educations',
        'experiences',
        'languages',
        'digitalSkills',
        'softSkills',
        'technicalSkills',
        'hobbies',
        'certificates',
        'volunteering',
        'publications',
        'drivingLicense',
      ],
    },
  };
