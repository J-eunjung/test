import AppRoutes from "./AppRoutes";
import stylde from "styled-components";

const PageContainer = stylde.div`
    min-width: 700px;
    min-height: 700px;
    height: 90vh;
    background-color: #FcaacF;
    width: 100%;
    padding: 20px
`;

function PageContent() {
  return (
    <PageContainer>
      <AppRoutes />
    </PageContainer>
  );
}

export default PageContent;
