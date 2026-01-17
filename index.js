function createLoginTracker(userInfo) {
  // attemptCount tracks WRONG attempts only
  let attemptCount = 0;
  let isLocked = false;

  // inner arrow function (closure)
  return (passwordAttempt) => {
    // If already locked, always locked
    if (isLocked) {
      return "Account locked due to too many failed login attempts";
    }

    // If correct password, succeed immediately
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    // Otherwise: wrong password
    attemptCount += 1;

    // If they have reached 3 wrong attempts, lock after returning attempt 3 message
    if (attemptCount >= 3) {
      isLocked = true;
    }

    return `Attempt ${attemptCount}: Login failed`;
  };
}

module.exports = { createLoginTracker };
