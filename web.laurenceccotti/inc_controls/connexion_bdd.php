<?php


$mysqli = new mysqli("localhost","root", "root", "laurencejzbddweb");

if ($mysqli->connect_error) 
{
	die ("Un problème est survenu lors de la connexion à la BDD" . $mysqli->connect_error);    
}
$mysqli->set_charset("utf8");

function execute_requete($req){
	global $mysqli;		

	$resultat = $mysqli->query($req);
	if(!$resultat)
		{
			die('<div class="error">Erreur de requete sql<br /> Message : ' . $mysqli->error . '<br />Code : ' . $req.'</div>');
		}

	return $resultat;
}

?>