import { coinFlip } from "../index";

describe("coinFlip", () => {
  it("should return 0 or 1", () => {
    for (let i = 0; i < 100; i++) {
      const result = coinFlip();
      expect([0, 1]).toContain(result);
    }
  });

  it("should return roughly equal numbers of 0s and 1s over many trials", () => {
    const trials = 10000;
    let zeros = 0;
    let ones = 0;
    for (let i = 0; i < trials; i++) {
      const result = coinFlip();
      if (result === 0) zeros++;
      else if (result === 1) ones++;
    }
    const ratio = zeros / ones;
    expect(ratio).toBeGreaterThan(0.9);
    expect(ratio).toBeLessThan(1.1);
  });
});
