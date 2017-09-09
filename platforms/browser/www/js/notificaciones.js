document.addEventListener('deviceready', onDeviceReady, false);

        function onDeviceReady() {
            //Do Something
        }

        function beepNow() {
            navigator.notification.beep(3);
        }

        function vibrateNow() {
            navigator.notification.vibrate(1000);
        }

        function alertNow() {
            navigator.notification.alert(
                'Recibiendo alerta!', // message
                null, // callback
                'Notificaciones-API', // title
                'Listo' // buttonName
            );

        }

        function confirmNow() {
            navigator.notification.confirm(
                'Te gusta esta App?', // message
                onConfirm, // callback to invoke with index of button pressed
                'Retroalimenta App', // title
                ['Si', 'No'] // buttonLabels
            );

        }

        function onConfirm(buttonIndex) {
            alert('Boton seleccionado : ' + buttonIndex);
        }

        function promptNow() {
            navigator.notification.prompt(
                'Tu nombre:', // message
                handleAction, // callback to invoke
                'Registro', // title
                ['Ok', 'Star'], // buttonLabels
                'Super Star Ricardo' // defaultText
            );

            function handleAction(results) {
                alert("Seleccionaste el botón " + results.buttonIndex + " con entrada '" + results.input1 + "'");
            }

        }