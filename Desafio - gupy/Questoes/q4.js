function main() {
    const sp = 67836.43
    const rj = 36678.66
    const mg = 29229.88
    const es = 27165.48
    const outros = 19849.53
    const total = sp + rj + mg + es + outros

    console.log(`Valor total mensal da distribuidora = R$ ${total}\nPercentual de representação que cada estado:`)
    console.log(`São Paulo = ${saber_percentual(sp, total)}%`)
    console.log(`Rio de janeiro = ${saber_percentual(rj, total)}%`)
    console.log(`Minas Gerais = ${saber_percentual(mg, total)}%`)
    console.log(`Espiríto Santo= ${saber_percentual(es, total)}%`)
    console.log(`Outros = ${saber_percentual(outros, total)}%`)
}

function saber_percentual(v_por_estado, total) {
    const porcentagem = (v_por_estado * 100) / total
    return porcentagem.toFixed(2)
}

main()