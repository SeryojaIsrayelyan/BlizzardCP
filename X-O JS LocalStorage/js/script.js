let qayl = 0; let fp = 0, sp = 0; // 0 - X , 1 - O
if(!localStorage.getItem("player1")){
localStorage.setItem("player1",0);
}
if(!localStorage.getItem("player2")){
localStorage.setItem("player2",0);
}
fp = localStorage.getItem("player1");
document.getElementById("firstcount").innerHTML = fp;
sp = localStorage.getItem("player2");
document.getElementById("secondcount").innerHTML = sp;
		let isended = 0; // 0 - no, 1 - yes
		let vnkar = [0,0,0,0,0,0,0,0,0]; // 0 - nothing[changable] , 1 - X[not changable] , 2- O[not changable];
		function checkwinner(){
			if(vnkar[0] !== 0 && vnkar[1] !== 0 && vnkar[2] !== 0 && vnkar[0] === vnkar[1] && vnkar[1] === vnkar[2] && vnkar[0] === vnkar[2]){
				if(vnkar[0] == 1) {
					alert("1st Player Wins");
					fp++;
					document.getElementById("firstcount").innerHTML = fp;
					localStorage.setItem("player1",fp);
					}
				else {
					alert("2nd Player Wins");
					sp++;
					document.getElementById("secondcount").innerHTML = sp;
					localStorage.setItem("player2",sp);
				}
				isended = 1;
				document.getElementById('playerh').innerHTML = 'ENDED';
				document.getElementById('playerh').style.fontSize = '35px';
				return;
			}
			else if(vnkar[3] !== 0 && vnkar[4] !== 0 && vnkar[5] !== 0 && vnkar[3] === vnkar[4] && vnkar[4] === vnkar[5]){
					if(vnkar[3] == 1) {
						alert("1st Player Wins");
					fp++;
					document.getElementById("firstcount").innerHTML = fp;
					localStorage.setItem("player1",fp);
					}
				else {
					alert("2nd Player Wins");
					sp++;
					document.getElementById("secondcount").innerHTML = sp;
					localStorage.setItem("player2",sp);
				}
					isended = 1;
					document.getElementById('playerh').innerHTML = 'ENDED';
					document.getElementById('playerh').style.fontSize = '35px';
					return;
			}
			else if(vnkar[6] !== 0 && vnkar[7] !== 0 && vnkar[8] !== 0 && vnkar[6] === vnkar[7] && vnkar[7] === vnkar[8]){
					if(vnkar[6] == 1) {
					alert("1st Player Wins");
					fp++;
					document.getElementById("firstcount").innerHTML = fp;
					localStorage.setItem("player1",fp);
					}
				else {
					alert("2nd Player Wins");
					sp++;
					document.getElementById("secondcount").innerHTML = sp;
					localStorage.setItem("player2",sp);
				}
					isended = 1;
					document.getElementById('playerh').innerHTML = 'ENDED';
					document.getElementById('playerh').style.fontSize = '35px';
					return;
			}
			else if(vnkar[0] !== 0 && vnkar[3] !== 0 && vnkar[6] !== 0 && vnkar[0] === vnkar[3] && vnkar[3] === vnkar[6]){
					if(vnkar[0] == 1) {
					alert("1st Player Wins");
					fp++;
					document.getElementById("firstcount").innerHTML = fp;
					localStorage.setItem("player1",fp);
					}
				else {
					alert("2nd Player Wins");
					sp++;
					document.getElementById("secondcount").innerHTML = sp;
					localStorage.setItem("player2",sp);
				}
					isended = 1;
					document.getElementById('playerh').innerHTML = 'ENDED';
					document.getElementById('playerh').style.fontSize = '35px';
					return;
			}
			else if(vnkar[1] !== 0 && vnkar[4] !== 0 && vnkar[7] !== 0 && vnkar[1] === vnkar[4] && vnkar[4] === vnkar[7]){
					if(vnkar[1] == 1) {
				alert("1st Player Wins");
					fp++;
					document.getElementById("firstcount").innerHTML = fp;
					localStorage.setItem("player1",fp);
					}
				else {
					alert("2nd Player Wins");
					sp++;
					document.getElementById("secondcount").innerHTML = sp;
					localStorage.setItem("player2",sp);
				}
					isended = 1;
					document.getElementById('playerh').innerHTML = 'ENDED';
					document.getElementById('playerh').style.fontSize = '35px';
					return;
			}
			else if(vnkar[2] !== 0 && vnkar[5] !== 0 && vnkar[8] !== 0 && vnkar[2] === vnkar[5] && vnkar[5] === vnkar[8]){
					if(vnkar[2] == 1) {
				alert("1st Player Wins");
					fp++;
					document.getElementById("firstcount").innerHTML = fp;
					localStorage.setItem("player1",fp);
					}
				else {
					alert("2nd Player Wins");
					sp++;
					document.getElementById("secondcount").innerHTML = sp;
					localStorage.setItem("player2",sp);
				}
					isended = 1;
					document.getElementById('playerh').innerHTML = 'ENDED';
					document.getElementById('playerh').style.fontSize = '35px';
					return;
			}
			else if(vnkar[0] !== 0 && vnkar[4] !== 0 && vnkar[8] !== 0 && vnkar[0] === vnkar[4] && vnkar[4] === vnkar[8]){
					if(vnkar[0] == 1) {
				alert("1st Player Wins");
					fp++;
					document.getElementById("firstcount").innerHTML = fp;
					localStorage.setItem("player1",fp);
					}
				else {
					alert("2nd Player Wins");
					sp++;
					document.getElementById("secondcount").innerHTML = sp;
					localStorage.setItem("player2",sp);
				}
					isended = 1;
					document.getElementById('playerh').innerHTML = 'ENDED';
					document.getElementById('playerh').style.fontSize = '35px';
					return;
			}
			else if(vnkar[2] !== 0 && vnkar[4] !== 0 && vnkar[6] !== 0 && vnkar[2] === vnkar[4] && vnkar[4] === vnkar[6]){
					if(vnkar[2] == 1) {
				alert("1st Player Wins");
					fp++;
					document.getElementById("firstcount").innerHTML = fp;
					localStorage.setItem("player1",fp);
					}
				else {
					alert("2nd Player Wins");
					sp++;
					document.getElementById("secondcount").innerHTML = sp;
					localStorage.setItem("player2",sp);
				}
					isended = 1;
					document.getElementById('playerh').innerHTML = 'ENDED';
					document.getElementById('playerh').style.fontSize = '35px';
					return;
			}
			else if (vnkar[0] !== 0 && vnkar[1] !== 0 && vnkar[2] !== 0 && vnkar[3] !== 0 && vnkar[4] !== 0 && vnkar[5] !== 0 && vnkar[6] !== 0 && vnkar[7] !== 0 && vnkar[8] !== 0){
				alert("Draw");
				document.getElementById('playerh').innerHTML = 'ENDED';
				document.getElementById('playerh').style.fontSize = '35px';
				return;
			}

		}
		function putsymbol(id, hamar){
			if(isended == 0){
			if(vnkar[hamar] === 0){
			if (qayl ==0){
				vnkar[hamar] = 1;
				document.getElementById(id).style.background = "url('images/x.jpg')";
				qayl++;
				document.getElementById('playerh').innerHTML = '2nd';
					checkwinner();
			}
			else {
				vnkar[hamar] = 2;
				document.getElementById(id).style.background = "url('images/o.jpg')";
				qayl = 0;
				document.getElementById('playerh').innerHTML = '1st';
				checkwinner();
			}	
		}
	}
	else {
		alert("Game already ended, start a new");
		return;
		}
	}
	function resetall(){
		qayl = 0;
		isended = 0;
		vnkar = [0,0,0,0,0,0,0,0,0];
		document.getElementById('v1').style.background = 'none';
		document.getElementById('v2').style.background = 'none';
		document.getElementById('v3').style.background = 'none';
		document.getElementById('v4').style.background = 'none';
		document.getElementById('v5').style.background = 'none';
		document.getElementById('v6').style.background = 'none';
		document.getElementById('v7').style.background = 'none';
		document.getElementById('v8').style.background = 'none';
		document.getElementById('v9').style.background = 'none';
		document.getElementById('playerh').innerHTML = '1st';
		document.getElementById('playerh').style.fontSize = '60px';
		alert("New Game started, Enjoy!");
	}