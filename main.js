$(document).on('ready', function() {
  $('.first').on('click', function(){
  	$('body').append('<h2>Hey i am a header!</h2>');
  });

  $('.second').on('click', function(){
  	$('body').append('<h1>Appended h1</h1>');
  });

  $('.third').on('click', function () {
  	$('body').append('<ul><li>1</li><li>2</li><li>3</li></ul>');
  });

});