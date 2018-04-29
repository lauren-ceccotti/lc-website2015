<?php $nom_page = "skills"; ?>



<div id="page_skills">

<div class="leftpage">
	<section id="skills">

	<?php

		$info_bdd = execute_requete("SELECT titre, level, type FROM skills");
		while($skill = $info_bdd->fetch_assoc()){
			echo '<div class="layer skill '.removeAccents($skill['level']).' '.removeAccents($skill['type']).' '.removeAccents($skill['titre']).'">'.$skill['titre'].'</div>';
		}
	?>
	</section>
</div>

<div class="rightpage">

	<section id="tools">
		<div class="tool ps">
			<h3>Photoshop</h3>
			<div class="stars">
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
			</div>
		</div>
		<div class="tool il">
			<h3>Illustrator</h3>
			<div class="stars">
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="low fa fa-certificate"></i>
			</div>
		</div>
		<div class="tool in">
			<h3>Indesign</h3>
			<div class="stars">
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
			</div>
		</div>
		<div class="tool fc">
			<h3>Final Cut Pro</h3>
			<div class="stars">
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="low fa fa-certificate"></i>
				<i class="low fa fa-certificate"></i>
			</div>
		</div>
		<div class="tool gs">
			<h3>Sketchup</h3>
			<div class="stars">
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="fa fa-certificate"></i>
				<i class="low fa fa-certificate"></i>
			</div>
		</div>
	</section>




	<section id="langues">
		<div class="lg fr">
			<h3>français</h3>

			<div class="langlevel">
				<div class="radial_progress">
					
					<div class="circle">
						<div class="mask full">
							<div class="fill"></div>
						</div>

						<div class="mask half">
							<div class="fill"></div>
							<div class="fill fix"></div>
						</div>

						<div class="shadow"></div>
					</div> 

					<div class="inset">
						<div class="percentage">
							<div class="numbers"><span>100%</span></div>
						</div>
					</div>

				</div>
			</div>

		</div>

		<div class="lg en">
			<h3>english</h3>

			<div class="langlevel">
				<div class="radial_progress">
					
					<div class="circle">
						<div class="mask full">
							<div class="fill"></div>
						</div>

						<div class="mask half">
							<div class="fill"></div>
							<div class="fill fix"></div>
						</div>

						<div class="shadow"></div>
					</div> 

					<div class="inset">
						<div class="percentage">
							<div class="numbers"><span>75%</span></div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div class="lg it">
			<h3>italiano</h3>

			<div class="langlevel">
				<div class="radial_progress">
					
					<div class="circle">
						<div class="mask full">
							<div class="fill"></div>
						</div>

						<div class="mask half">
							<div class="fill"></div>
							<div class="fill fix"></div>
						</div>

						<div class="shadow"></div>
					</div> 

					<div class="inset">
						<div class="percentage">
							<div class="numbers"><span>50%</span></div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
</div>

<i class="dot fa fa-arrow-circle-right right"></i>
<i class="dot fa fa-arrow-circle-left left"></i>

</div>


