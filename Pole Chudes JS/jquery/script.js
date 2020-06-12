

$(function(){
	let wrong = 5, waswrong = false, wastrue = 0 , isended = false, moneycount = 0, moneyforquestion = 0,lastprize = 0;
	let qannumber = 0;
	$('.wrongcount').html(wrong);
	$('.money').html(moneycount);
	var keys = ['Ա','Բ','Գ','Դ','Ե','Զ','Է','Ը','Թ','Ժ','Ի','Լ','Խ','Ծ','Կ','Հ','Ձ','Ղ','Ճ','Մ','Յ','Ն','Շ','Ո','Չ','Պ','Ջ','Ռ','Ս','Վ','Տ','Ր','Ց','ՈՒ','Փ','Ք','ԵՎ','Օ','Ֆ'];
	var questions = ['Ինչ է խաղը ստեղծողի անունը', 'Ինչ է խաղը ստեղծողի ազգանունը', 'log2 32']
	var answers = ['ՍԵՐՅՈԺԱ', 'ԻՍՐԱՅԵԼՅԱՆ', 'ՀԻՆԳ'];
	qanumber = 0 + Math.random() * 3;
 	qanumber = Math.floor(qanumber);
	var question,answer;
	if(!localStorage.getItem("Myquestion1")){
	question = questions[qanumber];
	localStorage.setItem("Myquestion1",question);
	}
	else {
		question = localStorage.getItem("Myquestion1");
	}
	if(!localStorage.getItem("Myanswer1")){
	answer = answers[qanumber];
	localStorage.setItem("Myanswer1",answer);
	}
		else {
		answer = localStorage.getItem("Myanswer1");
	}
	var firstRotate = 0 , RotatedAngle = 0, whatprize = 0, rotatetext;
	 whatprize = 1 + Math.random() * 16;
 	whatprize = Math.floor(whatprize);
 	whatprize = 1;
 	lastprize = whatprize;
 	firstRotate = whatprize * 22.5 + 720;
	rotatetext = 'rotate(' + firstRotate + 'deg)';
	whatprize = 11;
	$('.roulette').css('transform',rotatetext);
	firstRotate = Math.abs(whatprize) * 22.5 + 720;
	rotatetext = 'rotate(' + firstRotate + 'deg)';
	$('.roulette').css('transform',rotatetext);
	$('.question').html(question);
	for(let i = 0 ; i < answer.length;i++){
		var element = $('<div>');
		$('.answer').append(element);
		var classecond = 'answerkey' + i;
		element.attr('class','answerkey');
		element.addClass(classecond);
	}
	for(let i = 0; i < $(keys).length;i++){	
		var element = $('<button>');
		$('.keyboard').append(element);
		element.attr('class','key');
		var cll = 'key' + i;
		element.addClass(cll);
		$(element).html(keys[i]);
	}
	$(document).on('click','.key',function(){
		if(isended){
			alert("Խաղը արդեն ավարտված է");
		}
		else{


		if($(this).css('background-color') !== 'rgb(255, 0, 0)' && $(this).css('background-color') !== "rgb(0, 128, 0)"){
		waswrong = true;
		for(let i = 0; i < answer.length; i++)	{
			if($(this).html() == answer[i]){
				$(this).css('background-color' , 'green');
				var checkelement = '.answerkey' + i;
				$(checkelement).html($(this).html());
				wastrue++;
				if(wastrue == answer.length){
					alert("Դու հաղթեցիր");
					for(let k =0 ; k < answer.length; k++){
					var classc = ".answerkey" + k;
					$(classc).css('background-color' , 'green');
						setTimeout(function(){ 
	qanumber = 0 + Math.random() * 3;
 	qanumber = Math.floor(qanumber);
	question = questions[qanumber];
	answer = answers[qanumber];
	localStorage.setItem("Myquestion1",question);
	localStorage.setItem("Myanswer1",answer);

	$('.question').html(question);
	$('.answer').empty();
	for(let i = 0 ; i < answer.length;i++){
		var element = $('<div>');
		$('.answer').append(element);
		var classecond = 'answerkey' + i;
		element.attr('class','answerkey');
		element.addClass(classecond);
		
	}
	wrong = 5, waswrong = false, wastrue = 0 , isended = false, moneycount = 0, moneyforquestion = 0,lastprize = 0;
	$('.wrongcount').html(wrong);
	$('.money').html(moneycount);
	for(let i = 0 ; i < keys.length;i++){
		var cc= '.key' + i;
		$(cc).css('background-color','white');
	}

						}, 3000);
				}
					isended = true;
				}
				waswrong = false;
			}
		}
		if(waswrong){
			wrong--;
			$('.wrongcount').html(wrong);
			if(wrong == 0){
				alert("Դու պարտվեցիր");
				for(let k =0 ; k < answer.length; k++){
					var classc = ".answerkey" + k;
					if($(classc).html() == ''){
						$(classc).html(answer[k]);
						$(classc).css('background-color' , 'red');


					}
					else{
						$(classc).css('background-color' , 'green');
					}
				}
				setTimeout(function(){ 
		qanumber = 0 + Math.random() * 3;
 	qanumber = Math.floor(qanumber);
	question = questions[qanumber];
	answer = answers[qanumber];
	localStorage.setItem("Myquestion1",question);
	localStorage.setItem("Myanswer1",answer);
	$('.question').html(question);
	$('.answer').empty();
	for(let i = 0 ; i < answer.length;i++){
		var element = $('<div>');
		$('.answer').append(element);
		var classecond = 'answerkey' + i;
		element.attr('class','answerkey');
		element.addClass(classecond);
		
	}
	wrong = 5, waswrong = false, wastrue = 0 , isended = false, moneycount = 0, moneyforquestion = 0,lastprize = 0;
	$('.wrongcount').html(wrong);
	$('.money').html(moneycount);
	for(let i = 0 ; i < keys.length;i++){
		var cc= '.key' + i;
		$(cc).css('background-color','white');
	}

						}, 3000);
				isended = true;
			}
			$(this).css('background-color' , 'red');
			waswrong = false;
		}
		}
	}
		//console.log($(this).css('background-color'));
	});
	//$('body').empty();

});