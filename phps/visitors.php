<?php
require("conection.php");
// Datos del visitante
$ip = $_SERVER['REMOTE_ADDR'];
$date = date('Y-m-d H:i:s');

// Consulta para insertar datos en la tabla "visitors"
$sql = "INSERT INTO `visitors` (`ip_visitor`, `date_visitor`) VALUES (:ip, :dateIng)";

// Preparar la consulta
$stmt = $conn->prepare($sql);

// Asignar valores a los parámetros
$stmt->bindParam(':ip', $ip);
$stmt->bindParam(':dateIng', $date);

// Ejecutar la consulta
if ($stmt->execute()) {
  
}
?>