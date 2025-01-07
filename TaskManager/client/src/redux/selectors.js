import { createSelector } from 'reselect';

// Basic selectors
const selectAuthState = state => state.auth;

export const selectAuth = createSelector(
    [selectAuthState],
    (auth) => {
      // Perform some transformation or return a new object
      return {
        ...auth,
        isAuthenticated: !!auth.currentUser
      };
    }
  );
  
  export const selectCurrentUser = createSelector(
    [selectAuth],
    (auth) => {
      // Return only the currentUser object or null
      return auth.currentUser ? { ...auth.currentUser } : null;
    }
  );