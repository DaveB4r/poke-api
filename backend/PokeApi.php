<?php

class PokeApi
{
  protected $apiUrl;
  public function __construct($pokemon)
  {
    $this->apiUrl = "https://pokeapi.co/api/v2/pokemon/$pokemon";
  }

  public function searchPokemon()
  {
    try {
      // inicializo la sesion cURL
      $curlSession = curl_init($this->apiUrl);

      // configuro las opciones
      curl_setopt($curlSession, CURLOPT_RETURNTRANSFER, true);

      // ejecuto la sesion cURL y obtengo una respuesta
      $response = curl_exec($curlSession);
      if(curl_errno($curlSession)){
        echo 'Curl error: '. curl_errno($curlSession);
      }
      if ($response) {
        $data = json_decode($response, true);
        return $data;
      } else {
        return "Ha ocurrido un error";
      }
    } catch (\Exception $error) {
      throw $error;
    }
  }
}
