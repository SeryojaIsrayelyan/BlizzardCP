
		var k = 0 , stavka =10, moneycount = 400, losecount =0, wincount =0, isstarted = 0, first = 0, second = 0, third = 0 , last = 3, loseinarow = 0, loseinarowcount = 0;
		function rotateruchka(){
			if(!k){
			$('.ruchka').css("transform","rotate(180deg)");
			$('.ruchka').css("top","350px");
			k = 1;
		}
		else{
			$('.ruchka').css("transform","rotate(0deg)");
			$('.ruchka').css("top","200px");
			k =0;
		}
		}
			var movedinfirst=0,movedinsecond=0,movedinthird=0;
		function move(wsector){

			for(let i = 0; i < 5; i++){

				var id2 = '#st' + wsector + "sq" + i;
				$(id2).css('transition-duration','0s');
				$(id2).offset({top: $(id2).offset().top + 10});

				if($(id2).offset().top >= 521){
					
					$(id2).offset({top: 201});
				}

			}
		}
		var interval, prize=0;
		function checkprize(){
			switch(first){
				case 0:
				prize = stavka+10;
				alert("Not bad :)");
				break;
				case 1:
				prize = stavka+30;
				alert("Small bonus :)");
				break;
				case 2:
				prize = stavka+50;
				alert("Wow,Good job!");
				break;
				case 3:
				prize = stavka*2;
				alert("Great, maybe play again ?))");
				break;
				case 4:
				prize = stavka*10;
				alert("OMG YOU WON JACKPOT!!!!");
				break;

			}
		}
		function checkwinner(){
			if((first === second && second === third) || loseinarow == loseinarowcount){
				document.getElementById("WinAudio").play();
				document.getElementById("WinMoneyAudio").play();
				checkprize();
				wincount++;
				loseinarow = 0;
				$('.WinCount').html(wincount);
				localStorage.setItem('WinCount',wincount);

				moneycount+=prize;
				$('.moneycount').html(moneycount);
				localStorage.setItem('Money',moneycount);

			}
			else {
				document.getElementById("LoseAudio").play();
				alert("You Lose :(");
				loseinarow++;
				losecount++;
				$('.LoseCount').html(losecount);
				localStorage.setItem('LoseCount',losecount);
				localStorage.setItem('Money',moneycount);
			}
		}
		function moveinthirdsector(countinthree){
			if(movedinthird == 65){
				var id2 = '#st' + 3 + "sq" + countinthree;
				if($(id2).offset().top>393 && $(id2).offset().top < 457){
					document.getElementById("PlayAudio").pause();
					clearInterval(interval);
					movedinthird = 0;
					rotateruchka();
					isstarted = 0;
					checkwinner();

				}
				else{
					move(3);
					
				}
			}
			else{
				move(3);
				movedinthird++;
			}
		}
		function moveinsecondsector(countintwo,countinthree){
			if(movedinsecond == 65){
				var id2 = '#st' + 2 + "sq" + countintwo;
				if($(id2).offset().top>393 && $(id2).offset().top < 457){
					clearInterval(interval);
					movedinsecond = 0;
					interval=setInterval(function(){	
					moveinthirdsector(countinthree);
					},100);
				}
				else{
					move(2);
					
				}
			}
			else{
				move(2);
				movedinsecond++;
			}
		}
		function moveinfirstsector(countin, countintwo, countinthree){
			if(movedinfirst == 65){
				
				var id2 = '#st' + 1 + "sq" + countin;
				if($(id2).offset().top>393 && $(id2).offset().top < 457){
					clearInterval(interval);
					movedinfirst = 0;
					interval=setInterval(function(){	
					if(loseinarow ==loseinarowcount){
					moveinsecondsector(countin,countin);
					}
					else{
						moveinsecondsector(countintwo,countinthree);
					}
					},100);
					
				}
				else{
					move(1);
				}
			}
			else{
				move(1);
				movedinfirst++;
			}
		}

		function startgame(){
			if(!isstarted){
				document.getElementById("PlayAudio").play();
				first = Math.floor(0 + Math.random() * 5);
				second = Math.floor(0 + Math.random() * 5);
				third = Math.floor(0 + Math.random() * 5);
				isstarted = 1;
			interval=setInterval(function(){
			moveinfirstsector(first,second,third);
				}, 100);
				
				rotateruchka();
				
			}
			
		}

		$(function(){
		loseinarowcount = Math.floor(2 + Math.random() * 4);
		for(let i = 1 ; i < 4; i++){
			for(let j = 0 ; j < 5; j++){
			var element = $('<div>');
			$('#main').append(element);
			var sqnumber = 'sq' + j;
			var sectornumber = 'sector' + i;
			element.addClass(sectornumber)
			element.addClass(sqnumber);
			element.addClass('sq');
			var id = "st" + i + sqnumber;
			element.attr('id', id);
		}
		}
		if(!localStorage.getItem('WinCount')){
			localStorage.setItem('WinCount',0);
			
		}
		if(!localStorage.getItem('LoseCount')){
			localStorage.setItem('LoseCount',0);
			
		}
		if(!localStorage.getItem('Money')){
			localStorage.setItem('Money',400);
			
		}

		$('.WinCount').html(localStorage.getItem('WinCount'));
			wincount = localStorage.getItem('WinCount');
			$('.LoseCount').html(localStorage.getItem('LoseCount'));
			losecount = localStorage.getItem('LoseCount');
			$('.moneycount').html(localStorage.getItem('Money'));
			moneycount = localStorage.getItem('Money');
			
			$('.cheatmoney').click(function(){
				if(!isstarted){
					moneycount = 400;
					localStorage.setItem('Money',400);
					document.getElementById("MoneyAudio").play();
					$('.moneycount').html(localStorage.getItem('Money'));
				}
			});
		$('.stavkaplus').click(function(){
			if(!isstarted){
			if(stavka+10 <= moneycount){
			stavka+=10;
			$('.stavkcount').html(stavka);
		}
		}
		});
		$('.stavkaminus').click(function(){
			if(!isstarted){
			if(stavka-10 >= 10){
			stavka-=10;
			$('.stavkcount').html(stavka);
			}
		}

		});
		$('.startbutton').click(function(){
			if(stavka>moneycount){
				alert("Not Enough money");
			}
			else{
				moneycount -= stavka;
				$('.moneycount').html(moneycount);
				startgame();

			}
			
		});
		$('.ruchka').click(function(){
			if(stavka>moneycount){
				alert("Not Enough money");
			}
			else{
				moneycount -= stavka;
				$('.moneycount').html(moneycount);
				startgame();

			}
			
		});
	});

