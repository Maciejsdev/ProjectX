import { FaRegDotCircle } from "react-icons/fa";

export default function UserCard() {
  return (
    <div className="grid grid-cols-[1fr_8rem_1fr] gap-1 border h-12 w-full items-center px-2 cursor-pointer hover:bg-primary-foreground">
      {/* Avatar */}
      <div className="flex items-center ml-1">
        <img
          src="https://orientarium.lodz.pl/assets/2022/02/kotek-rudy-591x601.jpg"
          alt="User Avatar"
          className="rounded-full object-cover w-8 h-8"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="flex flex-col justify-center">
        <p className="font-bold text-xs">KotekChad</p>
        <p className="text-sm text-slate-400">Liga legend</p>
      </div>

      {/* Icon with viewcount */}
      <div className="flex items-center justify-center gap-2">
        <div className="text-xs text-red-600">
          <FaRegDotCircle />
        </div>
        <p className="font-bold text-xs">420</p>
      </div>
    </div>
  );
}
