<?php
// Conexión a la base de datos 
$servidor = "localhost";
$usuario = "samo";
$password = "@Samo7266";
$nombre_db = "portafolios";
$puerto = 3306;

// Crear una conexión PDO
try {
  $dsn = "mysql:host=$servidor;port=$puerto;dbname=$nombre_db";
  $conn = new PDO($dsn, $usuario, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
/*   echo "Conexión exitosa con PDO"; */

}catch(PDOException $e) {
  echo "Error al conectar a la base de datos: " . $e->getMessage();
}
?>