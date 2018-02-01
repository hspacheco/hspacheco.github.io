/*

Desenvolvido por Henrique Pacheco - @hspacheco
Desafio Estágio da Convergence Works
Weather API disponível em - https://www.apixu.com/ 

- Exibição da condição climática atual + temperatura (°C).
- Máxima, mínima e média do dia atual e dos próximos 4 dias.
- Ícone para demonstrar nível de precipitação / condição do clima.
- Background muda caso dia ou noite.
- As informações são dadas conforme localização.

*/


var apikey = "b7da02575ce5410d83c212407183101&q=";

$('#card').hide();
$('#background').hide();


$(document).ready(function() {

    $.getJSON('https://ipinfo.io', function(data){
        var location, coord;
        
        location = data.loc;
        coord = location.split(",");

        $.getJSON('https://api.apixu.com/v1/forecast.json?key='+apikey+coord[0]+','+coord[1]+'&days=5', function(data2){
        
            var week_days, country, region, city;

            week_days = data2.forecast.forecastday; //Array
            country = data2.location.country;
            region = data2.location.region;
            city = data2.location.name;


            var current_day, is_day, current_icon, current_temp;

            current_day = data2.current; //Array
            is_day = current_day.is_day;
            current_temp = current_day.temp_c;
            current_icon = current_day.condition.icon;
            
            //Mudar BG caso seja dia ou noite
            if(is_day == '1' ) {
                $('#background').css('background-image', 'url(img/dia.jpg)');
            } else {
                $('#background').css('background-image', 'url(img/noite.jpg)');
            }
    
            $('#icon_situation').attr("src", 'https://'+ current_icon);

            //Cidade,Estado,País atual
            $('#my_location').html(city +', '+ region +', '+ country + ' - ' + current_temp +'°C');
                
            var day_object = [], epoch;

            //Preenche array de objeto Dia com o dia da semana,MAX,MIN,AVG e o icone.
            for(var i=0; i<5; i++){

                epoch = week_days[i].date_epoch;
                day_object[i] = {day_name: epoch_day(epoch), 
                    max_c: week_days[i].day.maxtemp_c, 
                    min_c: week_days[i].day.mintemp_c,
                    avg_c: week_days[i].day.avgtemp_c,
                    icon: week_days[i].day.condition.icon         
                }    

            }
            //console.log(day_object);

            for(var i = 0; i < 5; i++){
                $('#day'+i).html(day_object[i].day_name);
                $('#max'+i).html(Math.round(day_object[i].max_c)+'°C');
                $('#min'+i).html(Math.round(day_object[i].min_c)+'°C');
                $('#avg'+i).html(Math.round(day_object[i].avg_c)+'°C');
                $('#img'+ i).attr("src", 'http://'+ day_object[i].icon);
                
            }

            console.log('Loaded');
            $('#loading').hide();
            $('#card').show();
            $('#background').show();

        });
    
    });


});

function epoch_day(epoch){
    /*Adicionando as 2h de diferença do GMT em segundos*/
    var date = new Date((epoch+7200)*1000);
    var day = date.getDay();
    var days_name = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];

    return(days_name[day]);
    
}