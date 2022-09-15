<?php
require($_SERVER["DOCUMENT_ROOT"].'/settings/start_session.php');
include($_SERVER["DOCUMENT_ROOT"].'/settings/scooteq/general.php');

session_destroy();

$_SESSION['logoutmsg']="Successfully logged out"; 

header("Location:".$projectPath);
?>