import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {
  Content,
  LayoutContainer,
  OutletContainer,
} from "./styles";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Content>
        <Header />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Content>
    </LayoutContainer>
  );
};
