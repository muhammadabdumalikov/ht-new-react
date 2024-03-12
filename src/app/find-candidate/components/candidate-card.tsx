import { Button, Image } from "antd";
import { EnvironmentOutlined, DollarOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { BookmarkOutlined } from "../../../../public/icons/bookmark";

export default function CandidateCard() {
  return <div className="flex items-center w-[45%] h-24 p-3 bg-white rounded-md">
    <Image className="rounded-md" src="https://picsum.photos/70" />

    <div className="h-full w-[35%] ml-3">
      <div className="h-[60%]">
        <p className="text-black text-sm font-medium">Fresh Taylor</p>
        <p className="text-black text-xs">Marketing Officer</p>
      </div>

      <div className="flex h-[40%]">
        <span className="flex items-center mr-4">
          <EnvironmentOutlined className="text-black mr-1" />
          <p className="text-black text-xs">New York</p>
        </span>
        <span className="flex items-center">
          <DollarOutlined className="text-black mr-1" />
          <p className="text-black text-xs">3 years experiences</p>
        </span>
      </div>
    </div>

    <Button type="link" icon={<BookmarkOutlined/>} />

    <div className="flex items-center justify-between w-40 h-8 bg-blue-600 p-2">
      <p>View Profile</p>
      <ArrowRightOutlined className="text-white" />
    </div>
  </div>
}