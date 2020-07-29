import axios from "axios";

const API_ROOT = "https://hacker-news.firebaseio.com/v0/";

export const fetchTopStoryIds = async () => {
  try {
    const { data } = await axios.get(API_ROOT + "topstories.json?print=pretty");
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const findStory = async (storyId) => {
  try {
    const { data } = await axios.get(
      API_ROOT + `item/${storyId}.json?print=pretty`
    );
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
