<?php
include ("validacio.php");

	//Incluimos la conexion a BBDD
	include ("conexion.php");
	//Lanzamiento de la consulta
	$sql = "SELECT tbl_message.mess_id, tbl_message.mess_matter, tbl_message.mess_dateText, tbl_message.mess_timeText, tbl_message.mess_read from tbl_message inner join tbl_messUser on tbl_message.meus_id=tbl_messUser.meus_id Where tbl_messUser.user_id1='$_SESSION[wizzperid]'";
	$datos = mysqli_query($con, $sql);
	if(mysqli_num_rows($datos) > 0){
		while($send = mysqli_fetch_array($datos)){
			if($send['mess_read'] == 0){
				
			}else{
				
			}
			echo $send['mess_matter'];
			echo $send['mess_dateText'];
			echo $send['mess_timeText'];
			echo "<br/> ";
		}
	}else{
		echo "Aún no has enviado ningún mensaje";
	}
	mysqli_close($con);
?>