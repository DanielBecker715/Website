<?php
include($_SERVER["DOCUMENT_ROOT"].'/settings/itsolutions/general.php');

session_start();
session_destroy();

$_SESSION['logoutmsg']="Successfully logged out"; 

header("Location:".$projectPath);
?>