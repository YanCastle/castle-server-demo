import Test from "../controller/Test";

function timeout(time: number) {
    return new Promise((s) => {
        setTimeout(s, time)
    })
}
export async function time(ctx: any, next) {
    let r = Math.random() * 1000;
    // await timeout(r)
    // ctx.body = { a: r }
    let f = new Test(ctx)
    ctx.body = await f.test()
    next()
}
