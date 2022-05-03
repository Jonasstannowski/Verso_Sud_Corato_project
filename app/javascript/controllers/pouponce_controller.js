setTimeout(showModal, 1000);

function showModal() {
  var is_modal_show = sessionStorage.getItem('alreadyShow');
  if (is_modal_show != 'alredy shown') {
    sessionStorage.setItem('alreadyShow', 'alredy shown');
    $("#myModal").show()
  }else{
    console.log("is_alredy_shown");
  }
}

$("#closeBtn").on("click", function(){
  $("#myModal").hide();
})
