import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {
  Content,
  LayoutContainer,
} from "./styles";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Content>
        <Header />
        <Outlet />
      </Content>
    </LayoutContainer>
  );
};
