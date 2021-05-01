import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('https://api.github.com/users/rreckonerr');

    return response.json();
  }
}
