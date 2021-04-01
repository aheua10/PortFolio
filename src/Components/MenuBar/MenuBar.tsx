import { useHistory } from "react-router-dom";
import { PageHeader, Tabs } from "antd";
import '../MenuBar/MenuBar.scss'
export const MenuBar = () => {
  const history = useHistory();
  const { TabPane } = Tabs;
  const onTabClick = (linkName: string) => {
    return history.push(`/${linkName}`);
  };
  return (
      <>
    <PageHeader
      style={{ backgroundColor: "#3e42424f" }}
      className="site-page-header-responsive"
      onBack={() => window.history.back()}
      footer={
        <Tabs className='tabs-container' onTabClick={onTabClick} defaultActiveKey="1">
          <TabPane tab="Home" key="" />
          <TabPane tab="Contact Me" key="ContactMe" />
        </Tabs>
    
      }
    />
    </>
  );
};
