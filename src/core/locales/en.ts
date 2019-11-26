export const en = {
  language: 'English',
  components: {
    TheLoadingDialog: {
      loading: 'Loading'
    },
    TheNavigationDrawer: {
      loggedInAsSuperAdmin: 'Super Admin',
      loggedInAsPremiumUser: 'Premium Account',
      loggedInAsFreeUser: 'Logged in'
    }
  },
  events: {
    Login: {
      validateEmailMessage: 'Please us the link in the verification email to confirm your email address.',
      validateEmailButton: 'resend'
    }
  },
  pages: {
    TermsAndConditionsPage: {
      router: {
        title: 'Accepting our Terms'
      },
      tos: {
        part1: 'Here you can find our',
        conditions: 'Terms and Conditions',
        part2: 'and our',
        privacyPolicy: 'Privacy Policy',
        part3: '.',
        label: 'I agree to the terms and the privacy policy.',
        warningMessage: 'You will have to accept the conditions listed above in order to continue!',
        accept: 'Accept'
      }
    },    
    SignUpPage: {
      router: {
        title: 'Sign Up'
      },
      tos: {
        part1: 'Here you can find our',
        conditions: 'Terms and Conditions',
        part2: 'and our',
        privacyPolicy: 'Privacy Policy',
        part3: '.',
        label: 'I agree to the terms and the privacy policy.',
        warningMessage: 'You will have to accept the conditions listed above in order to continue!'
      },
      account: {
        labelBold: 'Option 2',
        label: 'Create an account with email and password:',
        button: 'Sign Up'
      },
      email: {
        label: 'Email',
        required: 'Email is required',
        valid: 'Please enter a valid email address'
      },
      password: {
        label: 'Password',
        required: 'Password is required',
        valid: 'Password must be at least 8 characters long'
      },
      social: {
        labelBold: 'Option 1',
        label: 'Sign up using your account at one of the following services:',
        google: 'Sign up with Google',
        microsoft: 'Sign up with Microsoft'
      },
      other: {
        alreadyAccount: 'Do you already have an account?',
        login: 'Log in'
      },
      messages: {
        accountExists: 'This e-mail address is already in use. Try logging in.',
        loginButton: 'login',
        verificationEmailSent: 'We have sent you an e-mail to validate your email address. Use the link in the email to activate your account.',
        verificationEmailReminder: 'Please activate your account using the activation email we sent you.'
      }
    },
    LoginPage: {
      router: {
        title: 'Log in'
      },
      account: {
        labelBold: 'Option 2',
        label: 'Log in with email and password:',
        button: 'login'
      },
      email: {
        label: 'E-mail',
        required: 'Email is required',
        valid: 'Please enter a valid email address'
      },
      password: {
        label: 'Password',
        required: 'Password is required'
      },
      social: {
        labelBold: 'Option 1',
        label: 'Log in using an account with one of the following services:',
        google: 'Log in with Google',
        microsoft: 'Log in with Microsoft'
      },
      other: {
        noAccountYet: 'You have not got an account yet?',
        signUp: 'Sign Up',
        forgotPassword: 'Forgot your password?',
        resetPassword: 'Recover your password'
      },
      messages: {
        unknownAccount: 'An account with this email address does not exist.',
        signupButton: 'sign up',
        invalidPassword: 'The password is incorrect.',
        resetPasswordButton: 'reset password',
        tooManyRequests: 'You have made too many login attempts within a short period. Please try again later.'
      }
    },
    ResetPasswordPage: {
      router: {
        title: 'Restore password'
      },
      p: 'Send me an email to reset my password:',
      button: 'Send email',
      createdNewPassword: 'Have you reset your password?',
      login: 'Log in'
    },
    ActivationPage: {
      textBold: 'Activating your account',
      text: 'Please use the code from your activation email to activate your account:',
      activationCode: {
        label: 'Activation Code',
        required: 'The activation code is required.',
        valid: 'The activation code should be 36 characters long.'
      },
      processing: 'Your request is being processed. Your account type will be changed soon if the supplied code is valid.',
      button: 'Activate'
    }
  }
}