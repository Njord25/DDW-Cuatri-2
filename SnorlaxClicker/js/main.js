//-----------------Variables de puntaje Total--------------//
var $snorlax = $('#snorlax');
var $little = $('#little');
var $score = $('#score');
var $applesTotal = $('#applesTotal');
//--------------------------------------------------------//

//-----------------IDs de los Buttons--------------//
var $perClicks = $('#perClicks');
var $trainer = $('#trainer');
var $town = $('#town');
var $city = $('#city');
//-------------------------------------------------//

//--------------IDs Botones Upgrades----//
var $upgradClick = $('#upgradClick');
var $secondClickUp = $('#secondClickUp');
var $upgradTrainer = $('#upgradTrainer');
var $secondTrainerUp = $('#secondTrainerUp');
var $upgradTown = $('#upgradTown');
var $secondTownUp = $('#secondTownUp');
var $upgradCity = $('#upgradCity');
var $secondCityUp = $('#secondCityUp');
//-------------------------------------------------//

//-----------------Contador de Manzanas--------------//
var $n = 0;
var $totalApple = 0;
//-------------------------------------------------//

//-----------------Deshabilitador de botones de ayuda--------------//
$perClicks.prop( "disabled", true );

$trainer.prop( "disabled", true );
$town.prop( "disabled", true );

$city.prop("disabled", true );

//-----------------------------------------------------//

//-----------------Desabilitador de Upgrades--------------//
$upgradClick.prop("disabled", true );
$secondClickUp.prop("disabled", true );
$upgradTrainer.prop("disabled", true);
$secondTrainerUp.prop("disabled", true);
$upgradTown.prop("disabled", true);
$secondTownUp.prop("disabled", true);
$upgradCity.prop("disabled", true);
$secondCityUp.prop("disabled", true);
//-----------------------------------------------------//

//-----------------Contador--------------//
var $clickMore = 1;
var $clickTrainer = 1;
var $clickTown = 1;
var $clickCity = 1;
//-----------------------------------------------------//

//-----------------Valores y Clicks por second--------------//
var $items = [[20,1],[10,1],[10,1],[10,1]];
var i = 0;
//-----------------------------------------------------//

//------------------Contador Por secondo----------------------//
var $applesPers = $('#applesPers')
var $clickPs = 0;
var $trainerPs = 0;
var $townPs = 0;
var $cityPs = 0;
var $totalPs = 0;
//-----------------------------------------------------//

//-----------------Contador para Habilitar Upgrades--------------//
var $cantClick = 9;
var $firstClickUpGrade = 10;
var $secondClickUpgrade = 10;
var $cantTrainer = 20;
var $firstTrainerUpGrade = 21;
var $secondTrainerUpgrade = 21;
var $cantTown = 30;
var $firstTownUpGrade = 31;
var $secondTownUpgrade = 31;
var $cantCity = 30;
var $firstCityUpGrade = 31;
var $secondCityUpgrade = 31;
//-----------------------------------------------------//

//-----------------Audio Upgrades--------------//
var $buy = new Audio();
var $coinsSound = new Audio();
//-----------------------------------------------------//


//-------------------Funciones jquery-----------------//
//---------------funcion del click-----------------------//
var $items = [[20,1],[10,1],[10,1],[10,1]];

$perClicks.click(function () {
	$buy.src = 'audio/jump.mp3';
	$buy.play();
	setInterval(function () {
		  $n+=$items[i][1]
		    $totalApple+=$items[i][1]
	$score.text($n)
	$applesTotal.text($totalApple)
	},1000)

		$n-=$items[i][0]
		$items[i][0] = $items[i][0] + ($items[i][0]*$clickMore*0.5)

		$perClicks.val('Click' + ' ' +  '' + $items[i][0])
		  $clickMore++
		    $cantClick++
		    $clickPs=$items[i][1]
		    $totalPs+=$clickPs
		$applesPers.text($totalPs)
})

$trainer.click(function () {
	$buy.src = 'audio/jump.mp3';
	$buy.play();
	 setInterval(function () {
		   $n+=$items[1][1]
		     $totalApple+=$items[1][1]
		$score.text($n)
		$applesTotal.text($totalApple)
	},1000)

		$n-=$items[1][0]
		$items[1][0] = $items[1][0] + ($items[1][0]*$clickTrainer*0.5)

		$trainer.val('Trainer' + ' ' +  '' + $items[1][0])
		  $clickTrainer++
		  $cantTrainer++
		  $trainerPs=$items[1][1]
		    $totalPs+=$trainerPs
		$applesPers.text($totalPs)
})

$town.click(function () {
	$buy.src = 'audio/jump.mp3';
	 $buy.play();
	  setInterval(function () {
		    $n+=$items[2][1]
		    $totalApple+=$items[2][1]
		$score.text($n)
		$applesTotal.text($totalApple)
	},1000)

		$n-=$items[2][0]
		$items[2][0] = $items[2][0] + ($items[2][0]*$clickTown*0.5)

		$town.val('Town' + ' ' +  '' + $items[2][0])
		  $clickTown++
		  $cantTown++
		  $townPs=$items[2][1]
		  $totalPs+=$townPs
		$applesPers.text($totalPs)
})

$city.click(function () {
	$buy.src = 'audio/jump.mp3';
	$buy.play();
	 setInterval(function () {
		   $n+=$items[3][1]
		   $totalApple+=$items[3][1]
		$score.text($n)
		$applesTotal.text($totalApple)
	},1000)

		$n-=$items[3][0]
		$items[3][0] = $items[3][0] + ($items[3][0]*$clickCity*0.5)

		$city.val('City' + ' ' +  '' + $items[3][0])

		  $clickCity++
		  $cantCity++
		  $cityPs=$items[3][1]
		  $totalPs+=$cityPs
		$applesPers.text($totalPs)
})



$snorlax.mouseenter(function () {

	$snorlax.animate({ top: '-=25px' }, 600, 'easeOutBounce', function () {

  })

})

$snorlax.mouseleave(function () {

	$snorlax.animate({ top: '+=25px' }, 600, 'easeOutBounce', function () {
  })

})

$snorlax.click(function (e) {
	$coinsSound.src = 'audio/coins.mp3';
	$coinsSound.play();
	 $n++
	 $totalApple++
	$score.text($n)
	$applesTotal.text  ($totalApple)
	$little.css({
    left:  e.pageX -5,
    top:   e.pageY -5
});

	$little.show(100);
	$little.hide(50);
	$(document).ready(function(){
    $('#save').click(function(){
        /*LocalStorage datos guardados*/
        localStorage.setItem("Score", $score.val());


    });
});


$(document).ready(function(){
   $('#load').click(function(){

/*datos almacenados*/
  sessionStorage.getItem("Score");

/*Mostrar datos almacenados*/
	$score.text($score.val())

   });
});
})
//---------------------------------------------------------------//

//---------------------botones de compra------------//
function enable() {
  setInterval(function () {
	if ($n < $items[i][0]) {

		$perClicks.prop( "disabled", true );
		$perClicks.removeClass('active-class');

	}
    else if ($n >= $items[i][0]){
		    $perClicks.prop( "disabled", false );
		    $perClicks.addClass('active-class');
	     }

	},100)

	setInterval(function () {
	if ($n < $items[1][0]) {

		$trainer.prop( "disabled", true );
		$trainer.removeClass('active-class');

	}
  else if ($n >= $items[1][0]){

		$trainer.prop( "disabled", false );
		$trainer.addClass('active-class');
	  }

	},100)

	setInterval(function () {
	if
    ($n < $items[2][0]) {
		$town.prop( "disabled", true );
		$town.removeClass('active-class');
  }

  else if ($n >= $items[2][0]){
		$town.prop( "disabled", false );
		$town.addClass('active-class');
	  }

	},100)

	setInterval(function () {
	if ($n < $items[3][0]) {
		$city.prop( "disabled", true );
		$city.removeClass('active-class');
	}
  else if ($n >= $items[3][0]){
		$city.prop( "disabled", false );
		$city.addClass('active-class');
	 }

	},100)
}
enable();

//----------------------------Funciones del Click-----------------------------------//
$upgradClick.click(function () {
	$buy.src = 'audio/jump.mp3';
	$buy.play();
	 $clickPs = $clickPs
	 $items[0][1] = $items[0][1] + ($items[0][1]*1)
	 $n-=10
	 $totalPs+=$clickPs
	$applesPers.text($totalPs)
	$upgradClick.remove()
})

$secondClickUp.click(function () {
	$buy.src = 'audio/jump.mp3';
	$buy.play();
	 $clickPs = $items[0][1]
	 $items[0][1] = $items[0][1] + ($items[0][1]*1)
	 $n-=10
	 $totalPs+=$clickPs
	$applesPers.text($totalPs)
	$secondClickUp.remove()
})


//-------------------------trainer--------------------------------------//
$upgradTrainer.click(function () {
	$buy.src = 'audio/jump.mp3';
	$buy.play();
	 $trainerPs = $trainerPs
	 $items[1][1] = $items[1][1] + ($items[1][1]*1)
	 $n-=10
	 $totalPs+=$trainerPs
	$applesPers.text($totalPs)
	$upgradTrainer.remove()
})

$secondTrainerUp.click(function () {
	$buy.src = 'audio/jump.mp3';
	$buy.play();
	 $trainerPs = $items[1][1]
	 $items[1][1] = $items[1][1] + ($items[1][1]*1)
	 $n-=10
	 $totalPs+=$trainerPs
	$applesPers.text($totalPs)
	$secondTrainerUp.remove()
})

//--------------------------Town-------------------------------------//
$upgradTown.click(function () {
	$buy.src = 'audio/jump.mp3';
	$buy.play();
	 $townPs = $townPs
	 $items[2][1] = $items[2][1] + ($items[2][1]*1)
	 $n-=10
	 $totalPs+=$townPs
	$applesPers.text($totalPs)
	$upgradTown.remove()
})

$secondTownUp.click(function () {
	$buy.src = 'audio/jump.mp3';
	$buy.play();
	 $townPs = $items[2][1]
	 $items[2][1] = $items[2][1] + ($items[2][1]*1)
	 $n-=10
	 $totalPs+=$townPs
	$applesPers.text($totalPs)
	$secondTownUp.remove()
})

//--------------------------City-------------------------------------//
$upgradCity.click(function () {
	$buy.src = 'audio/jump.mp3';
	$buy.play();
	 $cityPs = $cityPs
	 $items[3][1] = $items[3][1] + ($items[3][1]*1)
	 $n-=10
	 $totalPs+=$cityPs
	$applesPers.text($totalPs)
	$upgradCity.remove()
})

$secondCityUp.click(function () {
	$buy.src = 'audio/jump.mp3';
	$buy.play();
	 $cityPs = $items[3][1]
	 $items[3][1] = $items[3][1] + ($items[3][1]*1)
	 $n-=10
	 $totalPs+=$cityPs
	$applesPers.text($totalPs)
	$secondCityUp.remove()
})


//----------------------------Upgrades Item--------------------------------------//
function upgradesItem() {
//----------------------------Click-----------------------------------//
	setInterval(function () {
	if ($cantClick < $firstClickUpGrade) {
		$upgradClick.prop( "disabled", true );
	}
  else if
   ($cantClick >= $firstClickUpGrade){
		$upgradClick.show()
		if ($n < 10) {
			$upgradClick.prop( "disabled", true);
			$upgradClick.removeClass('active-upgrades');
		}
    else if ($n >= 10) {
			$upgradClick.prop( "disabled", false );
			$upgradClick.addClass('active-upgrades');
		}
	 }
	},100)

	setInterval(function () {
	   if ($cantClick < $secondClickUpgrade) {
		     $secondClickUp.prop( "disabled", true );
		       $secondClickUp.removeClass('active-upgrades');
	}
    else if ($cantClick >= $secondClickUpgrade){
		    $secondClickUp.show()
		      if ($n < 50) {
			      $secondClickUp.prop( "disabled", true);
			      $secondClickUp.removeClass('active-upgrades');
		}
    else if ($n >= 50) {
			  $secondClickUp.prop( "disabled", false );
			     $secondClickUp.addClass('active-upgrades');
		}
	}
	},100)


  //-------------------------trainer--------------------------------------//

  //-------------------------trainer--------------------------------------//
  	setInterval(function () {
  	if ($cantTrainer < $firstTrainerUpGrade) {
  		$upgradTrainer.prop( "disabled", true );
  	}
    else if ($cantTrainer >= $firstTrainerUpGrade){
  		$upgradTrainer.show()
  		if ($n < 10) {
  			$upgradTrainer.prop( "disabled", true);
  			$upgradTrainer.removeClass('active-upgrades');
  		}
      else if($n >= 10) {
  			$upgradTrainer.prop( "disabled", false );
  			$upgraTrainerf.addClass('active-upgrades');
  		}
  	 }
  	},100)

  	setInterval(function () {
  	if ($cantTrainer < $secondTrainerUpgrade) {
  		$secondTrainerUp.prop( "disabled", true );
  		$secondTrainerUp.removeClass('active-upgrades');
  	}
    else if ($cantTrainer >= $secondTrainerUpgrade){
  		$secondTrainerUp.show()
  		if ($n < 50) {
  			$secondTrainerUp.prop( "disabled", true);
  			$secondTrainerUp.removeClass('active-upgrades');
  		}
      else if($n >= 50) {
  			$secondTrainerUp.prop( "disabled", false );
  			$secondTrainerUp.addClass('active-upgrades');
  		}
  	 }
  	},100)


    //--------------------------Town-------------------------------------//
    	setInterval(function () {
    	if ($cantCity < $firstCityUpGrade) {
    		$upgradCity.prop( "disabled", true );
    	}
      else if ($cantCity >= $firstCityUpGrade){
    		$upgradCity.show()
    		if ($n < 10) {
    			$upgradCity.prop( "disabled", true);
    			$upgradCity.removeClass('active-upgrades');
    		}
        else if($n >= 10) {
    			$upgradCity.prop( "disabled", false );
    			$upgradCity.addClass('active-upgrades');
    		}
    	 }
    	},100)

    	setInterval(function () {
    	if ($cantCity < $secondCityUpgrade) {
    		$secondCityUp.prop( "disabled", true );
    		$secondCityUp.removeClass('active-upgrades');
    	}
      else if ($cantCity >= $secondCityUpgrade){
    		$secondCityUp.show()
    		if ($n < 50) {
    			$secondCityUp.prop( "disabled", true);
    			$secondCityUp.removeClass('active-upgrades');
    		}
        else if($n >= 50) {
    			$secondCityUp.prop( "disabled", false );
    			$secondCityUp.addClass('active-upgrades');
    		}
    	 }
    	},100)
    }
    upgradesItem();
    //---------------------------------------------------------------//


    //-----------------------Time----------------------------------------//
    $(document).ready(function(){
        var time = {
            hora: 0,
            minute: 0,
            second: 0
        };
    		setInterval(function(){
          time.second++;
            if(time.second >= 60)

              {
                time.second = 0;
                time.minute++;
                }

                if(time.minute >= 60)
              {
                 time.minute = 0;
                 time.hora++;
                }
                var $hour = (time.hora < 10 ? '0' + time.hora : time.hora);
                var $minute = (time.minute < 10 ? '0' + time.minute : time.minute);
                var $seconds = (time.second < 10 ? '0' + time.second : time.second);
                var $timer = $('#chronometer').text($hour + ':' + $minute + ':' + $seconds)
            }, 1000);
    })
