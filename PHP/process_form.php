
<?php
    // get the incoming POST data
    $post = file_get_contents('php://input') ?? $_POST;

    // decode the JSON data
    $post = json_decode($post, true);

    $name = $post['Name'];
	$email = $post['Email'];
    $msg = $post['Message'];
    $checkIn = $post['CheckInDate'];
    $checkOut = $post['CheckOutDate'];
    $roomCount = $post['RoomCount'];
    $paxCount = $post['PaxCount'];

    $outgoing = wordwrap($msg,70) 
        . "\n\nCLIENT NAME: " . $name 
        . "\nCLIENT EMAIL: " . $email
        . "\nREQUESTED CHECK IN: " . $checkIn
        . "\nREQUESTED CHECK OUT: " . $checkOut
        . "\nNUMBER OF ROOMS: " . $roomCount
        . "\nNUMBER OF PAX: " . $paxCount;

    // send email
    mail("jun.a.kagaya@gmail.com","REEFTON HIDEAWAY | WEB ENQUIRY",$outgoing);
	// mail("hello@reeftonhideaway.com","REEFTON HIDEAWAY | WEB ENQUIRY",$outgoing);


    echo "Hello World yyoyo";

?>