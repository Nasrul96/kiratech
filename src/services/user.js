import axios from 'axios'
export const GetUserList = async (activePage) => {
  return axios.get(process.env.REACT_APP_API + 'page='+ activePage +'&results=10.')
  .then((data) => data.data)
}