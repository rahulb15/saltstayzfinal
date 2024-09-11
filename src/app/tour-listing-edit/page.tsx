import TourListingEditMain from "@/components/tour-listing-edit/TourListingEditMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <MetaData pageTitle="Edit Tour Package">
      <Wrapper>
        <main>
          <TourListingEditMain />
        </main>
      </Wrapper>
    </MetaData>
  );
};

export default page;
