export const getCommonVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  try {
    const BASE_URL = "youtube.googleapis.com/youtube/v3";
    const response = await fetch(
      `https://${BASE_URL}/${url}&maxResults=10&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    if (data?.error) {
      console.error("Youtube API error", data.error);
      return [];
    }
    console.log({ items: data.items });
    return data?.items.map((item) => {
      console.log({ id: item.id });
      const id = item.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
      };
    });
  } catch (error) {
    console.error("Something went wrong with video library", error);
    return [];
  }
};
export const getVideos = (searchQuery) => {
  const URL = `search?part=snippet&type=video&maxResults=10&q=${searchQuery}`; // search?part=snippet&maxResults=25&q=Hollywood%20Movie%20trailer
  return getCommonVideos(URL);
};

export const getPopularVideos = () => {
  const URL =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=BD";
  return getCommonVideos(URL);
};
//youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Hollywood%20Movies%20trailer&key=[YOUR_API_KEY]
