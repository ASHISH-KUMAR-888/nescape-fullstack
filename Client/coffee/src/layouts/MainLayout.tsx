import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getError, getHeader, getLoad } from "../features/header/headerSlice";
import {
  getFooterLoad,
  getFooter,
  getFooterError,
} from "../features/footer/footerSlice";
import ShimmerHeader from "../Shimmer/Header/ShimmerHeader";
import ShimmerFooter from "../Shimmer/Footer/ShimmerFooter";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "api/call",
      payload: {
        url: "/headers",
        method: "get",
        data: {},
        onStart: getLoad.type,
        onSuccess: getHeader.type,
        onError: getError.type,
      },
    });

    dispatch({
      type: "api/call",
      payload: {
        url: "/footers",
        method: "get",
        data: {},
        onStart: getFooterLoad.type,
        onSuccess: getFooter.type,
        onError: getFooterError.type,
      },
    });
  }, []);

  const loading = useSelector((state) => state.header.loading);
  const loadingFooter = useSelector((state) => state.footer.loading);

  const logo = useSelector((state) => state.header.logo.data) || [];
  const anchors = useSelector((state) => state.footer.anchors.data) || [];

  return (
    <>
      {loading ? (
        <ShimmerHeader />
      ) : (
        <Header logo={logo.length > 0 && logo[0].logo} />
      )}

      <main>
        <Outlet />
      </main>

      {loadingFooter ? (
        <ShimmerFooter />
      ) : (
        <Footer DATA={anchors} logo={logo.length > 0 && logo[0].logo} />
      )}
    </>
  );
};

export default MainLayout;
