import axios from "axios";

const API_ROOT = "https://hacker-news.firebaseio.com/v0/";

export const fetchTopStories = async () => {
  try {
    const { data } = await axios.get(API_ROOT + "topstories.json?print=pretty");
    console.log(data);
    //   return data;
  } catch (error) {
    console.error(error.message);
  }
};
