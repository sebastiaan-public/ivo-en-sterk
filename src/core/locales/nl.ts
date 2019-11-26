export const nl = {
  language: 'Nederlands',
  components: {
    TheLoadingDialog: {
      loading: 'Wachtwoord aan het verifiëren, één moment geduld a.u.b. '
    },
    TheNavigationDrawer: {
      loggedInAsSuperAdmin: 'Super Admin',
      loggedInAsPremiumUser: 'Volledig Account',
      loggedInAsFreeUser: 'Ingelogd'
    }
  },
  events: {
    Login: {
      validateEmailMessage: 'Gebruik de link in de verificatie e-mail om je e-mail adres te bevestigen.',
      validateEmailButton: 'opnieuw verzenden'
    }
  },
  pages: {
    TermsAndConditionsPage: {
      router: {
        title: 'Voorwaarden Accepteren'
      },
      tos: {
        part1: 'Hier vind je onze',
        conditions: 'Algemene Voorwaarden',
        part2: 'en ons',
        privacyPolicy: 'Privacy Beleid',
        part3: '.',
        label: 'Ik ga akkoord met de voorwaarden en het privacy beleid.',
        warningMessage: 'Je moet de voorwaarden accepteren om verder te kunnen gaan!',
        accept: 'Ga Akkoord'
      }
    },    
    SignUpPage: {
      router: {
        title: 'Account aanmaken'
      },
      tos: {
        part1: 'Hier vind je onze',
        conditions: 'Algemene Voorwaarden',
        part2: 'en ons',
        privacyPolicy: 'Privacy Beleid',
        part3: '.',
        label: 'Ik ga akkoord met de voorwaarden en het privacy beleid.',
        warningMessage: 'Je moet de voorwaarden accepteren om verder te kunnen gaan!'
      },
      account: {
        labelBold: 'Optie 2',
        label: 'Maak een account aan met e-mail en wachtwoord:',
        button: 'Account aanmaken'
      },
      email: {
        label: 'E-mail',
        required: 'E-mailadres is verplicht',
        valid: 'Vul een geldig e-mailadres in'
      },
      password: {
        label: 'Wachtwoord',
        required: 'Wachtwoord is verplicht',
        valid: 'Wachtwoord moet tenminste 8 karakters lang zijn'
      },
      social: {
        labelBold: 'Optie 1',
        label: 'Gebruik een account bij de volgende services:',
        google: 'Log in met Google',
        microsoft: 'Log in met Microsoft'
      },
      other: {
        alreadyAccount: 'Heb je al een account?',
        login: 'Log in'
      },
      messages: {
        accountExists: 'Dit e-mailadres is reeds in gebruik. Probeer in te loggen.',
        loginButton: 'log in',
        verificationEmailSent: 'We hebben je een e-mail gestuurd om je e-mail adres te valideren. Gebruik de link in die e-mail om je account te activeren.',
        verificationEmailReminder: 'Vergeet niet je account te activeren m.b.v. de emaillink.'
      }
    },
    LoginPage: {
      router: {
        title: 'Inloggen'
      },
      account: {
        labelBold: 'Optie 2',
        label: 'Log in met e-mail en wachtwoord:',
        button: 'Inloggen'
      },
      email: {
        label: 'E-mail',
        required: 'E-mailadres is verplicht',
        valid: 'Vul een geldig e-mailadres in'
      },
      password: {
        label: 'Wachtwoord',
        required: 'Wachtwoord is verplicht'
      },
      social: {
        labelBold: 'Optie 1',
        label: 'Login met een account bij een van de volgende services:',
        google: 'Log in met Google',
        microsoft: 'Log in met Microsoft'
      },
      other: {
        noAccountYet: 'Heb je nog geen account?',
        signUp: 'Maak account aan',
        forgotPassword: 'Wachtwoord vergeten?',
        resetPassword: 'Herstel wachtwoord'
      },
      messages: {
        unknownAccount: 'Een account met dit e-mail adres bestaat niet.',
        signupButton: 'account aanmaken',
        invalidPassword: 'Het wachtwoord is niet correct.',
        resetPasswordButton: 'wachtwoord resetten',
        tooManyRequests: 'Je hebt te veel loginpogingen gedaan in een korte periode. Probeer het later opnieuw.'
      }
    },
    ResetPasswordPage: {
      router: {
        title: 'Wachtwoord herstellen'
      },
      p: 'Stuur me een e-mail om mijn wachtwoord te herstellen:',
      button: 'Verzend email',
      createdNewPassword: 'Wachtwoord opnieuw ingesteld?',
      login: 'Log in'
    },
    ActivationPage: {
      textBold: 'Account activeren',
      text: 'Gebruik de code in de e-mail om je account te activeren:',
      activationCode: {
        label: 'Activatie Code',
        required: 'The activatie code is vereist.',
        valid: 'The activatie code moet 36 karakters lang zijn.'
      },
      processing: 'Het verzoek wordt verwerkt. Als de code valide is dan wordt dit account spoedig aangepast.',
      button: 'Activeer'
    }
  }
}