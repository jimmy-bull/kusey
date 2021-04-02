
$('.error_txt').hide()
let email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
$('.btn_submit_contact').click(function (e) {

    if (email_validator_regex.test($('.email_txt_contact').val())) {
        alert('ok')
    } else {
        $('.email_txt_contact').siblings().show();
    }

    /*Swal.fire({  
        position: 'center',
        icon: 'success',
        title: 'Your message has been sent successfully!',
        showConfirmButton: false,
        timer: 1500
    })*/

    //name_txt_contact email_txt_contact message_txt_contact

})

