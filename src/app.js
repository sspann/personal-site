export class App {
  configureRouter(config, router) {
    config.title = 'Steven Spann';
    config.map([
      { route: '', name: 'home', moduleId: './home/home', nav: true, title: 'Home' }
    ]);

    this.router = router;
  }
}
