import  sum from "../modules/app"

test("add number", () => {
    expect(sum(2, 2)).toBe(4);
})