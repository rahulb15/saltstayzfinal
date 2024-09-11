import DashboardMain from "@/components/dashboard/DashboardMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <MetaData pageTitle="Dashboard">
        <Wrapper>
          <main>
            <DashboardMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default DashboardPage;
