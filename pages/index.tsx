import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { Button, notification } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';


const Home: NextPage = () => {
  const [size, setSize] = useState<SizeType>('large');
  type NotificationType = 'success' | 'info' | 'warning' | 'error';

  const openNotificationWithIcon = (type: NotificationType) => {
    notification[type]({
      message: 'Notification',
      description:
        'Button is Clicked.',
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img className={styles.image} src='/logo2.png' />
        <h3 className={styles.title}>Pinapple Store</h3>
        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <img className={styles.splash} src="/splash.png" />
        <Button onClick={() => openNotificationWithIcon('success')} className={styles.btn} type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
        <p className={styles.footer}>Footer</p>
      </div>
    </div>
  )
}

export default Home
