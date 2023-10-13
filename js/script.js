// script escrito em jQuery e usado para adicionar 
// um comportamento interativo a elementos <p> em uma 
// página da web quando o documento estiver completamente carregado.

//Início de uma função anônima que é executada 
// O $() é uma função jQuery que é usada para selecionar 
// elementos no DOM. Neste caso, ele está selecionando o documento inteiro.
$(document).ready(function(){
    $("p").click(function(){ //Seleciona todos os elementos <p> na página e vincula uma função de clique a eles. Quando um elemento <p> for clicado, a função anônima seguinte será executada.
      $(this).hide();
      //Dentro da função de clique, $(this) 
      //se refere ao elemento <p> que foi clicado. 
      //A função .hide() é chamada nesse elemento, 
      //fazendo com que ele desapareça da exibição quando for clicado. 
    });
  });
  

  
  
  
  
  