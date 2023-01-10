$(document).ready(function(){
      var value = $('#form-country li a.active').attr("title");
      var link = $('#form-country li a.active').attr("href");
      $('#country').val(value)
      $('.vp-cn').text(value)
      $('#visa-details p').css('display', 'none');
      $(link).css('display', 'block');
      $('#about-country p').css('display', 'none');
      $(link+"-about").css('display', 'block');
    $('#form-country li a').click(function(e){
      e.preventDefault()
      $('#form-country li a').removeClass('active');
      $(this).addClass('active');
      var value = $(this).attr("title");
      var link = $(this).attr("href");
      
      $('#country').val(value)
      $('.vp-cn').text(value)
      $('#visa-details p').css('display', 'none');
      $(link).css('display', 'block');
      $('#about-country p').css('display', 'none');
      $(link+"-about").css('display', 'block');
    });

  })