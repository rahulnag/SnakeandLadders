$(document).ready(function(){
    $('#playerName').keypress(function(e){
      if(e.keyCode==13)
      $('#addPlayer').click();
    });
});
