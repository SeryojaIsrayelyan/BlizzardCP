$(function(){
	$.ajax({
        url:'./data_base/db.json',
        dataType:'json',
        success:function(result){
            console.log(result);
             //The first Select
             var container1=$('.container1');
             var select1=$('.sel1');
                 container1.append(select1);

            //The Second Select
             var select2=$('.sel2');
                 container1.append(select2);
              
            for(var key in result){
             var img=$(`<img src='${result[key].flag}'>`)
             var option1=$(`<option class="opt" value="${result[key].currencies[0].code}"></option>`).html(`<span>${result[key].currencies[0].code}</span>`);
             var h3=$('<h3>').html('('+result[key].currencies[0].name+')')
             option1.append(h3)
             option1.append(img)
             select1.append(option1);
               
             var img1=$(`<img src='${result[key].flag}'>`)
              var option2=$(`<option class="opt" value="${result[key].currencies[0].code}">`).html(`<span>${result[key].currencies[0].code}</span>`);
              var h33=$('<h3>').html('('+result[key].currencies[0].name+')')
              option2.append(h33)
               option2.append(img1)
              select2.append(option2);

            }
            var opt=$('.opt');
            var opt1=$('.opt1');
            $(opt[0]).attr('selected','true')
            $(opt1[0]).attr('selected','true')
            var from,to,money,fromMoney,fromInp,toInp,x;

                $(document).on('change',".sel1", function(){
                  from = $(this).val();
                  console.log(from)
                  
                })

                 $(document).on('change',".sel2", function(){
                  to = $(this).val();  
                  console.log(to)
                })

                 $('.btn').on('click', function(){
                  fromInp=Number($('.from').val());
                   $.ajax({
                            url:`https://free.currencyconverterapi.com/api/v6/convert?apiKey=dd9da5e9290dc6e0b149&q=${from}_${to}`,
                            dataType:'json',
                            method:'get',
                            success:function(result){  
                                console.log(result);
                                  for(var key in result.results){
                                     money=result.results[key].val;
                                    console.log('Val '+money);
                                  }
                              console.log(money*fromInp);
                                $('.am').html(money*fromInp+' '+to);
                                $('.fr').html('1 '+from+' = '+  money + " "+to)
                            },
                            error:function(){
                              alert('Error in From To AJAX');
                            },
                          }) ;
                       })                    
                 
        },
        error:function(){
        	alert('Error');
        }
	})
})