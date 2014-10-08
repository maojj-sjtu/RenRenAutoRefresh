alert('aaa');
function myrefresh(){
  alert('refresh!');
  location.reload();
};
setInterval('myrefresh()',5000);
