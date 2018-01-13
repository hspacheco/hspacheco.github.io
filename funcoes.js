$(document).ready(function(){
        $('#conteudo').hide();  
      });

      $('#btn-c').on("click", function(){
        $('#conteudo').show();
        $('#conteudo').html('Graças a Universidade, hoje tenho conhecimento intermediário em programação estruturada na linguagem C. Trabalhei bem as estruturas de dados e desenvolvi aplicações gráficas com uso da API <a href="https://www.gtk.org/">GTK+</a>.');
      });

      $('#btn-java').on("click", function(){
        $('#conteudo').show();
        $('#conteudo').html('Domínio dos conceitos básicos de programação orientada a objetos (Classes, atributos, métodos, encapsulamento, herança, polimorfismo, etc ...) e utilizei Swing nas aplicações gráficas.');
      });

      $('#btn-html').on("click", function(){
        $('#conteudo').show();
        $('#conteudo').html('O básico para o desenvolvimento de páginas WEB.');
      });

      $('#btn-css').on("click", function(){
        $('#conteudo').show();
        $('#conteudo').html('O básico para o desenvolvimento de páginas WEB, como esta animação nas imagens.');
      });

      $('#btn-js').on("click", function(){
        $('#conteudo').show();
        $('#conteudo').html('O básico para o desenvolvimento de páginas WEB em conjunto o framework jQuery, o qual utilizei, por exemplo, para esse efeito de mudança de texto ao clicar acima.');
      });

      $('#btn-php').on("click", function(){
        $('#conteudo').show();
        $('#conteudo').html('---');
      });

      $('#btn-sql').on("click", function(){
        $('#conteudo').show();
        $('#conteudo').html('Em todas aplicações que fiz utilizei, o MySQL para gerenciar o banco de dados. Tenho conhecimento básico dos comandos SQL, modelo relacional, chave estrangeira, etc...');
      });

      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
        $('[data-toggle="popover"]').popover()
      });
