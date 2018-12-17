import { expect } from '@open-wc/testing'
import hello from '../src'

describe('hello', () => {
  it('should hello world', async () => {
    // given
    const result = await hello('world');

    // then
    expect(result).to.equal('Hello world');
  })
})
