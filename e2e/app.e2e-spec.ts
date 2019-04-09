import { ProyectoNuevoPage } from './app.po';

describe('proyecto-nuevo App', () => {
  let page: ProyectoNuevoPage;

  beforeEach(() => {
    page = new ProyectoNuevoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
