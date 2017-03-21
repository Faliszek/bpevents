<?php


function send_mail(){
    if(isset($_POST['data'])){
        $data = $_POST['data'];
        $email = $data['email'];
        $topic = $data['topic'];
        $message = $data['message'];
        $errors = array();
        $result = false;
        foreach($data as $key => $value){
            if($value == 'undefined'){
                $errors[$key] = $value;
            }
        }
        if(sizeof($errors) == 0){
            try {
                $success = wp_mail($email, $topic, $message);
                $result = $success;
                echo json_encode($result);
            } catch (Exception $e){
                echo json_encode($e->getMessage(), true);
            }
        } else{
            echo json_encode($errors, true);
        }

    }
    wp_die();
}