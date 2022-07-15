'use null';

const btnPortLang = document.querySelector('.li--port');
const btnEngLang = document.querySelector('.li--eng');
const divText = document.querySelector('.div-port-text');

const langPortHtml = `<p>Bem-vindo ao meu website. Este website serve de portfolio para mostrar os meus primeiros projetos de quando comecei a minha carreira em programação, design e aplicações. Este site foi construído se utilizando de conhecimentos de HTML5 e CSS primordialmente, sem a usabilidade de bibliotecas gráficas ou frameworks de design.
Além dos primeiros projetos, você pode encontrar um pequeno resumo das minhas expriências e meus conhecimentos aplicados na área.
</p>
 <p>Com conhecimentos adquiridos na graduação de Publicidade e Propaganda, migrou-se para a área da Computação.
  Iniciou-se carreira profissional na área como assistente de Teste manuais e unitários. Em paralelo ao trabalho de Tester e QA (Analista de Qualidade), começou projetos de prototipagem de interface de websites e aplicações.</>
  <p class="port-text">Dando os primeiros passos na linguagem Ruby e Javascript, logo aprendeu Javascript e Ruby on Rails para a desenvolvimento web.</p>
  <p class="port-text">Abaixo você encontra um breve resumo das minhas habilidades gerais.</p>`;

const langEngHtml = `
<p> Welcome to my website. This work is intended to serve as a portfolio to showcase my first web projects when I started picking some coding skills. A passion for design is still inside of me so I tend to put extra effort to visuals and user experience on front-end applications. </p>
<p> This website was built primarily in basic and pure HTML5 and CSS with no extra libraries or frameworks. </p>
<p> Alongside my first web projects, you may also take a look at a brief resume of my job experiences. </p>`;

const changeLanguageEng = function (){
    divText.innerHTML = langEngHtml;
}

const changeLanguagePort = function(){
    divText.innerHTML = langPortHtml;
}


btnEngLang.addEventListener('click', changeLanguageEng);
btnPortLang.addEventListener('click', changeLanguagePort);
