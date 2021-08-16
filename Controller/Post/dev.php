<?php
// require_once "../dbConfig.php";
require_once("../dbLocal.php");
if(isset($_POST['Submit'])){
    $email=$_POST['email'];
    $courses=$_POST['courses'];
    $projects=$_POST['projects'];
    $achivements=$_POST['achievements'];
        if(mysqli_connect_error()){
            die('Connect Error ('.mysqli_connect_error().')'.mysqli_connect_error());
        }
        else{
                $sql="INSERT INTO development (email_id,courses,projects,achievements) values ('$email','$courses','$projects','$achievements')";
                if($conn->query($sql)=== TRUE){
                        ob_clean();
                        echo "New record is inserted successfully";
                        header("./index1.html");
                        exit();
                }
                else{
                       echo "Error: ".$sql ."<br>".$conn->error;
                    }
                    $conn->close();
                }
    }
?>

