<?php
header('Content-Type: text/html; Charset=UTF-8');
require_once("connexion_bdd.php");
require_once("fonctions.php");

define("RACINE_SITE", " ");	
define("RACINE_SERVEUR", $_SERVER['DOCUMENT_ROOT']);
define("LIBRARIES", "../libraries");
define("DOWNLOAD", "download");
define("IMAGES_THEME", "theme/images");	

$http_host = "http://".$_SERVER['HTTP_HOST']; 
$phpself = "http:/".$_SERVER['PHP_SELF']; 
$req_uri = "http:/".$_SERVER['REQUEST_URI']; 

$url_short = "http://".$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
$url_complete = "http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; 

$nom_page = "";

?>