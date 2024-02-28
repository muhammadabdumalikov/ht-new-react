'use client'
import { Avatar, Button, Card, Input, Image, Divider, message } from 'antd';
import { useState } from "react";

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

  const [messageApi, contextHolder] = message.useMessage();

  // useEffect(() => {
  //   if (userInfo.name.length > 0) {
  //     // Trigger notice only if userInfo.name is available
  //     messageApi.success({
  //       content: 'User information loaded successfully',
  //     });
  //   }
  // }, [userInfo.name, contextHolder, messageApi]);

  const error = (err: any) => {
    messageApi.open({
      type: 'error',
      content: err?.response?.data?.message,
    });
  };


  const onUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onUrlInputSubmit = async () => {
    setUrlLoading(!urlLoading);
    axios.get('http://194.163.142.231:3001/profile', { params: { url } }).then(data => {
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
    }).catch(err => {
      error(err);
    }).finally(() => {
      setUrlLoading(false);
    })
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
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
        {contextHolder}
      </div>
    </main>
  );
}
