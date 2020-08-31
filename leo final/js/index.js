




	document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}



/////////////////camera//////////////


var app = {


    capture: function () {



        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            salvarToPhotoAlbum: true,
            cameraDirection: Camera.Direction.FRONT,
            targetHeight: 1000,
            TargetWidth: 1000


        });

        function onSuccess(imageData) {
            var image = document.getElementById('minhaimagem');
            image.style.display = "block";
            image.src = "data:image/jpeg;base64," + imageData;


        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }


    }




};
