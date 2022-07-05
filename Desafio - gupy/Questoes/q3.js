const faturamentos = [
    {
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

function main () {
    maior_e_menor_faturamento()
    dias_q_ultrapassa_media_mensal()
}

function maior_e_menor_faturamento() {
    let menor = faturamentos[0].valor
    let maior = faturamentos[0].valor
    let diaDoMenor = 0
    let diaDoMaior = 0
    faturamentos.map((faturamento) => {
        if(faturamento.valor !== 0) {
            if(faturamento.valor < menor){
                menor = faturamento.valor
                diaDoMenor = faturamento.dia
            }

            if(faturamento.valor > maior) {
                maior = faturamento.valor
                diaDoMaior = faturamento.dia
            }
        }
    })
    console.log(`\nMenor faturamento ocorreu no dia ${diaDoMenor} com o total de R$ ${menor}`)
    console.log(`Maior faturamento ocorreu no dia ${diaDoMaior} com o total de R$ ${maior}`)
}

function dias_q_ultrapassa_media_mensal() {
    const dias = []
    const media = media_mensal()
    faturamentos.map((faturamento) => {
        if(faturamento.valor !== 0) {
            if(faturamento.valor > media) {
                dias.push(faturamento.dia)
            }
        }
    })

    console.log(`\nForam ${dias.length} dias em que o valor de faturamento diário foi superior à média mensal`)
    console.log(`Foram os seguintes dias: ${dias}\n`)

}

function media_mensal() {
    let soma_dias_utils = 0
    let soma_dos_faturamentos = 0

    faturamentos.map((faturamento) => {
        if(faturamento.valor !== 0) {
            soma_dos_faturamentos += faturamento.valor
            soma_dias_utils++
        }
    })

    const media = soma_dos_faturamentos / soma_dias_utils

    return media
}


main()