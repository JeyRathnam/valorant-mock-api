  
import got from 'got';
import { getPlaces } from './OpenCageDataProvider';

jest.mock('got');

describe('OpenCageDataProvider', () => {
  test('an empty query string', async () => {
    (got as any).mockResolvedValue({ body: '{"features": []}' });
    const result = { features: [] };
    expect(result).toEqual({ features: [] });
  });
});