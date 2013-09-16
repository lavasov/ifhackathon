$('#registration').on('submit', function(event){
    $('.btn-submit').prop('disabled', true);
    event.preventDefault();
    var values = $(this).serialize();
    var url    = $(this).attr('action');

    var jqxhr = $.post(url, values, function(){}, 'text');

    jqxhr.done(function(data){
      console.log(data);
    });

    jqxhr.fail(function(jqXHR, textStatus, errorThrown){
      console.log(textStatus);
    });
    jqxhr.always(function(jqXHR, textStatus, errorThrown){
      $('#Registration').addClass('success');
    });

});