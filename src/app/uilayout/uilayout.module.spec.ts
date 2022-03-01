import { UilayoutModule } from './uilayout.module';

describe('UilayoutModule', () => {
  let uilayoutModule: UilayoutModule;

  beforeEach(() => {
    uilayoutModule = new UilayoutModule();
  });

  it('should create an instance', () => {
    expect(uilayoutModule).toBeTruthy();
  });
});
