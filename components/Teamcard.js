import ConversationIcon from "./icons/ConversationIcon";
import LeadSmallIcon from "./icons/LeadSmallIcon";
import ActiveStarIcon from "./icons/ActiveStarIcon";
import StarIcon from "./icons/StarIcon";

function Teamcard(props) {
  return (
    <div className="flex flex-col bg-white border-gray-300 border-2 rounded-lg p-3 justify-between">
      <div className="flex flex-col p-3 ">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div>
              <img
                src={props.image}
                className="rounded-lg w-12 h-12 object-fill"
              />
            </div>
            <div>
              <p className="font-bold">{props.name}</p>
              {props.date ? (
                <p className="text-sm text-gray-400">Created at {props.date}</p>
              ) : (
                <p className="text-sm text-gray-400">Currently Unavailable</p>
              )}
            </div>
          </div>
          <div>{props.favourite ? <ActiveStarIcon /> : <StarIcon />}</div>
        </div>
        <div className="border-b-2 py-3">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="pl-3">
        <div className="flex flex-col xl:flex-row gap-5 text-gray-400">
          <div className="flex items-center gap-2">
            <ConversationIcon />
            <p>{props.campaign} Campaigns</p>
          </div>
          <div className="flex items-center gap-2">
            <LeadSmallIcon />
            <p>{props.leads} Leads </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teamcard;
