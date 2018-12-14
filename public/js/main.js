$(document).ready(()=>{

//Updating existing player info
$('.edit_form').on('submit',function(e){
  let updateid = $('#update_id').val();
  //alert(updateid);
  $.ajax({
        type: "POST",
        url: "/api/profile/edit/"+updateid,
        data: $('form').serialize(),
        success: function(data) {
            console.log(data);
            window.location.replace('/');
            $('.alert-success').show();

        },
        error: function(err){
          console.log(err);
          window.location.replace('/');
        }
    });
})

$('.delete').on('click',function(){
    let id = $(this).data('userid');
    const confirmation = confirm('Are you sure?')
    if(confirmation){
      $.ajax({
            type: "DELETE",
            url: "/api/profile/delete/"+id,
            success: function(dataString) {
                window.location.replace('/');
            },
            error: function(err){
              console.log(err);
              window.location.replace('/');
            }
        });
    }
  else{
      window.location.replace('/');
  }

  })

})



const handleClick = ()=>{
  $("#newplayer").slideToggle( "slow");
}
const handleDetails = () =>{
  $(".bio").slideToggle( "slow");
}
//adding new player....

const handleSubmit = ()=>{
  $.ajax({
        type: "POST",
        url: "/api/profile",
        data: $('form').serialize(),
        success: function(data) {
            console.log(data);

            window.location.replace('/');
            $('.alert-success').show();

        },
        error: function(err){
          console.log(err);
          window.location.replace('/');
        }
    });

}
