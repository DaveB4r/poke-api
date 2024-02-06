<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
include "./PokeAPi.php";

$pokemon = $_REQUEST['pokemon'];
$poke_api = new PokeApi($pokemon);

echo json_encode($poke_api->searchPokemon(),true);