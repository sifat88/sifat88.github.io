(function ($) {
    'use strict';

    jQuery(document).ready(function () {
        function frmId(id) {
            return document.getElementById(id);
        }

        $("#submitButton").on("click", function (e) {
            e.preventDefault();
            if (frmId("name").value === "" || frmId("email").value === "" || frmId("message").value === "") {
                frmId("submitButton").disabled = false;
                frmId("status").innerHTML = '<div class="frm-status">Sorry , you should fill out the form</div>';
                return false;
            } else {
                frmId("submitButton").disabled = true;
                frmId("status").innerHTML = '<div class="frm-status">Please wait...It will take some time</div>';
            }
            var formdata = new FormData();
            formdata.append("name", frmId("name").value);
            formdata.append("email", frmId("email").value);
            formdata.append("message", frmId("message").value);

            var ajax = new XMLHttpRequest();
            ajax.open("POST", "contact_form.php");
            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    if (ajax.responseText == "success") {
                        frmId("contact_form").innerHTML = '<div class="contact-user"><h2>Thanks <span>' + frmId("name").value + '</span> your message has been sent</h2></div>';
                    } else {
                        frmId("status").innerHTML = ajax.responseText;
                        frmId("submitButton").disabled = false;
                    }
                }
            }
            ajax.send(formdata);
        });

    });

})(jQuery);