import expect from 'expect';
import MediaFire from '../src/';
import ValidationError from '../src/lib/ValidationError.js';

describe('MediaFire', () => {

  it('should exist', () => {
    expect(MediaFire)
      .toExist()
      .toBeA('function');
  });

  describe('constructor', () => {
    it('should throw when no id or key is present in params', () => {
      expect(() => {new MediaFire();}).toThrow(ValidationError); // eslint-disable-line no-new
    });
    it('should initialize redux store with a required Id and Key', () => {
      const Api = new MediaFire({id: 1, key: 'happy'});
      expect(Api._store).toExist();
      expect(Api._store.getState()).toBeA('object');
    });
  });
});
