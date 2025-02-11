import React from 'react';
import { useTranslation } from 'react-i18next';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import Breadcrumb from 'src/components/common/Breadcrumb/Breadcrumb';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import PrivateRoute from 'src/components/router/PrivateRoute';
import PublicRoute from 'src/components/router/PublicRoute';
import AuthBackground from 'src/layouts/AuthBackground/AuthBackground';
import PageWithNavigation from 'src/layouts/PageWithNavigation/PageWithNavigation';
import ProfileSettingsWithNavigation from 'src/layouts/ProfileSettingsWithNavigation/ProfileSettingsWithNavigation';
import ChangePassword from 'src/screens/ChangePassword/ChangePassword';
import ConfirmUser from 'src/screens/ConfirmUser/ConfirmUser';
import CoverLetterQuestionnaire from 'src/screens/CoverLetterQuestionnaire/CoverLetterQuestionnaire';
import ForgotPassword from 'src/screens/ForgotPassword/ForgotPassword';
import Home from 'src/screens/Home/Home';
import InterviewTips from 'src/screens/InterviewTips/InterviewTips';
import JobDetails from 'src/screens/JobDetails/JobDetails';
import Jobs from 'src/screens/Jobs/Jobs';
import Login from 'src/screens/Login/Login';
import MyCoverLetter from 'src/screens/MyCoverLetter/MyCoverLetter';
import MyCoverLetters from 'src/screens/MyCoverLetters/MyCoverLetters';
import MyResume from 'src/screens/MyResume/MyResume';
import MyResumes from 'src/screens/MyResumes/MyResumes';
import NotFound from 'src/screens/NotFound/NotFound';
import PersonalInfo from 'src/screens/PersonalInfo/PersonalInfo';
import ResetPassword from 'src/screens/ResetPassword/ResetPassword';
import ResumeDetail from 'src/screens/ResumeDetail/ResumeDetail';
import ResumeQuestionnaire from 'src/screens/ResumeQuestionnaire/ResumeQuestionnaire';
import Signup from 'src/screens/Signup/Signup';
import SkillsAndHobbies from 'src/screens/SkillsAndHobbies/SkillsAndHobbies';
import TrainingArticles from 'src/screens/TrainingArticles/TrainingArticles';
import TrainingVideos from 'src/screens/TrainingVideos/TrainingVideos';

import { Route } from './enums';

const Router: React.FC = () => {
  const { isFetching } = useGetProfile();
  const { t } = useTranslation('translation', { keyPrefix: 'breadcrumb' });

  if (isFetching) {
    return <LoadingFullPage />;
  }

  const router = createHashRouter([
    {
      element: <PrivateRoute />,
      children: [
        {
          path: Route.ROOT,
          element: <PageWithNavigation />,
          children: [
            {
              path: Route.HOME,
              element: <Home />,
            },
            {
              path: Route.RESUMES,
              element: <MyResumes />,
              handle: {
                crumb: () => (
                  <Breadcrumb
                    crumbs={[
                      {
                        to: '#',
                        children: t('resumes'),
                      },
                    ]}
                  />
                ),
              },
            },
            {
              path: Route.COVER_LETTERS,
              element: <MyCoverLetters />,
              handle: {
                crumb: () => (
                  <Breadcrumb
                    crumbs={[
                      {
                        to: '#',
                        children: t('coverLetters'),
                      },
                    ]}
                  />
                ),
              },
            },
            {
              path: Route.COVER_LETTERS_DETAILS,
              element: <MyCoverLetter />,
              handle: {
                crumb: () => (
                  <Breadcrumb
                    crumbs={[
                      {
                        to: Route.COVER_LETTERS,
                        children: t('coverLetters'),
                      },
                      {
                        to: '#',
                        children: t('coverLetterDetails'),
                      },
                    ]}
                  />
                ),
              },
            },
            {
              path: Route.JOBS,
              element: <Jobs />,
              handle: {
                crumb: () => (
                  <Breadcrumb
                    crumbs={[
                      {
                        to: '#',
                        children: t('jobs'),
                      },
                    ]}
                  />
                ),
              },
            },
            {
              path: Route.JOB_DETAILS,
              element: <JobDetails />,
              handle: {
                crumb: () => (
                  <Breadcrumb
                    crumbs={[
                      {
                        to: Route.JOBS,
                        children: t('jobs'),
                      },
                      {
                        to: '#',
                        children: t('jobDetails'),
                      },
                    ]}
                  />
                ),
              },
            },
            {
              path: Route.TRAINING_VIDEOS,
              element: <TrainingVideos />,
              handle: {
                crumb: () => (
                  <Breadcrumb
                    crumbs={[
                      {
                        to: '#',
                        children: t('trainingVideos'),
                      },
                    ]}
                  />
                ),
              },
            },
            {
              path: Route.TRAINING_ARTICLES,
              element: <TrainingArticles />,
              handle: {
                crumb: () => (
                  <Breadcrumb
                    crumbs={[
                      {
                        to: '#',
                        children: t('trainingArticles'),
                      },
                    ]}
                  />
                ),
              },
            },
            {
              path: Route.PROFILE_SETTINGS,
              element: <ProfileSettingsWithNavigation />,
              children: [
                {
                  path: Route.PERSONAL_INFO,
                  element: <PersonalInfo />,
                  handle: {
                    crumb: () => (
                      <Breadcrumb
                        crumbs={[
                          {
                            to: '#',
                            children: t('personalInfo'),
                          },
                        ]}
                      />
                    ),
                  },
                },
                {
                  path: Route.SKILLS_AND_HOBBIES,
                  element: <SkillsAndHobbies />,
                  handle: {
                    crumb: () => (
                      <Breadcrumb
                        crumbs={[
                          {
                            to: '#',
                            children: t('skillsAndHobbies'),
                          },
                        ]}
                      />
                    ),
                  },
                },
                {
                  path: Route.CHANGE_PASSWORD,
                  element: <ChangePassword />,
                  handle: {
                    crumb: () => (
                      <Breadcrumb
                        crumbs={[
                          {
                            to: '#',
                            children: t('changePassword'),
                          },
                        ]}
                      />
                    ),
                  },
                },
                {
                  path: Route.MY_RESUME,
                  element: <MyResume />,
                  handle: {
                    crumb: () => (
                      <Breadcrumb
                        crumbs={[
                          {
                            to: '#',
                            children: t('myResume'),
                          },
                        ]}
                      />
                    ),
                  },
                },
              ],
            },
            {
              path: Route.COVER_LETTER_QUESTIONNAIRE,
              element: <CoverLetterQuestionnaire />,
              handle: {
                crumb: () => (
                  <Breadcrumb
                    crumbs={[
                      {
                        to: Route.COVER_LETTERS,
                        children: t('coverLetters'),
                      },
                      {
                        to: '#',
                        children: t('coverLetterWizard'),
                      },
                    ]}
                  />
                ),
              },
            },
            {
              path: Route.RESUME_QUESTIONNAIRE,
              element: <ResumeQuestionnaire />,
            },
            {
              path: Route.JOB_INTERVIEW_TIPS,
              element: <InterviewTips />,
              handle: {
                crumb: () => (
                  <Breadcrumb
                    crumbs={[
                      {
                        to: Route.RESUMES,
                        children: t('resumes'),
                      },
                      {
                        to: '#',
                        children: t('interviewTips'),
                      },
                    ]}
                  />
                ),
              },
            },
            {
              path: Route.RESUME_DETAILS,
              element: <ResumeDetail />,
              handle: {
                crumb: () => (
                  <Breadcrumb
                    crumbs={[
                      {
                        to: Route.RESUMES,
                        children: t('resumes'),
                      },
                      {
                        to: '#',
                        children: t('resumeDetails'),
                      },
                    ]}
                  />
                ),
              },
            },
          ],
        },
      ],
    },
    {
      element: <PublicRoute />,
      path: Route.ACCESS,
      children: [
        {
          path: Route.ACCESS,
          element: <AuthBackground />,
          children: [
            {
              element: <Login />,
              path: Route.LOGIN,
            },
            {
              element: <Signup />,
              path: Route.SIGNUP,
            },
            {
              element: <ForgotPassword />,
              path: Route.FORGOT_PASSWORD,
            },
            {
              element: <ResetPassword />,
              path: Route.RESET_PASSWORD,
            },
            {
              element: <ConfirmUser />,
              path: Route.CONFIRM_USER,
            },
          ],
        },
      ],
    },
    {
      element: <NotFound />,
      path: '*',
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
