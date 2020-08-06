// get the incoming POST data
$post = file_get_contents('php://input') ?? $_POST;

var_dump($post);

// decode the JSON data
$post = json_decode($post, true);