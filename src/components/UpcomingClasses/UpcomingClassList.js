import React from "react"
import UpcomingClass  from "./UpcomingClass"

const UpcomingClassList = ({ upcomingClasses  }) => {
  console.log('upcomingClasses', upcomingClasses)
  return (
    <section className="upcoming__class__list">
      {upcomingClasses.map((data)  => { return <UpcomingClass key={data.id} data={data}/> })}
    </section>
  )
}
export default UpcomingClassList
