
$('.error_txt').hide()
let email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let number_verify = 0;
$('.btn_submit_contact').click(function (e) {
    if (email_validator_regex.test($('#email_txt_contact').val())) {
        $('#email_txt_contact').siblings().hide();
        number_verify = 1;
    } else {
        $('#email_txt_contact').siblings().show();
        number_verify = 0;
    }

    if ($('#name_txt_contact').val().trim() != "") {
        $('#name_txt_contact').siblings().hide();
        number_verify = 1;
    } else {
        $('#name_txt_contact').siblings().show();
        number_verify = 0;
    }

    if ($('#message_txt_contact').val().trim() != "") {
        $('#message_txt_contact').siblings().hide();
        number_verify = 1;
    } else {
        $('#message_txt_contact').siblings().show();
        number_verify = 0;
    }

    if (number_verify == 1) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message has been sent successfully!',
            showConfirmButton: false,
            timer: 1500
        })
    }
    //name_txt_contact email_txt_contact message_txt_contact

})

