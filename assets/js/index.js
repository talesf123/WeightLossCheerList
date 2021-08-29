const
  worksheet_id = '1cY0YYL67Us5SotGM3L9gIxWkGdRkDc5SuthMNaNGQjg',
  tab_name = '加油團清單',
  key = 'AIzaSyDFCqJwH8rUfPWJ5qQDxDxumUl9H_8Grgw',
  url = 'https://sheets.googleapis.com/v4/spreadsheets/'+worksheet_id+'/values/'+tab_name+'?alt=json&key='+key;
fetch(url)
  .then(res => res.json())
  .then(data => {
    var header = data.values[0];
    var all_data = data.values.slice(1).map(function(d){
      tmp = {}
      header.forEach(function(h,i){ tmp[h] = d[i] });
      tmp['電話'] = mask(tmp['電話']);
      return tmp
    });
    var $t = $("#main-block table tbody");
    all_data.forEach(function(o, i){
      obj = [
        (i+1),
        o['時間戳記'],
        o['姓名'],
        mask(o['電話']),
        (o['幫誰加油'] || o['幫誰加油(請輸入全名/或勾選無)'])
      ]
      $tr = $('<tr>');
      obj.forEach(v => $tr.append(`<td>${v}</td>`));
      $t.append($tr);
    });
  }
);