import './styles/main.scss';
import $ from 'jquery';

// $('._36ic._5l-3').html('<h3>New content</h3>');
// $('body').html('<body><h1>hey</h1></body>');


$(document).ready(function() {
  setTimeout(function() {

    var x = $('._36ic').html();
    $('._36ic').html('<h1 class="fake-title">Git Help</h1>'); // title of messenger
    $('._3rh8').remove(); // search for a convo
    $('abbr').remove(); // timestamp for convo on left side
    $('span._1htf').remove(); // most recent line for convo on left side

    $('._5742._1_fz').html('<h1 class="dictionary">Dictionary</h1>'); // title of the current convo
    $('ul._4rv4').remove(); // emojis and gifs at bottom of message input

    $('._4ldz._1t_r').remove(); // remove avatars

    $('._3oh').html('<p>hahahahahahha</p>');

  }, 1000);
  
})