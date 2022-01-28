<?php
if (isset($_POST['firstname']) && $_POST['firstname'] != '') 
{
  // API URL
  $url = 'http://smartbooker.biz/interface/xmlsubj';

  // Create a new cURL resource
  $ch = curl_init($url);

  // Setup request to send json via POST
  $data = array(
    'total' => $_POST['total'],
    'firstname' => $_POST['firstname'], 
    'lastname' => $_POST['lastname'], 
    'nik' => $_POST['nik'], 
    'position' => $_POST['position'], 
    'rclub' => $_POST['rclub'], 
    'rdnumber' => $_POST['rdnumber'], 
    'city' => $_POST['city'], 
    'country' => $_POST['country'], 
    'email' => $_POST['email'], 
    'mobile' => $_POST['mobile'], 
    'loptions' => $_POST['loptions'], 
    'foptions' => $_POST['foptions'], 
    'aoptions' => $_POST['aoptions'], 
    'coptions' => $_POST['coptions'], 
    'message' => $_POST['message'], 
    'event' => $_POST['event'], 
    'event_tr_AH' => $_POST['event_tr_AH'], 
    'event_tr_HA' => $_POST['event_tr_HA'], 
    'gala_dinner' => $_POST['gala_dinner']
  );
  $payload = json_encode(array("ActionRQ" => array(
    "username" => "Serodynringa",
    "password" => "%tmMJZbABm6cB@tY",
    "action" => "RegisterRotaryUserRQ",
    "user_id" => 1497,
    "data" => $data)
  ));

  // Attach encoded JSON string to the POST fields
  curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

  // Set the content type to application/json
  curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

  // Return response instead of outputting
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  // Execute the POST request
  $result = curl_exec($ch);
  // var_dump($result);
  // var_dump(json_decode($result));

  // Close cURL resource
  curl_close($ch);
  
  $user_id = json_decode($result)[0]->data->user_id[0];
  // var_dump($user_id);
  $errors = json_decode($result)[0]->errors;
  if (count($errors) > 0) {
    echo $errors[0];
  }
  else {    
  	header( "Location: http://smartobook.com/en/rotaryform?user_id=$user_id", true, 301 ); // сделать переадресацию с помощью 301 редиректа на сайт з параметром $user_id.
	exit;
  }
}

echo '
<form action="" method="post">
  <div>
    <label for="total">Total</label>
    <input name="total" id="total" value="">
  </div>
  <div>
    <label for="firstname">First name</label>
    <input name="firstname" id="firstname" value="">
  </div>
  <div>
    <label for="lastname">Last name</label>
    <input name="lastname" id="lastname" value="">
  </div>
  <div>
    <label for="nik">Nik</label>
    <input name="nik" id="nik" value="">
  </div>
  <div>
    <label for="position">Position</label>
    <input name="position" id="position" value="">
  </div>
  <div>
    <label for="rclub">Rclub</label>
    <input name="rclub" id="rclub" value="">
  </div>
  <div>
    <label for="rdnumber">Rdnumber</label>
    <input name="rdnumber" id="rdnumber" value="">
  </div>
  <div>
    <label for="city">City</label>
    <input name="city" id="city" value="">
  </div>
  <div>
    <label for="country">Country</label>
    <input name="country" id="country" value="">
  </div>
  <div>
    <label for="email">Email</label>
    <input name="email" id="email" value="">
  </div>
  <div>
    <label for="mobile">Mobile</label>
    <input name="mobile" id="mobile" value="">
  </div>
  <div>
    <label for="loptions">Loptions</label>
    <input name="loptions" id="loptions" value="">
  </div>
  <div>
    <label for="foptions">Foptions</label>
    <input name="foptions" id="foptions" value="">
  </div>
  <div>
    <label for="aoptions">Aoptions</label>
    <input name="aoptions" id="aoptions" value="">
  </div>
  <div>
    <label for="coptions">Coptions</label>
    <input name="coptions" id="coptions" value="">
  </div>
  <div>
    <label for="message">Message</label>
    <input name="message" id="message" value="">
  </div>
  <div>
    <label for="event">Event</label>
    <input name="event" id="event" value="">
  </div>
  <div>
    <label for="event_tr_AH">Event_tr_AH</label>
    <input name="event_tr_AH" id="event_tr_AH" value="">
  </div>
  <div>
    <label for="event_tr_HA">Event_tr_HA</label>
    <input name="event_tr_HA" id="event_tr_HA" value="">
  </div>
  <div>
    <label for="gala_dinner">Gala_dinner</label>
    <input name="gala_dinner" id="gala_dinner" value="">
  </div>
  <div>
    <button>Register</button>
  </div>
</form>
';