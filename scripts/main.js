
//this is basically setting string constants so that i can access the data
//selectors easily... good idea big nerd ranch guide.
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR  = '[data-image-role="trigger"]';

//basically make the onclick listeners for each of the images...
//that sends the url and the text to the setDetails function...

//holy freak... this is some good code...
//well done big nerd ranch...

//it's a lot like android programming...
//setting event listners and all...

function setDetails(imageUrl, titleText) {
  'use strict';
  //Code goes here
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src',imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;

}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click',function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  return [].slice.call(thumbnails);
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

initializeEvents();
