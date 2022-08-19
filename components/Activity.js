import Image from "next/image";
import Resume from "../public/resume.png";

function Activity(props) {
  return (
    <div className="flex p-3 gap-3 items-center">
      <div className="flex-1">
        <Image
          src={props.image}
          className="w-10 h-8 rounded-full "
          width={40}
          height={40}
        />
      </div>
      <div className="flex-[5]">
        <div className="flex flex-col space-x-2">
          <div>
            <p className="space-x-2">
              <span className="font-bold">{props.name}</span>
              <span>{props.action}</span>
              <span className="font-bold">{props.target}</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400">{props.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
