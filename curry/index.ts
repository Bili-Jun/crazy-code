// 一行代码实现函数柯里化
const curry = (fn: (...params) => any, args = [] as number[]) => 
  (..._args) => ((a: number[]) => a.length === fn.length ?
    fn(...a) : curry(fn, a))([...args, ..._args])

// example
function test (a, b) {
  console.log(a + b)
}

const currying = curry(test)
currying(1)(2)
// 3