<nav id="projects_list">
	<ul> 
		<?php
		
			$info_bdd = execute_requete("SELECT id_project, titre, name FROM projects ORDER BY id_project DESC");
			while($projet = $info_bdd->fetch_assoc()){
				echo '<li class="'.removeAccents($projet['name']).'">';
				echo '<a href="index.php?module=projects&id='. $projet['id_project'].'">'. $projet['titre'].'</a>';
				echo '</li>';
			}
		?>
	</ul>
</nav>	