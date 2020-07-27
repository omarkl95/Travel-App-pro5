import { updateUI } from '../client/js/updateUI';


describe('Function existence check', () => {
  test('Return true', () => {
    expect(updateUI).toBeDefined();
  });
});