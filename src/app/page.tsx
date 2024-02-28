'use client'
import { Avatar, Button, Card, Input, Image, Divider } from 'antd';
import { MouseEventHandler, useState } from "react";

import axios from 'axios';

export default function Home() {
  const [urlLoading, setUrlLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    img: '',
    location: '',
    company: ''
  });

  const { Meta } = Card;

  const onUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onUrlInputSubmit = async () => {
    setUrlLoading(!urlLoading);
    axios.get('http://localhost:3000/profile', { params: { url } }).then(data => {
      console.log(data);
      setUserInfo(prev => {
        return {
          ...prev,
          location: data?.data.location.default,
          img: data?.data.profile_picture,
          company: data?.data.sub_title,
          name: data?.data.first_name + data?.data.last_name
        }
      })
      setUrlLoading(false);
    })
    // setTimeout(() => setUrlLoading(false), 1000)
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          // priority
        />
      </div> */}

      <div className="flex w-[50%]">
        <Input placeholder="LinkedIn url" onChange={onUrlInputChange} />
        <Button type="primary" disabled={false} loading={urlLoading} onClick={onUrlInputSubmit}>Submit</Button>
      </div>

      <Divider />

      <div>
        {userInfo.name.length > 0
          ?
          <Card
            hoverable
            style={{ width: 240, height: 400 }}
            cover={<Image className='w-full h-full' alt="example" src={userInfo.img} />}
          >
            <Meta title={userInfo.name} description={userInfo.company} />
          </Card>
          : null
        }
      </div>
    </main>
  );
}
