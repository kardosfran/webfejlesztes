/*hamburger menü*/

function hamburger(){
    let x = document.getElementById("links");
    if (x.style.display==="block") {
        x.style.display="none";
    }
    else {
        x.style.display="block";
    }
}
document.getElementById("hambi").addEventListener("click",hamburger);


/*flipcard*/

if(document.getElementById("card1")){
    const card=document.getElementById("card1");
    card.addEventListener("click",flipCard);
}

function flipCard(){
    const card=document.getElementById("card1");
    card.classList.toggle("flipCard");
}

if(document.getElementById("card2")){
    const card=document.getElementById("card2");
    card.addEventListener("click",flipCard2);
    }
    
function flipCard2(){
    const card=document.getElementById("card2");
    card.classList.toggle("flipCard");
}

if(document.getElementById("card3")){
    const card=document.getElementById("card3");
    card.addEventListener("click",flipCard3);
    }
    
function flipCard3(){
    const card=document.getElementById("card3");
    card.classList.toggle("flipCard");
}

if(document.getElementById("card4")){
    const card=document.getElementById("card4");
    card.addEventListener("click",flipCard4);
    }
    
function flipCard4(){
    const card=document.getElementById("card4");
    card.classList.toggle("flipCard");
}


/*quiz*/

if( document.getElementById("eredmeny")){
    document.getElementById("eredmeny").addEventListener("click",feldolgoz);
}

function feldolgoz(){
    console.log("hello");
    let A=0
    let B=0
    let C=0
    let D=0

    const nevek = ["1kerdes","2kerdes","3kerdes","4kerdes","5kerdes","6kerdes","7kerdes","8kerdes"]

    for (let i=0;i<8;i++){
        
            const gombok=document.getElementsByName(nevek[i]);

            for(let j=0; j<4; j++){
                
                if(gombok[j].checked){
                   
                    switch(j){
                        case 0: A++;
                        break;
                        case 1: B++;
                        break;
                        case 2: C++;
                        break;
                        case 3: D++;
                        break;
                    }
                }
            }

    }
    
    if(A>=B && A>=C && A>=D){
        document.getElementById("roger").classList.add("lathato");
        document.getElementById("kerdes").classList.add("rejtett");
    }
    else if(B>=C && B>=D){
        document.getElementById("nadal").classList.add("lathato")
        document.getElementById("kerdes").classList.add("rejtett");
    }
    else if(C>=D){
        document.getElementById("nick").classList.add("lathato")
        document.getElementById("kerdes").classList.add("rejtett");
    }
    else{
        document.getElementById("serena").classList.add("lathato")
        document.getElementById("kerdes").classList.add("rejtett");
    }

    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    })
}

/*validálás*/

if(document.getElementById("tudas")){
$("#tudas").validate({
    rules: {
        nyertesek: "required",
        igaze: "required",
        edesseg: "required",
        datum: "required",
        mikor:"required",
        email:{
            required:true,
            email:true
        },
        tel:{
            required:true,
            minlength:10,
            maxlength:11
        }

    },
    messages:{
        nyertesek: "Ezt a mezőt kötelező kitölteni!",
        igaze: "Ezt a mezőt kötelező kitölteni!",
        edesseg: "Ezt a mezőt kötelező kitölteni!",
        datum: "Ezt a mezőt kötelező kitölteni!",
        mikor:"Ezt a mezőt kötelező kitölteni!",
        email:{
            required:"Ezt a mezőt kötelező kitölteni!",
            email:"Létező e-mail címet adjon meg!"
        },
        tel:{
            required:"Ezt a mezőt kötelező kitölteni!",
            minlength:"Túl kevés karakter!",
            maxlength:"Túl sok karakter!",
        }
    },
    errorPlacement:function(error,element){
        error.appendTo(element.parents(".tesztkerdes"));
    },
    submitHandler: function() {
        let pontok = 0
        if($("select#nyertesek").val()=="martina"){
            pontok++;
        }
        if($("input[type=radio][name=igaze]:checked").val()=="igaz"){
            pontok++;
        }
        if($("input[name=edesseg]").val()=="tejszínes eper"){
            pontok++;
        }
        if($("input[name=nyert1]").is(":checked")){
            pontok--;
        }
        if($("input[name=nyert2]").is(":checked")){
            pontok++;
        }
        if($("input[name=nyert3]").is(":checked")){
            pontok++;
        }
        let d = new Date($("input[name=datum]").val());

        let nap=d.getDate();
        let honap=d.getMonth()+1;
        let ev=d.getFullYear();
    
        if(nap==14 && honap==7 && ev==2024){
            pontok++;
        }

        if($("input[type=radio][name=mikor]:checked").val()=="1877"){
            pontok++;
        }
        alert(`A pontjai száma: 7/${pontok}`)
    }

});
}


/*galéria*/

$(document).ready(function() {

    $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '60px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            }
        ]
    });


});