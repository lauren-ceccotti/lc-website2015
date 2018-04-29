<?php $nom_page = "contact"; ?>
<div id="page_contact">


	<div id="formulaire">
		<span><i class="fa fa-times"></i></span>
		<form method="post" action="index.php?module=contact" id="contact_form">	<!-- pas d'action car on reste sur la même page-->
			
			<ul>
				<li>
					<input class="balloon" name="prenom" id="prenom" type="text" placeholder="Jon" value="<?php echo $_POST['prenom']; ?>" required maxlength="50" />
					<label for="prenom">Prénom</label>
				</li>

				<li>
					<input class="balloon" name="nom" id="nom" type="text" placeholder="Snow" value="<?php echo $_POST['nom']; ?>" required maxlength="50" />
					<label for="nom">Nom</label>
				</li>

				<li>
					<input class="balloon" name="societe" id="societe" type="text" placeholder="Night's Watch" value="<?php echo $_POST['societe']; ?>" maxlength="50" />
					<label for="societe">Société</label>
				</li>

				<li>
					<input class="balloon" name="email" id="email" type="email" placeholder="youknownothing@gmail.com" value="<?php echo $_POST['email']; ?>" required maxlength="50" />
					<label for="email">Votre e-mail</label>
				</li>

				<li>
					<input class="balloon" name="objet" id="objet" type="text" placeholder="Winter is coming" value="<?php echo $_POST['objet']; ?>" required maxlength="100" />
					<label for="objet">Objet</label>
				</li>

				<li>
					<textarea class="balloon" name="message" id="message" type="text" placeholder="Need a website ?" required maxlength="2500"><?php echo $_POST['message']; ?></textarea>
					<label for="message">Votre message</label>
				</li>			
			</ul>
			
			<div id="thebutton">
					<input type="submit" name="bouton" id="bouton" value="Envoyer"/>
					<i class="fa fa-paper-plane-o"></i>
			</div>

		</form>
	</div>


	<div id="whoami">

		<div class="message">
		</div>

		<p>Hi, I'm Lauren, I live and work in Paris.<br>
			Let's work together!
		</p>
		

		<div class="contact_tools">
			<h2 class="contact_me">
				<a>Contact me</a>
			</h2>
			<h2>
				<?php echo '<a href="'.DOWNLOAD.'/cv_ceccotti.pdf" target="_blank">Resume</a>'; ?>
			</h2>
			<h2>
				<a href="https://www.hopwork.com/profile/laurenceccotti" target="_blank">Hire me</a>
			</h2>
		</div>


	</div>

</div>


		<?php

			$headers ="From : web.laurenceccotti" . "\r\n"; 
			$headers .="Reply-To : ". $_POST['email'] ."\r\n"; 
			$headers .= "MIME-Version: 1.0". "\r\n"; 
			$headers .= 'Content-Type: text/plain; charset="utf-8"'."\r\n"; 
			$headers .= 'Content-Transfer-Encoding: 8bit'; 
			
			$_POST['message']= stripslashes($_POST['message']);
			$_POST['objet']= stripslashes($_POST['objet']);
			$_POST['societe']= stripslashes($_POST['societe']);


	if (!empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['message']))

		{
			echo '<p id="post_ok">Votre Message a bien été envoyé.</p>';

			mail ('lauren.ceccotti@gmail.com', 
				$_POST['objet']= "Contact : " . $_POST['objet'], 
				$_POST['message']="Envoyé par : " . $_POST['nom'] . " ". $_POST['prenom'] . "\r\nSociété : " .$_POST['societe'] . "\r\nE-mail : " .$_POST['email'] . "\r\n\r\nMessage : \r\n\r\n" . $_POST['message'],
				$headers);
		}
		
	elseif (isset($_POST['bouton']))
		
		{
		echo '<p id="post_erreur">Veuillez remplir les champs du formulaire.</p>';
		}

	?>	