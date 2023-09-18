const {demo} = require("./index")

test('tests the demo script', () => {
    expect(demo()).toBe("demo");
});