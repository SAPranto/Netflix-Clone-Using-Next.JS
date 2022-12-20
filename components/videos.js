import videoData from "../data/videos.json"

const Videos = () => {
    return videoData.items.map((item) => {
        return{
            title:"",
            imgUrl:"",
            id:"",
        }
        }
    );
}

export default Videos;