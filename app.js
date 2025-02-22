// A simple login function for demonstration purposes
function login(username, password) {
  // For demo: login succeeds if username is "user" and password is "pass"
  if (username === "user" && password === "pass") {
    return { success: true, token: "abcdef123456" };
  }
  return { success: false, message: "Invalid credentials" };
}

module.exports = { login };
