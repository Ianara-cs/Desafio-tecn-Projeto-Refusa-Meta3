
function main() {
    const palavra = 'sucesso'
    console.log(inverter_Palavra(palavra))
}

function inverter_Palavra(texto){
    let nova_palavra = ''

    for(let i = texto.length - 1; i >= 0; i--){
        nova_palavra += texto[i]
    }
    return nova_palavra
}

main()