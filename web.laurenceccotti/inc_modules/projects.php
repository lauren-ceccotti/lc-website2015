<?php $nom_page = "projects"; 


if(isset($_GET['id']) && !empty($_GET['id'])){
		
	$info_bdd = execute_requete("SELECT * FROM projects WHERE id_project=".$_GET['id']);
	while($projet = $info_bdd->fetch_assoc()){

		echo '<div class="projet '.removeAccents($projet['name']).'">';
	
			echo '<div class="projet_top"><div class="curtain"><h1>'.$projet['titre'].'</h1>';
			echo '<div class="tags">';
			$tags = explode(",", $projet['tags']);

			foreach ($tags as $key=>$value){
				echo '<h5># ' . $value . '</h5>';
			}
			echo '</div></div></div>';
			echo '<p>'.nl2br($projet['description']).'</p>';
			echo '<a class="url" href="'.$projet['url'].'" target="blank">Voir le site >> </a>';


		echo '<div class="prevnext">';

		//	FLECHE LEFT
		// Donne projet + recent que l'actuel
		$id_new_bdd = execute_requete("SELECT id_project, name FROM projects WHERE id_project>".$_GET['id']." ORDER BY id_project ASC LIMIT 1");
		if ($id_new_bdd->num_rows >0){
			while($prev_id = $id_new_bdd->fetch_assoc()){
				echo '<a class="left" href="index.php?module=projects&id='. $prev_id['id_project'].'" title="'.removeAccents($prev_id['name']).'"><i class="fa fa-arrow-circle-left"></i></a>';
			}
		// sinon donne le plus ancient
		}else{
			$id_oldest_bdd = execute_requete("SELECT id_project, name FROM projects ORDER BY id_project ASC LIMIT 1");
			while($oldest_id = $id_oldest_bdd->fetch_assoc()){
				echo '<a class="left return" href="index.php?module=projects&id='. $oldest_id['id_project'].'" title="'.removeAccents($oldest_id['name']).'"><i class="fa fa-arrow-circle-left"></i></a>';
			}
		}

		//	FLECHE RIGHT
		// Donne projet + ancien que l'actuel
		$id_old_bdd = execute_requete("SELECT id_project, name FROM projects WHERE id_project<".$_GET['id']." ORDER BY id_project DESC LIMIT 1");
		if ($id_old_bdd->num_rows >0){
			while($next_id = $id_old_bdd->fetch_assoc()){
				echo '<a class="right" href="index.php?module=projects&id='. $next_id['id_project'].'" title="'.removeAccents($next_id['name']).'"><i class="fa fa-arrow-circle-right"></i></a>';
			}
		// sinon donne le plus recent
		}else{
			$id_newest_bdd = execute_requete("SELECT id_project, name FROM projects ORDER BY id_project DESC LIMIT 1");
			while($newest_id = $id_newest_bdd->fetch_assoc()){
				echo '<a class="right return" href="index.php?module=projects&id='. $newest_id['id_project'].'" title="'.removeAccents($newest_id['name']).'"><i class="fa fa-arrow-circle-right"></i></a>';
			}
		}
		echo '</div></div>'; 
	}

}else{
		echo '<div id="page_projects">';
		echo '<i class="fa fa-chevron-down"></i>';
		include_once("projects_list.php"); 
		echo'<section id="project_content"><div id="project_side"></div></section>';
		echo '</div>';

}	
			
	?>
	

