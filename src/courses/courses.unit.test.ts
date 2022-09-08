import axios from 'axios';
import { OCNPostCourses } from './courses';
import { OCNCoursesRequest } from './model'

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const url = "/learning/odatav4/public/admin/ocn/v1/OcnCourses"

const fakeHost = "fakeHost"
const fakeToken = "faketoken"
const fakeRequest = {} as OCNCoursesRequest

const fakeApplicationInterfaceKey = "fakeKey"

describe('OCNPostCourses', () => {
  it('function gets called with correct parameters when called without optional arguments', async () => {
    mockedAxios.post.mockImplementationOnce(() => Promise.resolve({data: "data"}));

    await OCNPostCourses(fakeHost,fakeToken,fakeRequest)

    expect(mockedAxios.post).toHaveBeenCalledWith(
      fakeHost+url,
      fakeRequest,
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

    await OCNPostCourses(fakeHost,fakeToken,fakeRequest,fakeApplicationInterfaceKey)

    expect(mockedAxios.post).toHaveBeenCalledWith(
      fakeHost+url,
      fakeRequest,
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