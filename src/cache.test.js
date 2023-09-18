const {cache} = require("./cache")

test('cache', () => {
    let func = cache((a,b,c)=>{
        return {};
    });

    let res = func(1,2,3);
    expect(res).toBe(func(1,2,3));
    expect(res === func(2,3,4)).toBe(false);

    func = cache((min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    });

    res = func(1,10);
    expect(res).toBe(func(1,5));
    expect(func(2,100) !== res).toBe(true)
});