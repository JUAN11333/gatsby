import * as React from "react"

const wineImage = {
  width: "9rem",
}

export default function Wine() {
  let items = []
  let [wineTitles, setWineTitles] = React.useState([])

  React.useEffect(async () => {
    let res = await fetch("https://api.sampleapis.com/wines/reds")

    let wines = await res.json()
    for (let i = 0; i < wines.length; i++) {
      console.log(wines[i].title)
      items.push(
        <li>
          <div style={{ width: "40rem", overflow: "hidden" }}>
            <div style={{ width: "11rem", float: "left" }}>
              {" "}
              <img style={wineImage} src={wines[i].image} />{" "}
            </div>
            <div>
              <b>Winery: {wines[i].winery}</b>
            </div>
            <div>
              <b>Wines: {wines[i].wine}</b>
            </div>
            <div>
              <b>Rating:</b>
              <p> Average: {wines[i].rating.average}</p>
              <p> Reviews: {wines[i].rating.reviews}</p>
            </div>
            <div>
              <b>Location: {wines[i].location}</b>
            </div>
          </div>
        </li>
      )
    }

    setWineTitles(items)
  }, [])

  return (
    <>
      <h1>Wine</h1>
      <ul>{wineTitles}</ul>
    </>
  )
}
