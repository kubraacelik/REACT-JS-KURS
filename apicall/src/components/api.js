const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID NZdd0C8q-8bg_cw4XBNdHcx0t5nr-1_gCibHqWqd96k",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
export default searchImages;
