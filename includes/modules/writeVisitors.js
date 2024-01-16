export function writeVisitors(){
    fetch('phps/visitors.php')
  .then(response => response.text())
  .then(data => {
    console.log(data);
    // datos devueltos por PHP
  })
  .catch(error => {
    console.error('Ha ocurrido un error:', error);
  });
}