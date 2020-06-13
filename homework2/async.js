let asyncFunc1 = (msg) => 
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func1 : ${msg}`)
        }, 1000)
    })

let asyncFunc2 = (msg) => 
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func2 : ${msg}`)//resolve는 성공했을 때 반환값임 return값
        }, 1000)
    })

function promiseMain () {
    asyncFunc1('Hello').then((result) => {
        console.log(result)
        return asyncFunc2('world')
    }).then((result) => {
        console.log(result)
    })
}

async function asyncMain () {//async 함수 앞에 써줘야함.
    let result = await asyncFunc1('Hello') //async로 정의된 내부에서 await 사용 가능
    console.log(result)
    result = await asyncFunc2('world')
    console.log(result)
}

// promiseMain()
asyncMain()