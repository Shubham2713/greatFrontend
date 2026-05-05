//https://www.greatfrontend.com/questions/user-interface/job-board
import { useState, useEffect } from 'react';

const val=[{
  "by": "jamilbk",
  "id": 35908337,
  "score": 1,
  "time": 1683838872,
  "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
  "type": "job",
  "url": "https://www.ycombinator.com/companies/firezone/jobs"
},
{
  "by": "jamilbk",
  "id": 35908337,
  "score": 1,
  "time": 1683838872,
  "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
  "type": "job",
  "url": "https://www.ycombinator.com/companies/firezone/jobs"
}
]

const Base= 'https://hacker-news.firebaseio.com/v0/'
const Increment= 6

function timeFormat(data)
{
  
  return new Date(data*1000).toLocaleString();

}

export default function App() {
  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [fetchingDetails, setFetchingDetails] = useState(false)

useEffect(() => {
    getData(0);
  }, []);
  async function getData(currentPage) {

    let itemList= userId

    if(itemList===null)
    {
    let data= await fetch(`${Base}/jobstories.json`)
    let resp= await data.json();
    setUserId(resp);
    itemList=resp

    }

    let listToFetch= itemList.slice(Increment*currentPage, Increment*currentPage+Increment)

    const itemsPage = await Promise.all(listToFetch.map(async list=> { let data= await fetch(`${Base}/item/${list}.json`)
      let resp= await data.json()
      return resp
    })) 

    setUserData(currentUserData=> [...currentUserData, ...itemsPage])

    setCurrentPage(currentPage)
    //console.log(resp)
  }



  return (
    <>
    <h1 className="title-head">Hacker News Jobs Board</h1>
    <div>
    {userData.map(value=> <div key={value.id}><h3>{value.title}</h3>
  
    <p>{`By ${value.by}  ${timeFormat(value.time)}`}</p>
    </div>)}
    <button onClick={()=> getData(currentPage+1)}>Load More</button>
    </div>
    </>
  );
}







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
