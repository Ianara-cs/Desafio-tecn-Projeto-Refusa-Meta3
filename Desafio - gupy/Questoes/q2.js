const input = require('prompt-sync')()

function main() {
    const number = Number(input("Digite um número: "))
    const v = []
    let i = 0

    while(true) {
        let n = fibonacci(i)
        v.push(fibonacci(i))
        if(n > number) {
            break
        }
        i = i + 1
    }

    const pertence = v.some((pertence) => pertence === number)
    if(!pertence) {
        console.log("Não Pertence a sequência fibonacci")
    }else {
        console.log("Pertence a sequência fibonacci ")
    }
}

function fibonacci(n) {
    if(n === 1) {
        return 1
    }else if (n === 2) {
        return 1
    }else if (n === 0) {
        return 0
    }else {
        return fibonacci(n-1) + fibonacci(n - 2)
    }
}

main()