import base32 from "../base32";
import * as crypto from "crypto";

describe("base32", () => {
  describe("toBase32", () => {
    it("should return 'ORSXG5A=' for 'test'", () => {
      expect(base32.toBase32("test")).toBe("ORSXG5A=");
    });

    it("should return 'MRUXG5DSMVXHI2LD' for 'distrentic'", () => {
      expect(base32.toBase32("distrentic")).toBe("MRUXG5DSMVXHI2LD");
    });

    it("should return 'MJQXGZJTGI======' for 'base32'", () => {
      expect(base32.toBase32("base32")).toBe("MJQXGZJTGI======");
    });

    it("should return 'IJAVGRJTGI======' for 'BASE32'", () => {
      expect(base32.toBase32("BASE32")).toBe("IJAVGRJTGI======");
    });

    it("should return 'MJAXGRJTGI======' for 'bAsE32'", () => {
      expect(base32.toBase32("bAsE32")).toBe("MJAXGRJTGI======");
    });
  });

  describe("fromBase32", () => {
    it("should return 'test' for 'ORSXG5A='", () => {
      expect(base32.fromBase32("ORSXG5A=").toString("utf-8")).toBe("test");
    });

    it("should return 'distrentic' for 'MRUXG5DSMVXHI2LD'", () => {
      expect(base32.fromBase32("MRUXG5DSMVXHI2LD").toString("utf-8")).toBe("distrentic");
    });

    it("should return 'base32' for 'MJQXGZJTGI======'", () => {
      expect(base32.fromBase32("MJQXGZJTGI======").toString("utf-8")).toBe("base32");
    });

    it("should return 'BASE32' for 'IJAVGRJTGI======'", () => {
      expect(base32.fromBase32("IJAVGRJTGI======").toString("utf-8")).toBe("BASE32");
    });

    it("should return 'bAsE32' for 'MJAXGRJTGI======'", () => {
      expect(base32.fromBase32("MJAXGRJTGI======").toString("utf-8")).toBe("bAsE32");
    });
  });

  it("should decode what it encoded", () => {
    const data = crypto.randomBytes(20);
    const encoded = base32.toBase32(data);
    const decoded = base32.fromBase32(encoded);

    expect(decoded).toEqual(data);
  });
});