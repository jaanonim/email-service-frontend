import axios from 'axios'

const getData = async (endpoint,page = 1) => {
    var v = [];
    try {
      const response = await axios.get(
        endpoint + "?page=" + page
      );
      console.log(response);
      if (response.status == 200) {
        v = v.concat(response.data.results);
        if (response.data.next != null) {
          getData(endpoint,page + 1);
        }
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(v)
    return v;
  }

export default getData;