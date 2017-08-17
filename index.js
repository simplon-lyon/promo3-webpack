//En javascript modulaire, pour pouvoir utiliser une library
//ou un autre fichier, on doit importer celui ci, soit
//via import .. from ''
import $ from 'jquery';

//soit via un require
//const $ = require('jquery');

//document.querySelector('#para');

//document.querySelectorAll('p').forEach(function(para){para.addEventListener('click',function(){alert('bloup')})});
// $('p').on('click', function() {
//     alert('bloup');
// });



$(document).ready(function() {
    $('#para').css({
        color:'red',
        backgroundColor:'blue',
        fontSize:35
    });
});