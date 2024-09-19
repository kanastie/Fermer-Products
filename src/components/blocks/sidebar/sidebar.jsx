import React from "react";
import Filter from "../../blocks/filter/filter";
import Order from "../../blocks/make-order/order";
import styled from "styled-components";

const Panel = styled.div`
  width: 353px;
`;

function Sidebar() {
  return (
    <Panel>
      <Filter />
      <Order />
    </Panel>
  );
}

export default Sidebar;
