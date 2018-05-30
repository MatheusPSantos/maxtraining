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
    
        console.log(dia, hora);
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
