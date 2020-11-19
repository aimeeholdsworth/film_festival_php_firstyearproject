$('#myCarousel').carousel({
                interval: 5000
        });

        $('#carousel-text').html($('#slide-content-0').html());

        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click( function(){
                var id_selector = $(this).attr("id");
                var id = id_selector.substr(id_selector.length -1);
                var id = parseInt(id);
                $('#myCarousel').carousel(id);
        });


        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid', function (e) {
                var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });

var vid = document.getElementById("myVideo"); //w3schools

function enableMute() { 
    vid.muted = true;
} 

function disableMute() { 
    vid.muted = false;
} 

function checkMute() { 
    alert(vid.muted);
} 

var vid = document.getElementById("video3");
vid.muted = true;


//sey start time videos `` http://stackoverflow.com/questions/5981427/start-html5-video-at-a-particular-position-when-loading
document.getElementById('video3').addEventListener('loadedmetadata', function() {
  this.currentTime = 1;
}, false);

document.getElementById('video2').addEventListener('loadedmetadata', function() {
  this.currentTime = 2;
}, false);







//thumbnails slider
function setPlayVideoClickEventForThumbs() {
            //1. helper functions
            var addEvent = function (el, eventName, eventHandler) {
                if (el.addEventListener)
                    el.addEventListener(eventName, eventHandler, false);
                else if (el.attachEvent) //IE
                    el.attachEvent('on' + eventName, eventHandler);
            }
            var getChildren = function (node) {
                var ns0 = node.childNodes;
                var ns1 = [];
                if (ns0) {
                    for (var i = 0, len = ns0.length; i < len; i++) {
                        if (ns0[i].nodeType == 1) ns1.push(ns0[i]);
                    }
                }
                return ns1;
            };

            var playVideo = function (thumb) {
                for (var i = 0; i < links.length; i++) {
                    if (links[i] != null) {
                        if (parseInt(thumb.getAttribute("rel")) == i)
                            links[i].setAttribute("autoPlayVideo", "true");
                        else
                            links[i].setAttribute("autoPlayVideo", "false");
                    }
                }
            };

            //2. set links
            var links = [];
            var slides = getChildren(document.getElementById("slider"));
            for (var i = 0; i < slides.length; i++) {
                if (slides[i].className.indexOf("video") != -1) {
                    links.push(slides[i]);
                }
                else links.push(null);
            }

            //3. set thumbnail click event
            var divs = document.getElementById("thumbs").getElementsByTagName("div");
            for (var i = 0; i < divs.length; i++) {
                if (divs[i].className == "thumb") {
                    divs[i].setAttribute("rel", i);
                    addEvent(divs[i], "click", function () { playVideo(this); });
                }
            }

            //4. return links
            return links;
        }
    
        function afterSlideChange(args) {
            //args: [0]-currentSlide index, [1]-currentImage
            for (var i = 0; i < videoSlides.length; i++) {
                if (videoSlides[i] != null) {
                    videoSlides[i].setAttribute("autoPlayVideo", "false");
                }
            }
        }

        var videoSlides = setPlayVideoClickEventForThumbs();



        


//lightbox js for gallery page
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  $(".img-responsive").on("click", function() {
   var src = $(this).find("img.img-responsive").attr('src');
   var title = $(this).attr("data-title");
   var paragraph = $(this).attr("data-caption"); 
   console.log(paragraph);
   console.log(title);
   $(".caption-text").html(paragraph);
   $(".modal-title").html(title);
   $("#imagepreview").attr("src", src);
    //  when the user clicks the modal window appears 
   $('#imagemodal').modal('show'); 
});



//sliding

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

