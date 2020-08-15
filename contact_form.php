<?php
    if( isset($_POST['name']) && isset($_POST['email'])  && isset($_POST['message']) ) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $mes = $_POST['message'];
        // put your own email for contact information
        $to = "rakibulislam8sifat@gmail.com";
        $subject = ' Contact Form Message';
        $message = '<b>Name :</b> '.$name.'<br><br><b>Email :</b> '.$email.'<br><br> '.$sub.'<br><br><P><h3>Message :</h3> '.$mes.'</P>';
        $headers .= 'X-Mailer: PHP'. phpversion() . "\r\n";
        $headers .= 'X-Priority: 3' . "\r\n";
        $headers .= 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-Type: text/html; charset=ISO-8859-1';
        if ( mail( $to, $subject, $message, $headers )) {
            echo "success";
        } else {
            echo "The server failed to send the message.Please try again later";
        }
    }
?>