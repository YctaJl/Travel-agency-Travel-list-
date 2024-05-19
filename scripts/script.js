$(function(){
  $('.slider').slick({
 arrows:true,
 dots:true,
adaptiveHeight:true,
slidesToShow:3,
slidesToScroll:1,
autoplay:true,
autoplaySpeed:1500,
pausedOnFocus:true,
pauseOnHover:true,
pauseOnDotsHover:true,
draggable:false,
swipe:false,
centerMode:true,
variableWidth:true,
});
})




$(function() {
    $('#depart-datepicker input').datepicker({
      mobileFirst:true,
      dateFormat: "mm.dd.yy",
      minDate: 0, // не допускает выбор даты ранее текущей
      onSelect: function(dateText) {
        // Преобразовываем выбранную дату в нужный формат
        var formattedDate = $.datepicker.formatDate("dd.mm.yy", new Date(dateText));
        // Устанавливаем преобразованную дату в поле ввода
        $('#departure-date').val(formattedDate);
      }
    });
    
    $('#return-datepicker input').datepicker({
      dateFormat: "mm.dd.yy",
      minDate: 0, // не допускает выбор даты ранее текущей
      onSelect: function(dateText) {
        // Преобразовываем выбранную дату в нужный формат
        var formattedDate = $.datepicker.formatDate("dd.mm.yy", new Date(dateText));
        // Устанавливаем преобразованную дату в поле ввода
        $('#return-date').val(formattedDate);
      }
    });
  });
  $(function() {
$("#datepicker").datepicker({
dateFormat: "dd/mm/yy"
});
});

document.addEventListener('DOMContentLoaded', function() {
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.querySelector('nav');

  menuBtn.addEventListener('click', function() {
    nav.classList.toggle('nav-open');
    menuBtn.classList.toggle('close');
  });
});
// JavaScript код для открытия и закрытия бургер-меню
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  nav.style.display = menuBtn.classList.contains('open') ? 'block' : 'none';
});
 // Загрузка XML-файла
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        parseXML(this);
      }
    };
    xmlhttp.open("GET", "data.xml", true);
    xmlhttp.send();

    // Обработка XML
    function parseXML(xml) {
      var xmlDoc = xml.responseXML;
      var articles = xmlDoc.getElementsByTagName("article");
      var articlesDiv = document.getElementById("articles");

      // Создание элементов на основе данных XML
      for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        var title = article.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        var content = article.getElementsByTagName("content")[0].childNodes[0].nodeValue;
        var author = article.getElementsByTagName("author")[0].childNodes[0].nodeValue;

        var articleDiv = document.createElement("div");
        articleDiv.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p><p>Автор: " + author + "</p>";
        articleDiv.classList.add("visible"); // Добавление класса .visible
        articlesDiv.appendChild(articleDiv);
      }
    }
    function redirectToIndex() {
      window.location.href = "index.html";
    }