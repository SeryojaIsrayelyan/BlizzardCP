let isOn = false, realcount="";
		function addnumber(id){ // numbers
			if(!isOn)return;
			if(id==='dot'){realcount+='.';
		document.getElementById("console").innerHTML += '.';	
		}
			else{
					realcount += id;
					document.getElementById("console").innerHTML += id;
			}
		
			

		}
		function cl(){ // CL
			if(!isOn)return;
			realcount = " ";
			document.getElementById("console").innerHTML = " ";
		}
		function dl(){ // Del
			if(!isOn)return;
			let a = "", b="";
			for (let i = 0 ; i < realcount.length-1; i++){
				a+=realcount[i];
			}
			realcount = a;
			for (let i = 0 ; i < document.getElementById("console").innerHTML.length-1; i++){
				b+=document.getElementById("console").innerHTML[i];
			}
			document.getElementById("console").innerHTML = b;

		}
		function onOff(){ // On
			isOn = !isOn;
			if(!isOn){
			document.getElementById("isOn").innerHTML = "OFF";
			document.getElementById("isOn").style.color="red";
			document.getElementById("On").innerHTML = "ON";
			realcount = "";
			document.getElementById("console").innerHTML = "";
			}
			else {
				document.getElementById("isOn").innerHTML = "ON";
				document.getElementById("isOn").style.color="green";
				document.getElementById("On").innerHTML = "OFF";
			}
		}
		function mod(){ // %
			if(!isOn)return;
			realcount += '%';
			document.getElementById("console").innerHTML+='% ';
		}
		function plus(){ // +
			if(!isOn)return;
			realcount += '+';
			document.getElementById("console").innerHTML+='+ ';
		}
		function minus(){ // -
			if(!isOn)return;
			realcount += '-';
			document.getElementById("console").innerHTML+='- ';
		}
		function multiply(){ // x
			if(!isOn)return;
			realcount += '*';
			document.getElementById("console").innerHTML+='* ';
		}
		function separate(){ // /
			if(!isOn)return;
			realcount += '/';
			document.getElementById("console").innerHTML+='/ ';
		}
		function pow(){ // x^2
			if(!isOn)return;
			realcount = Math.pow(parseInt(realcount),2);
			document.getElementById("console").innerHTML+='^2 ';
		}
		function sqrt(){ // sqrt
			if(!isOn)return;
			realcount = Math.sqrt(parseInt(realcount));
			document.getElementById("console").innerHTML+='√ ';
		}
		function equalTo(){ // =
			if(!isOn)return;
			document.getElementById("console").innerHTML=eval(realcount);
			realcount = eval(realcount);
			console.log(realcount);
		}