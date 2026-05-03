//https://www.greatfrontend.com/questions/user-interface/job-board
import { useState, useEffect } from "react";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";
const ITEM_PER_PAGE = 6;

export default function App() {
  const [userData, setUserData] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [userId, setUserId] = useState(null);
  const [fetchingDetails, setFetchingDetails] = useState(false);

  useEffect(() => {
    getData(0);
  }, []);

  async function getData(page) {
    setFetchingDetails(true);

    let itemlist = userId;

    if (itemlist === null) {
      const response = await fetch(`${BASE_URL}/jobstories.json`);
      itemlist = await response.json();
      setUserId(itemlist);
    }

    const itemIdsForPage = itemlist.slice(
      page * ITEM_PER_PAGE,
      page * ITEM_PER_PAGE + ITEM_PER_PAGE
    );

    const itemsForPage = await Promise.all(
      itemIdsForPage.map((itemId) =>
        fetch(`${BASE_URL}/item/${itemId}.json`).then((res) => res.json())
      )
    );

    setUserData((currentData) => [...currentData, ...itemsForPage]);
    setCurrPage(page);
    setFetchingDetails(false);
  }

  function dateConvert(time) {
    return new Date(time * 1000).toLocaleString();
  }

  return (
    <>
      <h2>Hacker News Jobs Board</h2>

      {userData.map((job, index) => {
        return (
          <div className="card" role="listitem" key={index}>
            <a href={job.url}>{job.title}</a>
            <br />
            <p>
              By {job.by} {dateConvert(job.time)}
            </p>
          </div>
        );
      })}

      <button
        onClick={() => getData(currPage + 1)}
        disabled={fetchingDetails}
      >
        {fetchingDetails ? "Loading..." : "Load More"}
      </button>
    </>
  );
}
