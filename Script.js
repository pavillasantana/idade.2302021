function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ""
    var img = document.createElement ("img")
    img.setAttribute ("id", "foto")

    if (fsex [0].checked) {
        gênero = "Homem"
        if (idade >=0 && idade <10) {
            //Criança
            img.setAttribute ("src",'foto-homem criança.jpg')
            img.style.width = '250px'
            img.style.height = '250px'
            img.style.borderRadius = '125px'
            img.style.margin = '8px'

        } else if (idade <21){
            //Jovem
            img.setAttribute ("src","foto-homemjovem.jpg")
            img.style.width = '250px'
            img.style.height = '250px'
            img.style.borderRadius = '125px'
            img.style.margin = '8px'
        } else if (idade <50) {
            //Adulto
            img.setAttribute ("src","Homem Adulto.jpg")
            img.style.width = '250px'
            img.style.height = '250px'
            img.style.borderRadius = '125px'
            img.style.margin = '8px'
        } else if (idade <115){
            //Idoso
            img.setAttribute ("src","homem idoso.jpg")
            img.style.width = '250px'
            img.style.height = '250px'
            img.style.borderRadius = '125px'
            img.style.margin = '8px'
        } else (idade >115) 
            //Morto
        
    } else if (fsex[1].checked) {
        gênero = "mulher"
        if (idade >=0 && idade <10) {
            //Criança
            img.setAttribute ('src', "mulher criança.jpg")
            img.style.width = '250px'
            img.style.height = '250px'
            img.style.borderRadius = '125px'
            img.style.margin = '8px'
        } else if (idade <21){
            //Jovem
            img.setAttribute ('src',"mulher jovem.jpg")
            img.style.width = '250px'
            img.style.height = '250px'
            img.style.borderRadius = '125px'
            img.style.margin = '8px'
        } else if (idade <50) {
            //Adulto
            img.setAttribute('src', "mulher adulta,jpg")
            img.style.width = '250px'
            img.style.height = '250px'
            img.style.borderRadius = '125px'
            img.style.margin = '8px'
        } else if (idade <115){
            //Idoso
            img.setAttribute ('src', "mulher idosa.jpg")
            img.style.width = '250px'
            img.style.height = '250px'
            img.style.borderRadius = '125px'
            img.style.margin = '8px'
        } else (idade >115) 
            //Morto
        
    

    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)

    }
    }
}