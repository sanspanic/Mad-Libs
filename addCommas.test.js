const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("ok: is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("ok: 1234", () => {
    expect(addCommas(1234)).toBe("1,234");
  });

  test("ok: 234", () => {
    expect(addCommas(234)).toBe("234");
  });

  test("ok: -234", () => {
    expect(addCommas(-234)).toBe("-234");
  });

  test("ok: 234111", () => {
    expect(addCommas(234111)).toBe("234,111");
  });

  test("ok: 12341234123", () => {
    expect(addCommas(12341234123)).toBe("12,341,234,123");
  });

  test("ok: 6", () => {
    expect(addCommas(6)).toBe("6");
  });

  test("ok: -623253", () => {
    expect(addCommas(-12623253)).toBe("-12,623,253");
  });

  test("ok: -623253.23", () => {
    expect(addCommas(-623253.23)).toBe("-623,253.23");
  });

  test("ok: 2253.231", () => {
    expect(addCommas(2253.231)).toBe("2,253.231");
  });

  test("ok: -10", () => {
    expect(addCommas(-10)).toBe("-10");
  });

  test("ok: -5268", () => {
    expect(addCommas(-5268)).toBe("-5,268");
  });
});
