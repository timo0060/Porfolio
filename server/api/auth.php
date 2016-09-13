<?php
/**
 * Created by PhpStorm.
 * User: Tim
 * Date: 9/11/2016
 * Time: 9:27 PM
 */

$app->post('/api/auth', function ($request, $response){
    require_once 'db.php';

    $token_pieces = explode('|', $request->getParsedBody()['_token']);
    $_token = $request->getParsedBody()['_token'];
    $user = $token_pieces[0];
    $auth = false;

    $q = "SELECT * FROM blog_admin WHERE username=? AND _token=?";
    $stmt = $mysqli->prepare($q);
    $stmt->bind_param('ss',$user, $_token);

    if($stmt->execute()){
        $stmt->store_result();

        if($stmt->num_rows > 0){
            $auth = true;
        }
    }

    $data = array(
        "auth" => $auth,
        "user" => $user,
        "_token" => $_token
    );

    return $response->withJson($data, 200);
});

