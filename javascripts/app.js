// var shadowstring = '',
// 	plus;
// for(var i=1; i<600; i++){

// 	if (i < 178){
// 		plus = Math.round(i*170/310) +'px '+i+'px rgb(' +  Math.round(  174 + ( 198 - 174 ) * i / 178  ) +  ',' + Math.round(  207 + ( 226 - 207 ) * i / 178  ) + ',' + Math.round( 210 + ( 228 - 210 ) * i / 178 ) + '), ';
// 	} else{
// 		plus = Math.round(i*170/310) +'px '+i+'px rgb(198,226,228), ';
// 	}

// 	shadowstring += plus;

// }

// shadowstring = shadowstring.substr(0, shadowstring.length-2);

// $(document).ready(function(){
// 	$('#icon-logo').css('text-shadow', shadowstring);
// })
$(document).foundation();

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


// var halfHeight= $(window).height()/2,
// 	halfWidth = $(window).width()/2,
// 	el =  document.querySelector('#icon-logo'),
// 	$el = $('#icon-logo'),
// 	abs=Math.abs,
// 	round = Math.round,

// 	coefX,
// 	coefY,
// 	dx, dy ,dxy,

// 	rStart = 174,
// 	rEnd   = 198,
// 	gStart = 207,
// 	gEnd   = 226,
// 	bStart = 210,
// 	bEnd   = 228,

// 	gradEnd = 178,

// 	coefR = (rEnd - rStart) / gradEnd,
// 	coefG = (gEnd - gStart) / gradEnd,
// 	coefB = (bEnd - bStart) / gradEnd;







// $(document).on('mousemove', function(e){

//     shadowstring = '';

//     dx = halfWidth - e.pageX;
//     dy = halfHeight - e.pageY;
//     dxy = Math.sqrt(dx*dx + dy*dy);

// 	coefX = dx/dxy;
// 	coefY = dy/dxy;


//     for(var i = 1; i < 200; i++){
// 		if (i < gradEnd){
// 			plus = i * coefX +'px ' + i * coefY + 'px rgb(' +  round(rStart + coefR * i) + ',' +
// 															   round(gStart + coefG * i) + ',' +
// 															   round(bStart + coefB * i) + '), ';
// 		} else{
// 			plus = i * coefX +'px ' + i * coefY + 'px rgb('+rEnd+','+gEnd+','+bEnd+'), ';
// 		}
// 		shadowstring += plus;
// 	}
// 	shadowstring = shadowstring.substr(0, shadowstring.length - 2);

// 	el.style.textShadow = shadowstring;
// });







