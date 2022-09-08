import axios from 'axios';
import { OCNTokenRequest } from './model';
import { OCNSignin } from './token';


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const url = "/learning/oauth-api/rest/v1/token"

const fakeHost = "fakeHost"
const fakeClientId = "fakeClientId"
const fakeClientSecret = "fakeClientSecret"
const fakeUserId = "fakeUserId"

const fakeTokenRequest = new OCNTokenRequest(
  fakeClientId, fakeClientSecret, fakeUserId,
);

const fakeApplicationInterfaceKey = "fakeKey"

describe('OCNSignin', () => {
  it('function gets called with correct parameters when called without optional arguments', async () => {
    mockedAxios.post.mockImplementationOnce(() => Promise.resolve({data: "data"}));

    await OCNSignin(fakeHost,fakeClientId,fakeClientSecret,fakeUserId)

    expect(mockedAxios.post).toHaveBeenCalledWith(
      fakeHost+url,
      fakeTokenRequest,
      {
        headers: {}
      }
    );
  });
  it('function gets called with correct parameters when called with optional arguments', async () => {
    mockedAxios.post.mockImplementationOnce(() => Promise.resolve({data: "data"}));

    await OCNSignin(fakeHost,fakeClientId,fakeClientSecret,fakeUserId,fakeApplicationInterfaceKey)

    expect(mockedAxios.post).toHaveBeenCalledWith(
      fakeHost+url,
      fakeTokenRequest,
      {
        headers: {
        "Application-Interface-Key": fakeApplicationInterfaceKey
      }
    }
    );
  });


});