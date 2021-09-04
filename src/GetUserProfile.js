import { useEffect, useState, useRef } from "react";
import "./styles.css";

export default function GetUserProfile() {
  {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [username, setUsername] = useState("");
    const username = useRef("a");
    // useEffect(() => {
    //   if (!username) {
    //     return;
    //   }
    //   fetch(`https://api.github.com/users/${username}`)
    //     .then((res) => res.json())
    //     .then(setData)
    //     .catch((err) => console.error(err));
    // }, [username]);
    console.log("looping...");

    const fetchProfile = () => {
      if (!username.current.value) {
        return;
      }
      setLoading(true);
      fetch(`https://api.github.com/users/${username.current.value}`)
        .then((res) => {
          console.log(
            "looping from then block..."
            // res,
            // res.body,
            // JSON.stringify(res.json()),
            // JSON.stringify(res, null, 2)
          );
          return res.json();
        })
        .then((resp) => {
          console.log(JSON.stringify(resp, null, 2));
          setData(resp);
        })
        .then(() => setLoading(false))
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    };

    // if (!data) {
    return (
      <>
        <div className="title_class">
          <input
            type="text"
            ref={username}
            // value={username}
            placeholder={"Enter Username"}
            className="title_class"
            // onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => fetchProfile()} className="title_class">
            Fetch Profile
          </button>

          {data && !loading && (
            <>
              <br />
              <br />
              <img src={data.avatar_url} alt="Avatar Icon" width={200} />
              <br />
              <h3>Name: {data.name}</h3>
              <h3>Location: {data.location}</h3>
              <h3>Bio: {data.bio}</h3>
              <h3>
                Followers:{" "}
                <a href={data.html_url + "?tab=followers"} target="_blank">
                  {" "}
                  {data.followers}
                </a>
              </h3>
              <h3>
                Following:{" "}
                <a href={data.html_url + "?tab=following"} target="_blank">
                  {data.following}
                </a>
              </h3>
              <h3>Bio: {data.bio}</h3>
              <h2>
                <u>About:</u>
              </h2>
              <h3>
                <a href={data.html_url} target="_blank">
                  Github
                </a>
              </h3>
              <h3>
                <a href={data.html_url + "?tab=repositories"} target="_blank">
                  Repositories
                </a>
              </h3>
            </>
          )}
          {loading && (
            <>
              <h1>Loading, please wait ... :)</h1>
            </>
          )}
        </div>
      </>
    );
    // }
    // return <h1>Error occured during fetching data!</h1>;
  }
}

export function HeaderComponent({ title }) {
  return (
    <>
      <h1 className="title_class">{title}</h1>
    </>
  );
}
