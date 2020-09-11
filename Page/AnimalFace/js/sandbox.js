
function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);


        // 파일이 로드 되면 인공지능 init 함수 실행이 끝난 다음에 predict 함수 실행
        init().then(() => {
            predict();
        });


    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});

// 인공지능 초기화 및 측정
// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "./my_model/";

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    // const flip = true; // whether to flip the webcam
    // webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    // await webcam.setup(); // request access to the webcam
    // await webcam.play();
    // window.requestAnimationFrame(loop);

    // append elements to the DOM
    // document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
}

// async function loop() {
//     webcam.update(); // update the webcam frame
//     await predict();
//     window.requestAnimationFrame(loop);
// }

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    var image = document.getElementById('face-image')
    const prediction = await model.predict(image, false);

    //오름차순
    // prediction.sort((a,b) => parseFloat(a.probability) - parseFloat(b.probability));
    // 내림차순
    prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));

    console.log(prediction[0].className)

    var resultMessage = "";
    switch (prediction[0].className) {
        case "dog":
            resultMessage = "강아지 상";
            break;

        case "cat":
            resultMessage = "고양이 상";
            break;

        case "bear":
            resultMessage = "곰 상";
            break;

        case "dino":
            resultMessage = "공룡 상";
            break;

        case "squirrel":
            resultMessage = "다람쥐 상";
            break;
            
        case "horse":
            resultMessage = "말 상";
            break;

        case "cow":
            resultMessage = "소 상";
            break;

        case "fox":
            resultMessage = "여우 상";
            break;

        case "mouse":
            resultMessage = "쥐 상";
            break;

        case "rabbit":
            resultMessage = "토끼 상";
            break;

        default:
            break;
    }
    $('.resultMessage').html(resultMessage);

    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}