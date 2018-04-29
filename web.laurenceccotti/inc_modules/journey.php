<?php $nom_page = "journey"; ?>


<div id="page_journey">


	<span class="next"></span>
	<span class="prev"></span>

	<div class="rules forward">
		<i class="fa fa-rocket"></i>
		<span>forward</span>
	</div>
	<div class="rules backward">
		<i class="fa fa-rotate-right"></i>
		<span>backward</span>
	</div>
	
	<div class="roue">
		<?php echo '<img class="rouesvg" src="'.IMAGES_THEME.'/roue.svg"/>'; ?>
	</div>

	<?php

		$info_bdd = execute_requete("SELECT * FROM stages ORDER BY date_debut, date_fin");

		while($stage = $info_bdd->fetch_assoc()){

			$journey = '<div class="stage '.$stage['id_stage'].'">';

			$journey.= '<h1>'.nl2br($stage['titre']).'</h1>';
			$journey.= '<h3>'.$stage['date_debut'];

			if(!empty($stage['date_fin'])){
				$journey.= ' - '.$stage['date_fin'];
			}

			$journey.= '</h3>';
			$journey.= '<p>'.nl2br($stage['description']).'</p>';
			$journey.= '<br>';

			$journey.= '</div>';

			echo $journey;

		}
	?>


</div>