<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://sandbox.cashfree.com/pg/orders",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"customer_details\":{\"customer_id\":\"12345\",\"customer_email\":\"user@example.com\",\"customer_phone\":\"1299087801\"},\"order_amount\":1,\"order_currency\":\"INR\",\"order_note\":\"test order\"}",
  CURLOPT_HTTPHEADER => [
    "Accept: application/json",
    "Content-Type: application/json",
    "x-api-version: 2022-01-01",
    "x-client-id: 145743fdbd9fd3f2ce666bd383347541",
     "x-client-secret: 64420617337d3e1f71f1d87ccde551e5a47cf6e5"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  header('Content-Type: application/json; charset=utf-8');
  echo json_encode(array("error" => 1));
  echo "cURL Error #:" . $err;
  die();

} else {
  $result = json_decode($response, true);
  header('Content-Type: application/json; charset=utf-8');
  $output = array("order_token" => $result["order_token"]);
  echo json_encode($output);
  die();
}
?>