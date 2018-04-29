<?php 

include_once("inc_controls/init.php"); 

if(isset($_GET['module']) && !empty($_GET['module'])){
	$str = explode("?", $_GET["module"]);  // (bug first load) donne un tableau avec la partie avant "?" et la partie apres
	$module = $str[0];  // car on veut que la partie avant le "?" : nom du module
	$called_module = "inc_modules/".$module.".php"; 

   include_once($called_module);

} else {
	include_once("inc_docs/head.php"); 

	echo '<div id="content">';
	include_once("inc_modules/home.php"); 
	
	echo '</div>';

	include_once("inc_docs/menu.php");
	include_once("inc_docs/bottom.php");
}

?>

<?php 

// + TARD, EN VU DES URL AJAX 
// + PENSER A FILTRER $GET


// include_once("inc_controls/init.php"); 

// if(isset($_GET['module']) && !empty($_GET['module']) && $_GET['request'] == 'ajax'){
// //SI ON EST EN MODE AJAX

// 	$str = explode("?", $_GET["module"]);
// 	$module = $str[0];
// 	$called_module = "inc_modules/".$module.".php"; 

// 	include_once($called_module);

// }elseif(isset($_GET['module']) && !empty($_GET['module'])){
// // SI ON ARRIVE SUR L'URL

// 	$str = explode("?", $_GET["module"]);
// 	$module = $str[0];  
// 	$called_module = "inc_modules/".$module.".php"; 

// 	include_once("inc_docs/head.php"); 

// 	echo '<div id="content">';
// 	include_once($called_module);
// 	echo '</div>';

// 	include_once("inc_docs/menu.php");
// 	include_once("inc_docs/bottom.php");

// }else{
// // SI AUCUN PARAMETRE ON ARRIVE SUR LA HOME

// 	include_once("inc_docs/head.php"); 

// 	echo '<div id="content">';
// 	include_once("inc_modules/home.php"); 
// 	echo '</div>';

// 	include_once("inc_docs/menu.php");
// 	include_once("inc_docs/bottom.php");

// }

?>