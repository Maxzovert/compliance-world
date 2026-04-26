const MESSAGE_BY_CODE = {
  'app/firebase-not-configured': 'Auth service is not configured.',
  'auth/invalid-input': 'Please fill all required fields correctly.',
  'auth/unauthenticated': 'Please sign in to continue.',
  'auth/invalid-token': 'Your session has expired. Please sign in again.',
  'auth/user-not-found': 'No account found with this email.',
  'auth/invalid-email': 'Enter a valid email address.',
  'auth/user-disabled': 'This account has been disabled.',
  'auth/wrong-password': 'Incorrect password.',
  'auth/invalid-credential': 'Invalid email or password.',
  'auth/use-google-login': 'This account uses Google sign-in. Continue with Google.',
  'auth/email-already-in-use': 'An account already exists with this email.',
  'auth/weak-password': 'Choose a stronger password (at least 8 characters).',
  'auth/popup-closed-by-user': 'Sign-in was cancelled.',
  'auth/popup-blocked': 'Popup was blocked. Allow popups for this site and try again.',
  'auth/network-request-failed': 'Network error. Check your connection.',
  'auth/too-many-requests': 'Too many attempts. Please try again later.',
  'auth/operation-not-allowed': 'This action is not enabled on the current auth backend.',
  'auth/firebase-admin-not-configured': 'Google login is not configured on the server.',
  'auth/account-exists-with-different-credential':
    'An account already exists with the same email using a different sign-in method.',
}

export function formatAuthError(code, fallback = 'Something went wrong. Please try again.') {
  if (!code) return fallback
  return MESSAGE_BY_CODE[code] ?? fallback
}
