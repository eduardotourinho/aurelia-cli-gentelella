import * as NProgress from "nprogress";

export class App {

  constructor() {
    this.calculateHeight = e => { debounce(calculateHeight()) };
  }

  configureRouter(config, router) {
    let preActivate = {
      run: (navigationInstruction, next) => {
        if (NProgress) {
          NProgress.start();
        }
        return next()
      }
    };

    let postRender = {
      run: (navigationInstruction, next) => {
        if (NProgress) {
          NProgress.done();
        }

        return next();
      }
    };

    config.title = 'Aurelia';
    config.addPreActivateStep(preActivate);
    config.addPostRenderStep(postRender);

    config.map([
      {route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome'},
      {route: 'users', name: 'users', moduleId: './users', nav: true, title: 'Github Users'},
      {route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router'}
    ]);

    this.router = router;

    this.authenticatedUser = {
      "name": "John Doe",
      "photoUrl": "scripts/images/img.jpg"
    };
  }

  attached() {
    calculateHeight();
    window.addEventListener('resize', this.calculateHeight);
  }

  detached() {
    window.removeEventListener('resize', this.calculateHeight);
  }
}

let calculateHeight = () => {
  let rightCol = $('.right_col');
  // reset height
  rightCol.css('min-height', $(window).height());

  let bodyHeight = $('body').outerHeight(),
    footerHeight = $('body').hasClass('footer_fixed') ? 0 : $('footer').height(),
    leftColHeight = $('.left_col').eq(1).height() + $('.sidebar-footer').height(),
    contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

  // normalize content
  contentHeight -= $('.nav_menu').height() + footerHeight;

  rightCol.css('min-height', contentHeight);
};

// debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
let debounce = (func, threshold, execAsap) => {
    let timeout;

    return function debounced () {
      let obj = this, args = arguments;
      function delayed () {
        if (!execAsap)
          func.apply(obj, args);
        timeout = null;
      }

      if (timeout) {
        clearTimeout(timeout);
      } else if (execAsap) {
        func.apply(obj, args);
      }

      timeout = setTimeout(delayed, threshold || 100);
    };
};
