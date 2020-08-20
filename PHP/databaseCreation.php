<?php

function fun1(){

    $host = 'localhost';
    $user = 'root';
    $password = 'manager';
    $db = 'data';

    //create database connection
    $connection = mysqli_connect($host, $user, $password, $db) or die("connection not created");
    print("connection created");

    //write sql query
    $query = "SELECT * FROM products;";

    //execute sql query and fetch result
    $result = mysqli_query($connection, $query);

    //print query result on browser
    while($row = mysqli_fetch_assoc($result)){
        print("<pre>");
        print_r($row);
        print("<pre>");
    }

    //close database connection
    mysqli_close($connection);
    print("connection closed");

}

fun1();













?>