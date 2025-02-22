const { login } = require("../app");

describe("Login Functionality", () => {
  test("should return success for valid credentials", () => {
    const result = login("user", "pass");
    expect(result.success).toBe(true);
    expect(result).toHaveProperty("token");
  });

  test("should fail for invalid credentials", () => {
    const result = login("user", "wrongpass");
    expect(result.success).toBe(false);
    expect(result).toHaveProperty("message", "Invalid credentials");
  });
});
