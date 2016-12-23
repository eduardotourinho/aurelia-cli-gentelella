import {bindable} from "aurelia-framework";

export class NavBar {

  @bindable profile;

  constructor() {

  }

  toggleClicked(event)
  {
    let target = event.srcElement.id;
    let body = $('body');
    let menu = $('#sidebar-menu');

    // toggle small or large menu
    if (body.hasClass('nav-md')) {
      menu.find('li.active ul').hide();
      menu.find('li.active').addClass('active-sm').removeClass('active');
    } else {
      menu.find('li.active-sm ul').show();
      menu.find('li.active-sm').addClass('active').removeClass('active-sm');
    }
    body.toggleClass('nav-md nav-sm');

    return false;
  }

}

