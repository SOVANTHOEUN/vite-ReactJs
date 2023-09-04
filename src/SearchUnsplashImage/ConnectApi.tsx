import axios from "axios";

const ConnectApi = async (term: string): Promise<any[]> => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID eXcwe1m80dwkK8ZpAbcqV8n1sKh2AqyV6rynOxnaCV0",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default ConnectApi;
