import { ReactNode } from "react";
import { Route } from "react-router-dom";

interface Props {
  component: React.FC;
  layout?: React.FC<{ children: ReactNode }>;
  isLayout: boolean;
}
const AppElement: React.FC<Props> = (props) => {
  const { component: Component, layout: Layout, isLayout = false } = props;
  return isLayout && Layout ? (
    <Layout>
      <Component />
    </Layout>
  ) : <Component />;
};
export default AppElement;
