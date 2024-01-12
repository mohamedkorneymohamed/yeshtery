
import axios from "axios";


  // -----------------------------------NOT REQUIRED IN TAST

const headers = { token: localStorage.getItem("userToken") };
  // -----------------------------------NOT REQUIRED IN TAST


export const sendLoginData = async (values) => {
  try {
    const response = await axios.post(
      "https://route-ecommerce.onrender.com/api/v1/auth/signin",
      values
    )
      if (response.data.message === "success") {
      localStorage.setItem("userToken", response.data.token);
    }
    return response; // Return the data to the caller
  } catch (error) {
    console.error(error);
  }
}

  // -----------------------------------NOT REQUIRED IN TAST

export const getProductDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://route-ecommerce.onrender.com/api/v1/products/${id}`
      );
    return response.data; // Return the data to the caller
  } catch (error) {
    console.error(error);
  }
  
};

// -----------------------------------NOT REQUIRED IN TAST

export const getAllProducts = async () => {
  try {
    const response = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    return response; 
  } catch (error) {
    console.error(error);
  }
};
  // THIS FUNCTION IN TASK

export const addToCart = async (productId) => {
  try {
    const response = await axios.post(
      `https://route-ecommerce.onrender.com/api/v1/cart`,
      {
        productId: productId,
      },
      {
        headers: headers,
      }
      );

    return response; 
  } catch (error) {
    console.error(error);
  }
};
  // THIS FUNCTION IN TASK

export const getLoggedUserCart = async () => {
  try {
    const response = await axios.get(
      `https://route-ecommerce.onrender.com/api/v1/cart`,
      {
        headers: headers,
      }
      )

    return response;
  } catch (error) {
    console.error(error);
  }
};
  // THIS FUNCTION IN TASK

export const updateProductCount = async (productId, count) => {
  try {
    const response = await axios.put(
      `https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
      {
        count: count,
      },
      {
        headers: headers,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const deleteCartDetails = async (productId) => {
  try {
    const response = await axios.delete(
      `https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
      {
        headers: headers,
      }
    )
    return response;
  } catch (error) {
    console.error(error);
  }
};

// async function updateProductQuantity(productId, count) {
//   let response = await updateProductCount(productId, count);
//   setCartDetails(response.data.data);
//   toast.success("product count updated");
//   setCartNumber(response.data.numOfCartItems);
// }
  // function updateProductCount(productId, count) {
  //   return axios
  //     .put(
  //       `https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
  //       {
  //         count: count,
  //       },
  //       {
  //         headers: headers,
  //       }
  //     )
  //     .then((response) => response)
  //     .catch((error) => error);
  // }