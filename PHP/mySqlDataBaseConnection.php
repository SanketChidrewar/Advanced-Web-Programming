<?php

  function function1() {
    // $host = 'localhost';
    // $user = 'root';
    // $password = 'manager';
    // $db = 'dac_db';
    // $port = 3306;
    
    print("opening connection<br>");

    // step 1: create/open the connection
    $link = mysqli_connect('localhost', 'root', 'manager', 'data', 3306) or die("Connection not created<br>");
    
    // step 1.1: select the db
    // mysqli_select_db($connection, $db);
    
    // step 2: prepare the query
    $query = "select * from products";
    //print($query);

    // step 3: execute the query
    print("executing query<br>");
    $result = mysqli_query($link, $query);
    //print($result);

    // step 4: read/process the result 
    // print("no of rows = " . mysqli_num_rows($result));
    // $row = mysqli_fetch_row($result);
    // print($row = mysqli_fetch_assoc($result));
    while ($row = mysqli_fetch_assoc($result)) {

    print("<pre>");
    print_r($row);
    print("</pre>");
    
    }
    print($row = mysqli_fetch_assoc($result));
    print($row = mysqli_fetch_assoc($result));
    
    print("closing connection");
    // step 5: close the connection
    mysqli_close($link);
  }

  function1();

?>
