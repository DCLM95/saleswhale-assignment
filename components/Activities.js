import Activity from "./Activity";
import { useState, useEffect } from "react";

function Activities() {
  const [activitiesArray, setActivitiesArray] = useState([]);

  useEffect(() => {
    async function getActivitiesData() {
      const res = await fetch(
        "https://mocki.io/v1/6f396a3e-1470-41cf-946b-cadadfc41ab2"
      );
      const data = await res.json();
      const activitiesData = data.activities;
      setActivitiesArray(activitiesData);
    }
    getActivitiesData();
  }, []);

  for (var i = 0; i < activitiesArray.length; i++) {
    if (activitiesArray[i].action === "increased_quota") {
      activitiesArray[i].action = `increased quota's at`;
      break;
    } else if (activitiesArray[i].action === "added_leads") {
      activitiesArray[i].action = "added new leads to";
    } else if (activitiesArray[i].action === "archived_team") {
      activitiesArray[i].action = "archived the team";
    }
  }

  return (
    <div className="flex flex-col shadow-[35px_35px_60px_30px_rgba(0,0,0,0.1)] justify-between border-b-2 w-80 bg-white ">
      <div className="p-5 border-b-2">
        <p className="font-bold">Activity</p>
      </div>

      {activitiesArray.map((activity) => {
        return (
          <div key={activity.id}>
            <Activity
              name={activity.person.name}
              image={activity.person.avatar}
              action={activity.action}
              time={activity.created_at}
              target={activity.target}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Activities;
