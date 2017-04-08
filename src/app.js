export class App {
  configureRouter(config, router) {
    config.title = 'Steven Spann';
    config.map([
      { route: '', name: 'tabs', moduleId: './tabs' }
    ]);

    this.router = router;
  }
}
