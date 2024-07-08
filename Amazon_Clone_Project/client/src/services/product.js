// import axios from 'axios'
// import { createError, createUrl } from './utils'

// export async function getAllProducts() {
//   try {
//     const url = createUrl('product/')
//     const headers = {
//       headers: {
//         token: sessionStorage['token'],
//       },
//     }
//     const response = await axios.get(url, headers)
//     return response.data
//   } catch (ex) {
//     return createError(ex)
//   }
// }