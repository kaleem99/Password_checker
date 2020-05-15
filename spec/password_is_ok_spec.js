const { passwordIsOk } = require("../src/password_checker");

describe("The function should return true or false if password fails or passes", function () {
  it("should test if password exist", function () {
    expect(passwordIsOk("")).toBe(false);
  });
  it("should test if password is greater than 8", function () {
    expect(passwordIsOk("jshhsbd")).toBe(false);
  });
  it("should test if password has atleast 1 lowercase", function () {
    expect(passwordIsOk("HGGHVddsqqs")).toBe(true);
  });
  it("should test if password has atleast 1 uppercase", function () {
    expect(passwordIsOk("jshhsADJHF")).toBe(true);
  });
  it("should test if password has atleast 1 number", function () {
    expect(passwordIsOk("jshhsgd133")).toBe(true);
  });
  it("should test if password has atleast 1 special character", function () {
    expect(passwordIsOk("jshhs@@aa")).toBe(true);
  });
  it("should test if strength is less then 3 or password is less than 8 characters", function () {
    expect(passwordIsOk("sgsAFA12aa")).toBe(true);
  });
});
