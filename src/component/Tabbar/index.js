import { TabBar } from 'antd-mobile';
import React from 'react';
import styles from './index.scss';

const navtgation = [
  {
    background: 'https://novel.in.xintiaotime.com/public/static/cms/img/hj_index.png',
    title: '首页',
    src: '',
  },
  {
    background: 'https://novel.in.xintiaotime.com/public/static/cms/img/hj_book.png',
    title: '书城',
    src: 'http://t2118.xintiaotime.com/index.php/cms/column/index.html',
  },
  {
    background: 'https://novel.in.xintiaotime.com/public/static/cms/img/hj_history.png',
    title: '历史记录',
  },
  {
    background: 'https://novel.in.xintiaotime.com/public/static/cms/img/hj_my.png',
    title: '个人中心',
    src: 'http://t2118.xintiaotime.com/index.php/cms/user/login.html',
  },
];
export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'my',
      fullScreen: false,

    };
  }

  render() {
    return (
      <div className={styles.tabbar}>
        {
          navtgation.map((item, index) => (
            <div key={index}>
            <a className={styles.tab} href={item.src}>
            <img src={item.background}/>
              <span>{item.title}</span>
            </a>
            </div>
          ))
        }
      </div>
    );
  }
}
