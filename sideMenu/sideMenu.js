//1. Set your initially hidden, button expandable (by clicking hamburger Menu button) sideMenu
// to be a <div> of Class hiddenSideMenu
//2.Link sideMenu.css in the <head> of your page and the .js in the head
// and executed with an object instance of SideMenu.render() or imported a a module
//
//3. Name button to trigger the display of sideMenu as menuButton and make it a Button

function SideMenu() {

    var _this = this;
    this.menuButton;
    this.hiddenMenu = document.querySelector('div.hiddenSideMenu');
    this.sideMenu;
    this.body = document.querySelector('body');
    this.overlay = document.createElement('div');
    this.overlayIsOn = false;


    this.render = () => {
        this.initialize();
        this.assignisteners()

    }

    this.initialize = () => {
        console.log(this.hiddenMenu)
        this.hiddenMenu.className = 'noDisplay';



    }
    this.assignisteners = () => {
        this.menuButton = document.querySelector('button.menuButton');
        console.log(this.menuButton)
        this.menuButton.addEventListener('click', _this.showMenu)
        this.overlay.addEventListener('click', _this.removeOverlay)
        window.addEventListener('scroll', _this.removeOverlay)

    }

    this.addOverlay = () => {
        if (this.overlayIsOn === false) {
            this.body.prepend(this.overlay)
            this.overlay.className = 'sideMenuOverlay'
            this.overlayIsOn = true;
        }


    }

    this.removeOverlay = () => {
        if (this.overlayIsOn === true) {
            this.overlay.remove();
            this.overlayIsOn = false
        }


    }
    this.showMenu = (e) => {
        e.stopPropagation();


        this.addOverlay();
        console.log(this.overlay)
        this.overlay.appendChild(this.hiddenMenu)
        this.hiddenMenu.classList.add('sideMenu')
    }


}

const sidemenu = new SideMenu
export { sidemenu }