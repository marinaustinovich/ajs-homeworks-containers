import './css/style.css';
import showCreatingTeam from './js/Team';
import showMap from './js/ErrorRepository';
import showSettings from './js/Settings';

// for the first task about Set
showCreatingTeam();

// for the second task about Map
showMap();

// for the third tast about Map for game

showSettings(['theme', 'light'], ['music', 'trance'], ['difficulty', 'nightmare']);
