// Variaveis?
// Dados de entrada?
// Dados de Saida??

const inputPergunta = document.getElementById("inputPergunta")
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.',
]


 


// clicar em fazer pergunta 
function fazerPergunta() {
  if(document.getElementById('inputPergunta').value == "") {
    alert("Digite sua pergunta")
    return
  }

  const pergunta = "<div>" + document.getElementById('inputPergunta') + "</div>"

  
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  console.log(respostas[numeroAleatorio])
  
  document.getElementById('resposta').innerHTML = respostas[numeroAleatorio]
}
