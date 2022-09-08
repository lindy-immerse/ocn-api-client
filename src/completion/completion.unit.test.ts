import axios from 'axios';
import { OCNCompletionStatus } from './completion';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const url = "/learning/odatav4/public/admin/learningevent-service/v1/OCNLearningEvents"

const fakeHost = "fakeHost"
const fakeToken = "faketoken"
const fakeCompletion ={
  userID: "fakeUserId",
  courseID: "fakeCourseId",
  providerID: "fakeProviderId",
  courseCompleted: true as const,
  completedTimestamp: 1234
}

const fakeApplicationInterfaceKey = "fakeKey"

describe('OCNCompletionStatus', () => {
  it('function gets called with correct parameters when called without optional arguments', async () => {
    mockedAxios.post.mockImplementationOnce(() => Promise.resolve({data: "data"}));

    await OCNCompletionStatus(fakeHost,fakeToken,fakeCompletion)

    expect(mockedAxios.post).toHaveBeenCalledWith(
      fakeHost+url,
      fakeCompletion,
      {
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${fakeToken}`
      }
    }
    );
  });
  it('function gets called with correct parameters when called with optional arguments', async () => {
    mockedAxios.post.mockImplementationOnce(() => Promise.resolve({data: "data"}));

    await OCNCompletionStatus(fakeHost,fakeToken,fakeCompletion,fakeApplicationInterfaceKey)

    expect(mockedAxios.post).toHaveBeenCalledWith(
      fakeHost+url,
      fakeCompletion,
      {
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${fakeToken}`,
        "Application-Interface-Key": fakeApplicationInterfaceKey
      }
    }
    );
  });


});