console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1] //'nome = carlos' 
console.log(nome)

const idade = args[1].split('=')[1] //'nome = carlos' 
console.log(idade)

console.log(`o nome é ${nome} e a idade é ${idade}`)

