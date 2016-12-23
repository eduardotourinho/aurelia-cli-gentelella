import {bindable, inject} from "aurelia-framework";
import {EventAggregator} from "aurelia-event-aggregator";

@inject(EventAggregator)
export class ContactCard {

  @bindable profile;

  constructor(eventAggregator) {
    this.ea = eventAggregator;
  }

  toggleStatus() {
    this.ea.publish('toggleStatus', {host: this.profile});
  }

  editContact() {
    this.ea.publish('editContact', {host: this.profile});
  }
}

