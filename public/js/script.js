//console.log("Hello world from Script.JS");
// var age = prompt("Mosha: ");
// var age_days = age*365;
// var string1 = age+ " years is roughly " + age_days + " days";
// var string2;
/*alert(string1); */

/*
if(age<18)
{
    string2=" No kids allowed ";
}
else if(age<21)
{
    string2 =" not a kid but you cannot drink ";   
}
else{
    string2= " Come in, get drunk and have fun ";
}
alert(string2); */

/*
var age_int = Number(age);

if(age_int<0)
{
    alert("Not Born Yet");
}
else if(age_int === 21)
{
    alert("Happy 21st birthday ");
    
        
}
else
{
    alert("Something else");
}

if(age_int%2 !== 0)
{
   alert("Odd Age");
} */


// var count=-10;
// while (count>-11&& count<20) {
//     console.log("count is: " +count);
//     if(count%2==0)
//     {
//         console.log(count);
//     }
//     count++;

// }
// for(var i=-10;i<=19;i++)
// {
//     console.log(i);
// }

// for (let index = 10; index <= 40; index++) {
//     if (index%2==0) {
//         console.log(index);
//     }
    
// }

// function doSomething()
// {
//     console.log("I did something");
// }

// doSomething();

// doSomething();

// function test(x)
// {
//     return x*2;
//     console.log(x);
//     return x/2;
// }

// console.log(test(40));

// function isEven(x)
// {
//     if(x%2==0)
//     {return true;}
//     else
//     {return false;}
// }

// var a;
// a = isEven(35);
// console.log(a);
// console.log(isEven(24));
// console.log(isEven(21));
// console.log(isEven(99));

// var person = {
//     name: "Bob",
//     age:24,
//     city:"PR"
// };
// console.log(person["name"]+" "+ person["city"] + person.name);
$(document).ready(function(){
$( "#trigger" ).click(function() {
    
    //$('body').css('color','green');
   // $("#trigger").css('background-color','violet');
  });

  
//   $('div').css('background-color','purple');
//   $('.container-fluid').css('background-color','white');
//   $('.highlight').addClass('highlight-width');
//   $('#third').addClass('third-border');
//   $("div").first().css('color','red');

Highcharts.chart('container', {
    
        title: {
            text: 'Techstitution'
        },
    
        subtitle: {
            text: 'Some Random Numbers'
        },
    
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
    
        series: [{
            name: 'Installation',
            data: [57099, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });

});