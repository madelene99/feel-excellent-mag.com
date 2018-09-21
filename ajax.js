/* Article FructCode.com */
$( document ).ready(function() {
    $("#btn").click(
		function(){
            sendAjaxFormDoc('ajax_form');
            sendAjaxForm('ajax_form', 'http://vip.demenibu.com/tracker_api');
			return false; 
		}
	);
});
$( document ).ready(function() {
    $("#btn1").click(
        function(){
            sendAjaxFormDoc1('ajax_form1');
            sendAjaxForm1('ajax_form1', 'http://vip.demenibu.com/tracker_api');
            return false; 
        }
    );
});
$( document ).ready(function() {
    $("#btn2").click(
        function(){
            sendAjaxFormDoc2('ajax_form2');
            sendAjaxForm2('ajax_form2', 'http://vip.demenibu.com/tracker_api');
            return false; 
        }
    );
});
 
function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url:     "http://vip.demenibu.com/tracker_api", //url страницы (action_ajax_form.php)
        type:     "GET", //метод отправки
        dataType: "html", //формат данных
        data: $("#ajax_form").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	  console.log(response);
              window.location.href = "thank-you/index.html"

    	},
    	error: function(response) { // Данные не отправлены
           alert("error");
    	}
 	});
}
function sendAjaxForm1(ajax_form1, url) {
    $.ajax({
        url:     "http://vip.demenibu.com/tracker_api", //url страницы (action_ajax_form.php)
        type:     "GET", //метод отправки
        dataType: "html", //формат данных
        data: $("#ajax_form1").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
              console.log(response);
              window.location.href = "thank-you/index.html"

        },
        error: function(response) { // Данные не отправлены
           alert("error");
        }
    });
}
function sendAjaxForm2(ajax_form2, url) {
    $.ajax({
        url:     "http://vip.demenibu.com/tracker_api", //url страницы (action_ajax_form.php)
        type:     "GET", //метод отправки
        dataType: "html", //формат данных
        data: $("#ajax_form2").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
              console.log(response);
              window.location.href = "thank-you/index.html"

        },
        error: function(response) { // Данные не отправлены
           alert("error");
        }
    });
}
function sendAjaxFormDoc(ajax_form) {
    $.ajax({
        url:     "https://docs.google.com/forms/d/e/1FAIpQLSfsr0Os4csesV0pMM12xqfq8KUotlRcqOA2cZ3qOKUGL7F2dQ/formResponse", //url страницы (action_ajax_form.php)
        type:     "GET", //метод отправки
        dataType: "html", //формат данных
        data: $("#ajax_form").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
              console.log(response);
              window.location.href = "thank-you/index.html"

        },
        error: function(response) { // Данные не отправлены
            window.location.href = "thank-you/index.html"
        }
    });
}
function sendAjaxFormDoc1(ajax_form1) {
    $.ajax({
        url:     "https://docs.google.com/forms/d/e/1FAIpQLSfsr0Os4csesV0pMM12xqfq8KUotlRcqOA2cZ3qOKUGL7F2dQ/formResponse", //url страницы (action_ajax_form.php)
        type:     "GET", //метод отправки
        dataType: "html", //формат данных
        data: $("#ajax_form1").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
              console.log(response);
              window.location.href = "thank-you/index.html"

        },
        error: function(response) { // Данные не отправлены
            window.location.href = "thank-you/index.html"
        }
    });
}
    function sendAjaxFormDoc2(ajax_form2) {
    $.ajax({
        url:     "https://docs.google.com/forms/d/e/1FAIpQLSfsr0Os4csesV0pMM12xqfq8KUotlRcqOA2cZ3qOKUGL7F2dQ/formResponse", //url страницы (action_ajax_form.php)
        type:     "GET", //метод отправки
        dataType: "html", //формат данных
        data: $("#ajax_form2").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
              console.log(response);
              window.location.href = "thank-you/index.html"

        },
        error: function(response) { // Данные не отправлены
            window.location.href = "thank-you/index.html"
        }
    });
}