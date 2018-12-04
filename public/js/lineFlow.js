function load(data) {
  var content = '<div class="card">' +
    '<div class="user">' +
    '<img src="' + data['icon'] + '" alt="">' +
    '</div>' +
    '<div class="content"><div class="cardTop"><p>' + data['name'] + '</p><br></div>' +
    '<div class="cardLine"><div class="cardImg"><img src="' + data['pic'] + '" alt=""></div>' +
    '<div class="txt">' + data['content'] + '</div></div>' +
    '<div class="cardDown"><img src="./images/icons/icon2.png" alt="">';

  for (var i = 0, len = data['label'].length; i < len; i++) {
    content += '<a class="label" href="">'
    content += data['label'][i]
    content += '</a>'
  }
  content += '</div></div></div>'


  $(".flowLoad").append(content);
}


$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {

    console.log("到底啦!");
    data = {
      'icon':'./images/icons/icon1.png',
      'name':'观察者',
      'pic':'../images/1.jpg',
      'content':'超开心的！',
      'label':['熔炉', '城市','火山城堡
      ']
    };

    load(data);


  }
});
