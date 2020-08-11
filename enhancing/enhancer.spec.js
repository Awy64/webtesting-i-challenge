const enhancer = require('./enhancer.js');

describe('enhancer', () => {
  describe("repair", () => {
    it('should returns a new item to 100% durability', () => {
    const item = {name: "item", durability: 40, enhancement: 0}
    const expected = {name: "item", durability: 100, enhancement: 0}
    expect(enhancer.repair(item)).toStrictEqual(expected)
    })
  })
  describe("success", () => {
    it('on success should imporve the enhancment level by one.', () => {
    const item = {name: "item", durability: 40, enhancement: 6}
    const expected = {name: "item", durability: 40, enhancement: 7}
    expect(enhancer.success(item)).toStrictEqual(expected)
    }),
    it("will not increase enhancment level past 20", () => {
      const item = {name: "item", durability: 40, enhancement: 20}
    const expected = {name: "item", durability: 40, enhancement: 20}
    expect(enhancer.success(item)).toStrictEqual(expected)
    })
  })
  describe('fail', () => {
    it('will decrease durability by 5 if enhancment lvl is lower then 15', () => {
      const item = {name: "item", durability: 40, enhancement: 6}
      const expected = {name: "item", durability: 35, enhancement: 6}
      expect(enhancer.fail(item)).toStrictEqual(expected)
    }),
    it('will decrease duarbility by 10 if enhancment lvl is 15', () => {
      const item = {name: "item", durability: 40, enhancement: 15}
      const expected = {name: "item", durability: 30, enhancement: 15}
      expect(enhancer.fail(item)).toStrictEqual(expected)
    }),
    it('will decrease duarbility by 10 and enhancment by 1 if enhancment is over 16', () => {
      const item = {name: "item", durability: 40, enhancement: 16}
      const expected = {name: "item", durability: 30, enhancement: 15}
      expect(enhancer.fail(item)).toStrictEqual(expected)
    })
  })
  describe('get', () => {
    it('will not change the name if enhancment is 0', () => {
      const item = {name: "item", durability: 40, enhancement: 0}
      const expected = {name: "item", durability: 40, enhancement: 0}
      expect(enhancer.get(item)).toStrictEqual(expected)
    })
    it('will change the name with a + and enhancment level ie +7', () => {
      const item = {name: "item", durability: 40, enhancement: 7}
      const expected = {name: "item +7", durability: 40, enhancement: 7}
      expect(enhancer.get(item)).toStrictEqual(expected)
    })
  })
})
