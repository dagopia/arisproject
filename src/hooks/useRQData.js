import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
const baseUrl = "https://63be6db4585bedcb36ad0e57.mockapi.io/api/v1/";
// Fetch all data from backend
// 1st param : endpoint
const useGetAllData = (endpoint) => {
  const fetch = () => {
    return axios.get(`${baseUrl}${endpoint}`);
  };
  var qryKey = endpoint + "_data";
  return useQuery(qryKey, fetch);
};

// Fetch single data only by passing
// Call the useGetData custom query to fetch single data/detail of single data
// 1st param : id
// 2nd param : endPoint
const useGetData = (id, endPoint) => {
  const fetch = ({ queryKey }) => {
    const id = queryKey[1];
    const endPoint = queryKey[0];
    return axios.get(`${baseUrl}${endPoint}/${id}`);
  };
  return useQuery([endPoint, id], fetch);
};

// Post data to the backend
// Call the usePostData custom query with 2 parametrs
// 1st param : endpoint
// 2nd param : data
const usePostData = (endPoint) => {
  const queryClient = useQueryClient();
  return useMutation(
    (data) => {
      console.log("Data : " + data);
      return axios.post(`${baseUrl}${endPoint}`, data);
    },
    {
      // onSuccess: (data) => {
      //   queryClient.setQueryData(endPoint + "_data", (oldQueryData) => {
      //     return {
      //       ...oldQueryData,
      //       data: [...oldQueryData.data, data.data],
      //     };
      //   });
      // },
    }
  );
};
// Edit data
// Call the useChangeStatus custom query with 2 parametrs
// 1st param : endpoint
// 2nd param : data
const useChangeStatus = (endpoint) => {
  return useMutation(({ id, payment_status }) => {
    return axios.put(`${baseUrl}${endpoint}/${id}`, {
      payment_status,
    });
  });
};

export { useGetAllData, useGetData, usePostData, useChangeStatus };
