import { CloudUploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload, Divider, Image, Button } from 'antd';
import './index.css';
import { useState } from 'react';

export default function PersonalTab() {
  const { Dragger } = Upload;
  const [fileList, setFileList] = useState([]);

  const props: UploadProps = {
    name: 'file',
    multiple: false,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    fileList: fileList,

    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        setFileList(fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
      setFileList(info.fileList)
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return <div>
    <Divider className='no-divider' orientation="left">Basic information</Divider>
    <div className='flex'>
      <div className='w-52 h-52'>
        {fileList.length > 0 ? <div className='w-52 h-52'>
          <Image className='w-30 h-30' alt='drag-image' src='https://picsum.photos/200/200' />
          <Button danger onClick={() => setFileList([])}>Default</Button>
        </div> : <Dragger showUploadList {...props}>
          <p className="ant-upload-drag-icon">
            <CloudUploadOutlined />
          </p>
          <p className="text-xs"><p className='text-sm font-medium'>Browse photo</p> or drop here</p>
          <p className="text-xs text-gray-400">
            A photo larger than 400 pixels work best. Max photo size 5 MB.
          </p>
        </Dragger>}
      </div>

      <div>

      </div>
    </div>
  </div>
}