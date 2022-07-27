// Be sure to add class of 'focus-image' to all images you wish to be focusable. Or add a different class name as your target class as the 
// only argument to the constructor function



function FocusImage(targetClass) {

  var _this = this;
  this.targetClass = targetClass;
  this.images;
  this.inputImage;
  this.imageIndex;
  this.currentlyLit = false;
  this.body = document.querySelector('body');
  this.overlay = document.createElement('div');
  this.close = document.createElement('i');
  this.focused_img = document.createElement('img');


  this.render = () => {

    this.addListeners();
    this.addKeyListeners()

  }

  this.addListeners = () => {
    this.images = document.getElementsByClassName(this.targetClass); console.log(this.images)
    //Loop through Nodelist to setAttribute (index) and addEventListener
    if (this.images.length > 0) {
      console.log('addListeners() if')

      Array.prototype.slice.call(this.images).forEach((img, index) => {

        img.setAttribute(`${targetClass}-index`, index);
        img.addEventListener('click', (e) => { e.stopPropagation(); _this.displayImage(img) })

      })

    }
    else { console.log('no focused images') }

    this.close.addEventListener('click', _this.hideImage)
  }

  this.displayImage = (img) => {
    if (this.currentlyLit === false) {
      this.currentlyLit = true
      console.log(this.currentlyLit)
      // set curret Image and create element with src of one being highlighted
      this.inputImage = img;
      this.imageIndex = this.inputImage.getAttribute('image-index');


      this.focused_img.src = this.inputImage.src;
      this.focused_img.className = 'image-selected';
      console.log(this.imageIndex);
      console.log(this.inputImage);

      //Append overlay and img
      this.body.prepend(this.overlay)
      this.overlay.className = 'image-overlay'
      this.overlay.appendChild(this.focused_img)
      //Add close Element and its Listener to remove overlay
      this.overlay.appendChild(this.close)
      this.close.className = 'close bi bi-x'
      this.close.innerHTML ='X';
      
      console.log(this.close.classList)


    }
    if (this.currentlyLit === true) {
      this.focused_img.src = img.src

    }

  }
  this.hideImage = () => {

    this.close.remove();
    this.overlay.remove();
    this.focused_img.remove();
    this.currentlyLit = false;

    console.log(_this.currentlyLit)


  }




  this.prev = () => {

    if (this.currentlyLit === true && this.imageIndex != 0) {
      this.imageIndex = this.imageIndex - 1;
      this.inputImage = this.images[this.imageIndex]
      console.log(this.inputImage)
      this.displayImage(this.inputImage)


    }

  }
  this.next = () => {

    if (this.currentlyLit === true & this.imageIndex != this.images.length - 1) {
      this.imageIndex = this.imageIndex + 1;
      this.inputImage = this.images[this.imageIndex]
      console.log(this.inputImage)
      this.displayImage(this.inputImage)

    }

  }
  this.addKeyListeners = () => {


    document.addEventListener('keydown', bindKeys)
  }
  const bindKeys = (e) => {

    if (e.keyCode === 37 && this.currentlyLit === true) {
      this.prev();
      return;
    }

    else if (e.keyCode === 39 && this.currentlyLit === true) {
      this.next();
      return;
    }
    else if (e.keyCode === 27 && this.currentlyLit === true) {
      this.hideImage();
      return;
    }
  }


}



let focusimage = new FocusImage('focus-image')

export {focusimage}