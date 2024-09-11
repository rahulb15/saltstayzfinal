//@refresh

import IndexMain from "@/components/index/IndexMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import HomeFourMain from "@/components/home-four/HomeFourMain";


const Home = () => {
  return (
    <>
      <MetaData pageTitle="Wellcome To Tourigo">
        <Wrapper>
          <main>
            {/* <IndexMain /> */}
            <HomeFourMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default Home;
