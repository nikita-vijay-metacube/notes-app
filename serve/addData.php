<?php
 
$conn = mysqli_connect('localhost', 'root', 'passwd', 'notebook_db');
if(!$conn) {
    die(mysqli_connect_errno());
} else {
    if(isset($_POST['note_content']) && !empty($_POST['note_content'])) {
        $note = $_POST['note_content'];
        $sql = "INSERT INTO `notes` (`note`) VALUES ('$note')";
        if(mysqli_query($conn, $sql)) {
            echo json_encode(['msg' => 'New Note Added Successfully!']);
        } else {
            echo json_encode(['msg' => 'Oopss..']);
        }
    } else {
        $notes = [];
        $sql = "SELECT * FROM `notes`";
        $query = mysqli_query($conn, $sql);
        if(mysqli_num_rows($query) > 0) {
            while($note <= mysqli_fetch_assoc($query)) {
                $notes[] = $note;
            }
            echo json_encode($notes);
        }
    }
}