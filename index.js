startImageTransition();
  
function startImageTransition() {
    var images = document.getElementsByClassName("rotating-image");

    for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

    var top = 1;

    var cur = images.length - 1;

    setInterval(changeImage, 5000);

    async function changeImage() {

        var nextImage = (1 + cur) % images.length;

        images[cur].style.zIndex = top + 1;
        images[nextImage].style.zIndex = top;

        await transition();

        images[cur].style.zIndex = top;

        images[nextImage].style.zIndex = top + 1;

        top = top + 1;

        images[cur].style.opacity = 1;
        
        cur = nextImage;

    }

    function transition() {
        return new Promise(function(resolve, reject) {
            var del = 0.01;

            var id = setInterval(changeOpacity, 10);

            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }

        })
    }
}


























// -------------------------------------Easy rotating images ---------------------
// const rotatingImgContainer =  document.querySelector(".rotating-img-container"); 
//       const imagesUrlArray = [
//           "url('https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg')",
//           "url('https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg')",
//           "url('https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg')",
//           "url('https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg')",
//           "url('https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg')"
//         ]
        
//       let counter = 0
//       setInterval(() => {
//           let imgUrl; 
//           if(counter === 0){
//             imgUrl = imagesUrlArray[counter]
//           } else if(counter === 1) {
//             imgUrl = imagesUrlArray[counter]
//           } else if(counter === 2){
//             imgUrl = imagesUrlArray[counter]
//           } else if(counter === 3){
//             imgUrl = imagesUrlArray[counter]
//           } else if(counter === 4){
//             imgUrl = imagesUrlArray[counter]
//           } else if (counter > 4){
//               counter = 0; 
//               imgUrl = imagesUrlArray[counter]
//           }

//           counter++; 


//           rotatingImgContainer.style.backgroundImage = imgUrl
//         }, 5000);