/*
    Maxtraining
    Arquivo Javascript do site

    Aqui estão os códigos em javascript para a página institucional do site

    @author: Matheuspsantos
    @links: https://github.com/matheuspsantos
            https://facebook.com/matheus064
            matheuspereira8187@gmail.com
    2018-2019
*/

// código para diminuir o menu com a rolagem da página
$(document).on("scroll", function() {
    if($(document).scrollTop()>100) {
        $("header").removeClass("header").addClass("smallheader");
        var logo = document.getElementById('header-logo');
        logo.src = 'img/small-logo.svg';
    }
    else {
        $("header").removeClass("smallheader").addClass("header");
        var logo = document.getElementById('header-logo');
        logo.src="img/logo-alternativo.svg";
    }
});

// mudança no menu durante o scroll responsivo
$(document).on("scroll", function() {
    var screen = $("body").width();
    if(screen <= 768) {
        if($(document).scrollTop()>100){
            $("nav").removeClass("header_menu").addClass("header-menu-toggle");
        }
        else {
            $("nav").removeClass("header-menu-toggle").addClass("header_menu");
        }
    }
    else if(screen >= 769) {
        $("nav").removeClass("header-menu-toggle").addClass("header_menu");    }
});

// pegar o horário de funcionamento da academia
$(document).ready(
    function getFuncionamento() {
        var date = new Date();
        console.log(date);
    
        let dia = date.getDay();
        let hora = date.getHours();
    
        if(dia == 0 || dia == 6) {
            document.getElementById("horario-max").innerHTML = "Estamos Fechado!";
        }else {
            if(hora >= 6 && hora <= 22) {
                document.getElementById("horario-max").innerHTML = "Estamos Aberto!";
            }
            else {
                document.getElementById("horario-max").innerHTML = "Estamos Fechado!";
            }
        }
    }
);

// chamar o alerta na área do aluno
function chamarAlerta() {
    swal({
        title: "<h3>Escolha a plataforma do seu celular</h3",
        html:
        '<p>Alunos da Modalidade CROSSFIT</p>'
        +'<p align="center">'+
        '<a href="https://itunes.apple.com/br/app/tecnofit-box/id1256624538?mt=8"><img src="img/app-store.png"></a>'+
        '<a href="https://play.google.com/store/apps/details?id=br.com.tecnofit.tecnofitBox&hl=pt_BR"><img src="img/google-play.png"></a>'+'</p>'+
        '<br>'
        +'<p>Alunos da Modalidade PERSONALIZADA</p>'
        +'<p align="center">'+
        '<a href="https://itunes.apple.com/br/app/tecnofit/id1109478634?mt=8"><img src="img/app-store.png"></a>'+
        '<a href="https://play.google.com/store/apps/details?id=br.com.tecnofit.mobileapp&hl=pt_BR"><img src="img/google-play.png"></a>'+'</p>',
    })
}
// alerta de email enviado
function alertaEmail() {
    swal({
        title:"<h3>Seu E-mail enviado!</h3>",
        html: '<p>Seu e-mail foi enviado com sucesso<br>'+
        'entraremos em contato assim que pudermos.<br>Obrigado(a)!</p>'
    })
}

 // Initialize Firebase
var config = {
    apiKey: "AIzaSyAOhEaQLKQJXRQM3paEItHnUgLYG9nfiFE",
    authDomain: "maxtraining-contato.firebaseapp.com",
    databaseURL: "https://maxtraining-contato.firebaseio.com",
    projectId: "maxtraining-contato",
    storageBucket: "maxtraining-contato.appspot.com",
    messagingSenderId: "686899759897"
};
firebase.initializeApp(config);

// Reference message collection
var messagesRef = firebase.database().ref('messages');

// listener para o formulario
document.getElementById('maxContactForm').addEventListener('submit', submitForm);
// função que envia email
function submitForm(event) {
    event.preventDefault();
    // Pegando valores
    var name = getInputValue('form_name');
    var email = getInputValue('form_email');
    var message = getInputValue('form_text');

    // chamando a função de salvar mensagem
    saveMessage(name, email, message);

    // mostrar alerta
    alertaEmail();

    // limpar campos
    limparInputs('form_name');
    limparInputs('form_email');
    limparInputs('form_text');
}

// função para pegar os valores
function getInputValue(id){
    return document.getElementById(id).value;
}

// função que limpa os campos do formulario
function limparInputs(id){
    document.getElementById(id).value = '';
}

// salvar menssagem no firebase
function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message,
    });
}