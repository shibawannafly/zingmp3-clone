import React, {useState} from "react";
import CustomLink from "../../atoms/CustomLink";
import { ArrowRightOutlined, PlayCircleOutlined  } from "@ant-design/icons";
import styles from './Tab.module.css'
import TabList from '../../organisms/TabList'
import TabButton from '../../atoms/TabButton'

interface contentItem {
  tabTitle: string,
  values: any
}

type Props = {
  title: string,
  content: contentItem[],
  type?: string,
  h?: number
}

const Tab:React.FC<Props> = ({ title, content, type, h }: Props) => {
  const [tab, setTab] = useState(0)

  return (
    <section className={styles.tab}>
      {/* title */}
      <h2 className={styles.title}>
        <CustomLink size={18} color="#800080" url="/">
          {title} <ArrowRightOutlined color='#333' />
        </CustomLink>
        <CustomLink size={18} url="/">
          <PlayCircleOutlined  style={{color: '#808080', fontSize: 24}}/>
        </CustomLink>
      </h2>

      {/* tab */}
      <ul className={styles.btnList}>
        {
          content.map(list => (
              <li
                key={list.tabTitle}
                onClick = {() => setTab(content.indexOf(list))}
                style={{ listStyle: 'none' }}
              >
                <TabButton 
                  content={list.tabTitle}
                  isActive = {content.indexOf(list) === tab}
                  
                />
              </li>
          ))
        }
      </ul>

      
        {
          <TabList itemList={content[tab]} type={type} h={h}/>
        }
      
    </section>
  );
};

export default Tab;
