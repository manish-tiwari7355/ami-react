// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'en-US',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
        {
          name: 'signup',
          path: '/user/signup',
          component: './user/signup',
        },
        {
          name: 'inviteUser',
          path: '/user/forgotpassword',
          component: './user/ForgotPassword',
        },
        {
          name: 'resetPassword',
          path: '/user/resetPassword',
          component: './user/ResetPassword',
        },
        {
          name: 'inviteUser',
          path: '/user/invitation',
          component: './user/acceptInvitation',
        },
      ],
    },
    {
      path: '/privacy-policy',
      name: 'privacyPolicy',
      component: './Policy',
    },

    {
      path: '/feedback',
      name: 'Quality-Program',
      icon: 'dashboard',
      component: './Feedback/feedback',
    },
    {
      path: '/',
      component: '../layouts/UserLayout',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          routes: [
            {
              path: '/',
              redirect: '/dashboard',
            },
            {
              path: '/dashboard',
              name: 'dashboard',
              icon: 'dashboard',
              component: './Dashboard',
            },
            {
              path: '/all-forms',
              name: 'all-forms',
              icon: 'table',
              routes: [
                {
                  name: 'clientReviewForm',
                  path: '/all-forms/clientReviewForm',
                  component: './AllForms',
                },
                // {
                //   name: 'FeedBackForm',
                //   path: '/all-forms/feedbackForm',
                //   component: './AllForms',
                // },
                {
                  name: 'mentalCapacityForm',
                  path: '/all-forms/mentalCapacityForm',
                  component: './AllForms',
                },
                {
                  name: 'riskAssessmentForm',
                  path: '/all-forms/riskAssessmentForm',
                  component: './AllForms',
                },
                {
                  name: 'riskAssessmentFormCoshh',
                  path: '/all-forms/riskAssessmentFormCoshh',
                  component: './AllForms',
                },

                {
                  name: 'movingAndHandlingForm',
                  path: '/all-forms/movingAndHandlingForm',
                  component: './AllForms',
                },
                {
                  name: 'supportPlanForm',
                  path: '/all-forms/supportPlanForm',
                  component: './AllForms',
                },

                {
                  name: 'telephoneMonitoring',
                  path: '/all-forms/telephoneMonitoring',
                  component: './AllForms',
                },
                {
                  name: 'careAndTreatment',
                  path: '/all-forms/careAndTreatment',
                  component: './AllForms',
                },
                {
                  name: 'qualityAssuranceMonitoring',
                  path: '/all-forms/qualityAssuranceMonitoring',
                  component: './AllForms',
                },
                {
                  name: 'staffSpotCheck',
                  path: '/all-forms/staffSpotCheckForm',
                  component: './AllForms',
                },
                {
                  name: 'staffPerformanceAppraisal',
                  path: '/all-forms/staffPerformanceAppraisal',
                  component: './AllForms',
                },
                {
                  name: 'careWorkerReview',
                  path: '/all-forms/careWorkerReview',
                  component: './AllForms',
                },
                {
                  name: 'applicationForm',
                  path: '/all-forms/applicationForm',
                  component: './AllForms',
                },
                {
                  name: 'care-worker-field-observer-view',
                  path: '/all-forms/careWorkerFieldObserver',
                  component: './AllForms',
                },
                {
                  name: 'view-mangement-moving-handling-competence-assessment',
                  path: '/all-forms/managementMovingHandlingCompetenceAssessment',
                  component: './AllForms',
                },
                {
                  name: 'view-management-competence-assessment',
                  path: '/all-forms/managementCompetenceAssessment',
                  component: './AllForms',
                },
                // {
                //   name: 'feedback-form',
                //   path: '/feedback/all',
                //   component: './Feedback/getFeedback',
                // },
              ],
            },
            // {
            //   path: '/feedback',
            //   name: 'Quality-Program',
            //   icon: 'dashboard',
            //   component: './Feedback/feedback',
            // },

            {
              path: '/forms',
              name: 'forms',
              icon: 'file-pdf',
              routes: [
                {
                  name: 'client-review-form',
                  path: '/forms/client-review',
                  component: './Forms/ClientReviewForm',
                },
                {
                  name: 'mental-capacity-form',
                  path: '/forms/mental-capacity',
                  component: './Forms/MentalCapacityForm',
                },
                {
                  name: 'risk-assessment-form',
                  path: '/forms/risk-assessment',
                  component: './Forms/RiskAssessmentForm',
                },
                {
                  name: 'risk-assessment-form-coshh',
                  path: '/forms/risk-assessment-form-coshh',
                  component: './Forms/RiskAssessmentFormCoshh',
                },
                {
                  name: 'moving-and-handling-form',
                  path: '/forms/moving-and-handling',
                  component: './Forms/MovingAndHandlingForm',
                },
                {
                  name: 'support-plan-form',
                  path: '/forms/support-plan',
                  component: './Forms/SupportForm',
                },

                {
                  name: 'telephone-monitoring-form',
                  path: '/forms/telephone-monitoring',
                  component: './Forms/TelephoneMonitoring',
                },
                {
                  name: 'care-and-treatment-form',
                  path: '/forms/care-and-treatment-form',
                  component: './Forms/CareAndConsentForm',
                },
                {
                  name: 'quality-assurance-monitoring-form',
                  path: '/forms/quality-assurance-monitoring-form',
                  component: './Forms/QualityAssuranceMonitoringForm',
                },
                {
                  name: 'staff-spot-check-form',
                  path: '/forms/staff-spot-check-form',
                  component: './Forms/StaffSpotCheckForm',
                },
                {
                  name: 'staff-performance-appraisal',
                  path: '/forms/staff-performance-appraisal',
                  component: './Forms/StaffPerformanceAppraisal',
                },
                {
                  name: 'care-worker-review',
                  path: '/forms/care-worker-review',
                  component: './Forms/CareWorkerReview',
                },
                {
                  name: 'application-form',
                  path: '/forms/application-form',
                  component: './Forms/ApplicationForm',
                },
                {
                  name: 'care-worker-field-observer',
                  path: '/forms/care-worker-field-observer',
                  component: './Forms/CareWorkerFieldObserver',
                },
                {
                  name: 'mangement-moving-handling-competence-assessment',
                  path: '/forms/management-moving-handling-competence-assessment',
                  component: './Forms/ManagementMovingHandlingCompetenceAssessment',
                },
                {
                  name: 'mangement-competence-assessment',
                  path: '/forms/management-competence-assessment',
                  component: './Forms/ManagementCompetencyAssessment',
                },
                // {
                //   name: ' Quality of Service Programme',
                //   path: '/forms/domiciliary-care-agency',
                //   component: './Forms/DomicilaryCareAgency',
                // },
                {
                  name: 'feedback form',
                  path: './Feedback/getAll',
                  component: './Feedback/getFeedback',
                },
              ],
            },
            {
              name: 'FeedBack Form',
              path: '/Feedback/getFeedback',
              icon: 'user',
              component: './Feedback/CustomerFeedback',
            },

            {
              path: '/user-profile',
              name: 'user-profile',
              component: './UserProfile',
              hideInMenu: true,
            },
            {
              path: '/form',
              name: 'form',
              hideInMenu: true,
              routes: [
                {
                  path: '/form/:type/:id',
                  name: 'monitoring-form',
                  component: './PrintMonitoringForm',
                  hideInMenu: true,
                },
                {
                  path: '/form/clientReviewForm/:serviceUserId/create',
                  name: 'form-create-clientReviewForm',
                  component: `./Forms/ClientReviewForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/mentalCapacityForm/:serviceUserId/create',
                  name: 'form-create-mentalCapacityForm',
                  component: `./Forms/MentalCapacityForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/movingAndHandlingForm/:serviceUserId/create',
                  name: 'form-create-movingAndHandlingForm',
                  component: `./Forms/MovingAndHandlingForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/riskAssessmentForm/:serviceUserId/create',
                  name: 'form-create-riskAssessmentForm',
                  component: `./Forms/RiskAssessmentForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/riskAssessmentFormCoshh/:serviceUserId/create',
                  name: 'form-create-riskAssessmentFormCoshh',
                  component: `./Forms/RiskAssessmentFormCoshh`,
                  hideInMenu: true,
                },
                {
                  path: '/form/supportPlanForm/:serviceUserId/create',
                  name: 'form-create-supportPlanForm',
                  component: `./Forms/SupportForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/telephoneMonitoring/:serviceUserId/create',
                  name: 'form-create-telephoneMonitoring',
                  component: `./Forms/TelephoneMonitoring`,
                  hideInMenu: true,
                },
                {
                  path: '/form/careAndTreatment/:serviceUserId/create',
                  name: 'form-create-careAndTreatment',
                  component: `./Forms/CareAndConsentForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/qualityAssuranceMonitoring/:serviceUserId/create',
                  name: 'form-create-qualityAssuranceMonitoring',
                  component: `./Forms/QualityAssuranceMonitoringForm`,
                  hideInMenu: true,
                },
                {
                  name: 'care-worker-field-observer',
                  path: '/form/careWorkerFieldObserver/:serviceUserId/create',
                  component: './Forms/CareWorkerFieldObserver',
                },
                {
                  path: '/form/staffSpotCheckForm/:serviceUserId/create',
                  name: 'form-create-staffSpotCheckForm',
                  component: `./Forms/StaffSpotCheckForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/staffPerformanceAppraisal/:serviceUserId/create',
                  name: 'form-create-staffPerformanceAppraisal',
                  component: `./Forms/StaffPerformanceAppraisal`,
                  hideInMenu: true,
                },
                {
                  path: '/form/careWorkerReview/:serviceUserId/create',
                  name: 'form-create-careWorkerReview',
                  component: `./Forms/CareWorkerReview`,
                  hideInMenu: true,
                },
                {
                  path: '/form/applicationForm/:serviceUserId/create',
                  name: 'form-create-applicationForm',
                  component: `./Forms/ApplicationForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/clientReviewForm/:formId/edit',
                  name: 'form-edit-clientReviewForm',
                  component: `./Forms/ClientReviewForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/careWorkerFieldObserver/:formId/edit',
                  name: 'form-edit-clientReviewForm',
                  component: './Forms/CareWorkerFieldObserver',
                  hideInMenu: true,
                },
                {
                  path: '/form/managementMovingHandlingCompetenceAssessment/:formId/edit',
                  name: 'form-edit-clientReviewForm',
                  component: './Forms/ManagementMovingHandlingCompetenceAssessment',
                  hideInMenu: true,
                },
                {
                  path: '/form/managementCompetenceAssessment/:formId/edit',
                  name: 'form-managementCompetenceAssessment',
                  component: './Forms/ManagementCompetencyAssessment',
                  hideInMenu: true,
                },
                {
                  path: '/form/mentalCapacityForm/:formId/edit',
                  name: 'form-edit-mentalCapacityForm',
                  component: `./Forms/MentalCapacityForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/movingAndHandlingForm/:formId/edit',
                  name: 'form-edit-movingAndHandlingForm',
                  component: `./Forms/MovingAndHandlingForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/riskAssessmentForm/:formId/edit',
                  name: 'form-edit-riskAssessmentForm',
                  component: `./Forms/RiskAssessmentForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/riskAssessmentFormCoshh/:formId/edit',
                  name: 'form-edit-riskAssessmentFormCoshh',
                  component: `./Forms/RiskAssessmentFormCoshh`,
                  hideInMenu: true,
                },
                {
                  path: '/form/supportPlanForm/:formId/edit',
                  name: 'form-edit-supportPlanForm',
                  component: `./Forms/SupportForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/telephoneMonitoring/:formId/edit',
                  name: 'form-edit-telephoneMonitoring',
                  component: `./Forms/TelephoneMonitoring`,
                  hideInMenu: true,
                },
                {
                  path: '/form/careAndTreatment/:formId/edit',
                  name: 'form-edit-careAndTreatment',
                  component: `./Forms/CareAndConsentForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/qualityAssuranceMonitoring/:formId/edit',
                  name: 'form-edit-qualityAssuranceMonitoring',
                  component: `./Forms/QualityAssuranceMonitoringForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/staffSpotCheckForm/:formId/edit',
                  name: 'form-edit-staffSpotCheckForm',
                  component: `./Forms/StaffSpotCheckForm`,
                  hideInMenu: true,
                },
                {
                  path: '/form/staffPerformanceAppraisal/:formId/edit',
                  name: 'form-edit-staffPerformanceAppraisal',
                  component: `./Forms/StaffPerformanceAppraisal`,
                  hideInMenu: true,
                },
                {
                  path: '/form/careWorkerReview/:formId/edit',
                  name: 'form-edit-careWorkerReview',
                  component: `./Forms/CareWorkerReview`,
                  hideInMenu: true,
                },
                {
                  path: '/form/applicationForm/:formId/edit',
                  name: 'form-edit-applicationForm',
                  component: `./Forms/ApplicationForm`,
                  hideInMenu: true,
                },
              ],
            },
            {
              path: '/service-user',
              name: 'service-user',
              icon: 'project',
              routes: [
                {
                  path: '/service-user/all',
                  name: 'service-user-all',
                  component: `./ServiceUser/AllServiceUser`,
                },
                {
                  path: '/service-user/create',
                  name: 'service-user-create',
                  component: `./ServiceUser/CreateServiceUser`,
                },
                {
                  path: '/service-user/:serviceUserId/edit',
                  name: 'service-user-update',
                  component: `./ServiceUser/CreateServiceUser`,
                  hideInMenu: true,
                },
                {
                  path: '/service-user/:id/view',
                  name: 'service-user-view',
                  component: `./ServiceUser/ViewServiceUser`,
                  hideInMenu: true,
                },
              ],
            },
            {
              path: '/staff',
              name: 'staff',
              icon: 'user',
              routes: [
                {
                  path: '/staff/list',
                  name: 'staff-list',
                  component: `./Staff/StaffList`,
                },
                {
                  authority: ['admin'],
                  path: '/staff/add',
                  name: 'staff-invite',
                  component: `./Staff/InviteStaff`,
                },
                {
                  path: '/staff/:staffId/view',
                  name: 'staff-profile',
                  component: `./Staff/ViewStaff`,
                  hideInMenu: true,
                },
                {
                  path: '/staff/:staffId/profile/update',
                  name: 'staff-profile-update',
                  component: './UserProfile',
                  hideInMenu: true,
                },
              ],
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
