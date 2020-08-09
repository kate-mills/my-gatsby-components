import React from "react"
import UpcomingClass  from "./UpcomingClass"

const UpcomingClassList = ({ upcomingClasses  }) => {
  return (
    <section>
      {upcomingClasses.map((data)  => { return <UpcomingClass key={data.id} data={data}/> })}
    </section>
  )
}
export default UpcomingClassList
