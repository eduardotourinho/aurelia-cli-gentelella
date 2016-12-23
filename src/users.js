import {inject, Lazy} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@inject(Lazy.of(HttpClient))
export class Users {
  heading = 'Github Users';
  users = [];

  constructor(getHttpClient) {
    this.getHttpClient = getHttpClient;
  }

  async activate() {
    // ensure fetch is polyfilled before we create the http client
    const http = this.http = this.getHttpClient();

    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    const response = await http.fetch('users');
    this.users = await response.json();
  }
}
