const { passwordIsValid } = require("../src/password_checker");

describe("The function should throw errors if the password is not valid", function () {
  it("should test if the password exist", function () {
    expect(function () {
      passwordIsValid("");
    }).toThrow(new Error("password should exist"));
  });
  it("should have more than 8 letters", function () {
    expect(function () {
      passwordIsValid("umuzi");
    }).toThrow(new Error("password should be longer than 8 characters"));
  });
  it("should have atleast 1 lowercase letter", function () {
    expect(function () {
      passwordIsValid("AAAA12313#");
    }).toThrow(new Error("password should have atleast one lowercase letter"));
  });
  it("should have atleast 1 uppercase letter", function () {
    expect(function () {
      passwordIsValid("1s@#afgva");
    }).toThrow(new Error("password should have atleast one uppercase letter"));
  });
  it("should have atleast 1 number", function () {
    expect(function () {
      passwordIsValid("As@#afgva");
    }).toThrow(new Error("password should have atleast one number"));
  });
  it("should have atleast 1 special character", function () {
    expect(function () {
      passwordIsValid("As12afgva");
    }).toThrow(new Error("password should have atleast one special character"));
  });
})