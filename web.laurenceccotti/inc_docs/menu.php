
<div id="zone_menu">

	<div class="logo">
		<?php echo '<img class="logosvg" src="'.IMAGES_THEME.'/logo2.svg"/>'; ?>
	</div>

	<nav>
		<ul>
			<li class="nav-skills">
				<?php if ($nom_page == 'skills') {
					echo '<a class="encours">Skills</a>';
				}else { echo '<a href="skills">Skills</a>'; }?>
			</li>
			<li class="nav-projects">
				<?php if ($nom_page == 'projects') {
					echo '<a class="encours">Projects</a>';
				}else { echo '<a href="projects">Projects</a>'; } ?>
			</li>
			<li class="nav-journey">
				<?php if ($nom_page == 'journey') {
					echo '<a class="encours">Journey</a>';
				}else { echo '<a href="journey">Journey</a>'; } ?>
			</li>
			<li class="nav-contact">
				<?php if ($nom_page == 'contact') {
					echo '<a class="encours">Contact</a>';
				}else { echo '<a href="contact">Contact</a>'; } ?>
			</li>
		<ul/>
	</nav>
	
</div>
