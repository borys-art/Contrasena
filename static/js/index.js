//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	//alert("led on");
	console.log("led1 on");
	//document.getElementById("sensor1").innerHTML="led on";
	message = new Paho.MQTT.Message("ON_led1");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);
  
}
function LED1_Off(){	
	//alert("led off");
	console.log("led1 off");
	message = new Paho.MQTT.Message("OFF_led1");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);
	//document.getElementById("sensor1").innerHTML="led off";
}

function LED2_On() {
	//alert("led on");
	console.log("led2 on");
	//document.getElementById("sensor2").innerHTML="led on";
	message = new Paho.MQTT.Message("ON_led__2");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);
  
}
function LED2_Off(){	
	//alert("led off");
	console.log("led2 off");
	message = new Paho.MQTT.Message("OFF_led__2");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);
	//document.getElementById("sensor2").innerHTML="led off";
}

function Contrasena(){	
	//alert("led off");
	var pwd = document.getElementById('pw').value;
	console.log('Contraseña');
	if(pwd=="12345a"){
	console.log("Contraseña Correcta");
	alert("Constraseña Correcta");
	pw.focus();
	message = new Paho.MQTT.Message("Contrasena Correcta");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
	}else if(pwd=="12345b"){
	console.log("Contraseña Correcta");
	alert("Constraseña Correcta");
	pw.focus();
	message = new Paho.MQTT.Message("Contrasena Correcta1");
    	message.destinationName = "luisrod-234@hotmail.com/test1";
    	client.send(message);
	}else{
	console.log("Contraseña Incorrecta");
	alert("Constraseña Incorrecta");
	pw.focus();
	}
}

// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  

  var options = {
   useSSL: false,
    userName: "luisrod-234@hotmail.com",
    password: "Embebidos2021",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("luisrod-234@hotmail.com/test");
    client.subscribe("luisrod-234@hotmail.com/test2");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "luisrod-234@hotmail.com/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  y=message.payloadString;
	  if(y=="hola, el sensor 1 se encuentra encendido"){
	  document.getElementById("sensor1").innerHTML=y;
	  document.getElementById("historial").innerHTML="";
	  }
	  else if(y=="hola, el sensor 1 se encuentra apagado"){
	  document.getElementById("sensor1").innerHTML=y;
	  document.getElementById("historial").innerHTML="";	  
	  }
	  else if(y=="hola, el sensor 2 se encuentra encendido"){
	  document.getElementById("sensor2").innerHTML=y;
	  document.getElementById("historial").innerHTML="";
          }
          else if(y=="hola, el sensor 2 se encuentra apagado"){
	  document.getElementById("sensor2").innerHTML=y;
	  document.getElementById("historial").innerHTML="";
	  }
	  else{
	  document.getElementById("historial").innerHTML=y;
	  document.getElementById("sensor1").innerHTML="";
	  document.getElementById("sensor2").innerHTML="";	  
	  }
	  
  }
  
