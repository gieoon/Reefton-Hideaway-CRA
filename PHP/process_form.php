
<?php
    // get the incoming POST data
    // $post = file_get_contents('php://input') ?? $_POST;
    $post = file_get_contents('php://input');
    if(is_null($post)){
        $post = $_POST;
    }

    // decode the JSON data
    $post = json_decode($post, true);
    // $post = $_POST;
    // $post = json_decode($_POST, true);

    $name = $post['name'];
	$email = $post['email'];
    $msg = $post['roomType'];
    $checkIn = $post['checkInDate'];
    $checkOut = $post['checkOutDate'];
    $roomCount = $post['roomCount'];
    $paxCount = $post['paxCount'];

    $outgoing = "Inquiry at: " . date('Y-m-d H:i:s', time()) 
        . "\n" . wordwrap($msg,200) 
        . "\n\nCLIENT NAME: " . $name 
        . "\nCLIENT EMAIL: " . $email
        . "\nREQUESTED CHECK IN: " . $checkIn
        . "\nREQUESTED CHECK OUT: " . $checkOut
        . "\nNUMBER OF ROOMS: " . $roomCount
        . "\nNUMBER OF PAX: " . $paxCount;

    // file_put_contents( 'debug' . date('Y-m-d H:i:s', time()) . '.log', var_export( $outgoing, true));
    
    // Send email
    // mail("hello@reeftonhideaway.com","REEFTON HIDEAWAY | WEB ENQUIRY",$outgoing);
    mail("reeftonhideaway@gmail.com","REEFTON HIDEAWAY | WEB ENQUIRY",$outgoing);
    mail("jun.a.kagaya@gmail.com","REEFTON HIDEAWAY | WEB ENQUIRY",$outgoing);


    // echo "Hello World yyoyo";
    return http_response_code(200);
?>