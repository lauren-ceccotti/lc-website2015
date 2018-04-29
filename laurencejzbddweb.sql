-- phpMyAdmin SQL Dump
-- version 4.1.9
-- http://www.phpmyadmin.net
--
-- Client :  laurencejzbddweb.mysql.db
-- Généré le :  Mer 06 Mai 2015 à 03:15
-- Version du serveur :  5.1.73-2+squeeze+build1+1-log
-- Version de PHP :  5.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `laurencejzbddweb`
--

-- --------------------------------------------------------

--
-- Structure de la table `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `id_project` int(5) NOT NULL AUTO_INCREMENT,
  `name` tinytext NOT NULL,
  `titre` tinytext NOT NULL,
  `tags` set('full project','ui','ux','design','webdesign','development','front-end development','responsive','bootstrap','mobile','drupal','wordpress','angular','greensock','pixi.js','canvas','svg','webgl','processing','experimental','homework','installation','web agency') NOT NULL,
  `description` mediumtext NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `publish` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_project`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Contenu de la table `projects`
--

INSERT INTO `projects` (`id_project`, `name`, `titre`, `tags`, `description`, `url`, `publish`) VALUES
(1, 'mosaique', 'mosaïque', 'ux,design,development,processing,experimental,installation', 'Il ne s''agit pas là d''un projet web mais d''une installation artistique interactive, réalisée avec la collaboration de Michel Martin, artiste multimedia. \nLa partie programmation est développée avec Processing.\n', 'http://www.laurenceccotti.com/mosaique', 1),
(2, 'spaceodyssey', 'space odyssey', 'full project,front-end development,experimental,homework', 'Second projet réalisé lors des ateliers Html de l''Ifocop. \nSujet imposé : le cinema. Cependant, le choix du film restait libre.', 'http://web.laurenceccotti.com/projects/spaceodyssey', 0),
(3, 'helenkeller', 'helen keller', 'full project,webdesign,front-end development,experimental,homework', 'Site en hommage à Helen Keller.\nCe site à été réalisé lors des ateliers Html de l''Ifocop. Ce projet tend à sensibiliser à l''importance de l''accessibilité sur le web.', 'http://web.laurenceccotti.com/projets/helenkeller', 1),
(4, 'lecomptoir', 'le comptoir', 'full project,design,front-end development,homework', 'Sujet de validation des ateliers Html de l''Ifocop. \nRéalisation soumise au respect du cahier des charges fourni pour l''évaluation.', 'http://web.laurenceccotti.com/projets/lecomptoir', 1),
(5, 'lokisalle', 'lokisalle', 'full project,design,development,front-end development,homework', 'Sujet de validation des ateliers PHP et SQL de l''Ifocop. Réalisation soumise au respect du cahier des charges fourni pour l''évaluation. Il s''agit d''un site e-commerce réalisé dans son intégralité.', 'http://web.laurenceccotti.com/projets/lokisalle', 1),
(6, 'laurenceccotti', 'lauren ceccotti', 'full project,webdesign,front-end development', 'Site personnel, dédié à mon activité aristique. \nIl s''agit de ma première réalisation web.\n\n', 'http://www.laurenceccotti.com', 1),
(7, 'noteon', 'note on', 'ux,webdesign,front-end development', 'Refonte graphique et intégration pour le site de la galerie d''art berlinoise "Note On". \nCette proposition est celle qui à été séléctionnée. Ce projet est ma première intervention pour autrui.', 'http://noteon.de', 1),
(8, 'aaaf', 'association aéronautique & astronautique de France', 'front-end development,drupal,web agency', 'Créée en 1972, 3AF est la Société Savante Française de l’Aéronautique et de l’Espace.\nInterventions ponctuelles sur le site.', 'http://www.3af.fr', 1),
(9, 'ffa', 'Fédération Française d''Athlétisme', 'design,front-end development,drupal,web agency', 'Entraînement Athlé est un projet élaboré avec la Fédération Française d''Athlétisme. \n\nCette plateforme collaborative dédiée à la pratique et au savoir athlétique, offre à chacun la possibilité de s’approprier des connaissances au travers de documents techniques existants ou créés par ses contributeurs.', 'https://www.entrainement-athle.fr', 1),
(10, 'prs', 'patrick roger sculptures', 'ui,ux,webdesign,front-end development,responsive,mobile,drupal,web agency', 'Site consacré à l''activité de sculpteur de Patrick Roger, artiste chocolatier.\n\nAttention ! Site accessible à condition de désactiver Flash Player, ou depuis les terminaux mobiles.\n', 'http://patrickroger-sculptures-qlf.webs.icilalune.net', 1),
(11, 'massaud', 'jean-marie massaud', 'front-end development,drupal,web agency', 'Site dédié à l''architecte et designer français Jean Marie Massaud.', 'http://www.massaud.com', 1),
(12, 'metzgerboucherie', 'boucherie metzger', 'front-end development,responsive,bootstrap,mobile,drupal,web agency', 'Site vitrine de la boucherie au détail haut de gamme des frères Metzger, située à Boulogne.', 'http://www.boucherie-metzger.com', 1),
(13, 'metzgercorp', 'les freres metzger', 'front-end development,responsive,bootstrap,mobile,drupal,web agency', 'Les frères Metzger appartiennent à une très ancienne famille de bouchers. \nLe site présente leur savoir faire auprès des professionnels de la restauration gastronomique.', 'http://www.metzger-freres.com', 1),
(14, 'fusebox', 'fusebox', 'full project,ui,ux,webdesign,development,responsive,mobile,drupal', 'Design et développement pour L''Atelier Phase à Montpellier.\nFusebox est un concept de plateforme collaborative publiant les réalisations d’artistes émergents.', 'http://www.fusebox.fr', 1),
(15, 'sophiebellot', 'sophie bellot', 'full project,ui,ux,webdesign,development,drupal', 'Réalisation pour l''artiste plasticienne Sophie Bellot, qui présente avec ce site l''ensemble de ses créations.', 'http://sophiebellot.fr', 1);

-- --------------------------------------------------------

--
-- Structure de la table `skills`
--

CREATE TABLE IF NOT EXISTS `skills` (
  `id_skill` int(5) NOT NULL AUTO_INCREMENT,
  `titre` tinytext NOT NULL,
  `type` tinytext,
  `level` enum('tera','giga','mega','kilo','hecto','deca','') NOT NULL,
  PRIMARY KEY (`id_skill`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- Contenu de la table `skills`
--

INSERT INTO `skills` (`id_skill`, `titre`, `type`, `level`) VALUES
(1, 'ux - ui', 'front', 'tera'),
(2, 'html5', 'front', 'tera'),
(3, 'css3', 'front', 'tera'),
(4, 'bootstrap', 'front', 'giga'),
(5, 'canvas', 'draw', 'hecto'),
(6, 'compass', 'front', 'giga'),
(7, 'svg', 'draw', 'hecto'),
(8, 'drupal', 'cms', 'giga'),
(9, 'php', 'back', 'mega'),
(10, 'mysql', 'back', 'kilo'),
(11, 'raphael', 'js', 'kilo'),
(12, 'jquery', 'js', 'tera'),
(13, 'javascript', 'js', 'mega'),
(14, 'greensock', 'js', 'mega'),
(15, 'pixi', 'js', 'kilo'),
(16, 'git', 'devtool', 'deca'),
(17, 'processing', 'bonus', 'hecto');

-- --------------------------------------------------------

--
-- Structure de la table `stages`
--

CREATE TABLE IF NOT EXISTS `stages` (
  `id_stage` int(5) NOT NULL AUTO_INCREMENT,
  `titre` tinytext NOT NULL,
  `description` tinytext NOT NULL,
  `date_debut` year(4) NOT NULL,
  `date_fin` year(4) DEFAULT NULL,
  PRIMARY KEY (`id_stage`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Contenu de la table `stages`
--

INSERT INTO `stages` (`id_stage`, `titre`, `description`, `date_debut`, `date_fin`) VALUES
(1, 'Naissance', 'Née le 25 Octobre 1983 à Monaco', 1983, NULL),
(2, 'Bac L Mention Bien', 'Lycée Albert Ier, Monaco', 2003, NULL),
(3, 'DNSEP (Bac+5) avec Mention', 'Diplôme National d''Expression Plastique\n\nÉcole Supérieure des Beaux Arts de Montpellier', 2010, NULL),
(4, 'Diplôme de niveau II\nDéveloppeur Intégrateur Web', 'Formation à l''IFOCOP, Paris XI°\n\nDécembre 2012 - Aout 2013', 2012, 2013),
(5, 'Webdesigner Développeur Front', 'Ici La Lune, Paris I°\nSeptembre 2013 - Aout 2014', 2013, 2014),
(6, 'DNAP (Bac+3)', 'Diplôme National d''Arts Plastiques\n\nÉcole Supérieure des Beaux Arts de Montpellier\n', 2008, NULL),
(7, 'École Supérieure des Beaux Arts de Montpellier', 'L''admission à l''ESBAMA me permet de suivre en plus du cursus classique, les cours d''informatique, d''infographie et multimédia', 2004, 2010),
(8, 'Stage Webdesigner Développeur Front', 'Ici La Lune, Paris I°\nAvril à Aout 2013 \n\nStage faisant suite à la formation\nDéveloppeur Intégrateur Web de L''IFOCOP ', 2013, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
