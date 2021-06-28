const 
  google_file_feed_id = '1cY0YYL67Us5SotGM3L9gIxWkGdRkDc5SuthMNaNGQjg',
  url = `https://spreadsheets.google.com/feeds/list/${google_file_feed_id}/1/public/values?alt=json`;
var member_data, btn = $('.btn-start');
fetch(url)
  .then(res => res.json())
  .then(data => {
    var all_data = data.feed.entry;
    var $t = $("#main-block table tbody");
    all_data.forEach(function(o, i){
      obj = [
        (i+1),
        o.gsx$時間戳記.$t,
        o.gsx$姓名.$t,
        mask(o.gsx$電話.$t),
        (o.gsx$幫誰加油.$t || o.gsx$幫誰加油請輸入全名或勾選無.$t)
      ]
      $tr = $('<tr>');
      obj.forEach(v => $tr.append(`<td>${v}</td>`));
      $t.append($tr);
    });
  }
);