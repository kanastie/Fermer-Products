import React, { useState, useRef } from "react";
import styled from "styled-components";
import Title, { TitleSize } from "../../ui/title/title";

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#88aa4d" : "#F6F6F6")};
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  padding: 8px 12px;
  margin-right: 8px;
`;

const StyledTitle = styled(Title)`
  color: ${(props) => (props.active ? "#ffffff" : "#333333")};
  font-weight: 400;
`;

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {tabs &&
        tabs.length &&
        tabs.map((item, index) => {
          if (index === activeTab) {
            return (
              <StyledButton type="button" active key={item.title}>
                <StyledTitle size={TitleSize.SUPER_EXTRA_SMALL} as="h4" active>
                  {item.title}
                </StyledTitle>
              </StyledButton>
            );
          }
          return (
            <StyledButton
              type="button"
              key={item.title}
              onClick={() => setActiveTab(index)}
            >
              <Title size={TitleSize.SUPER_EXTRA_SMALL} as="h4">
                {item.title}
              </Title>
            </StyledButton>
          );
        })}
      <div>{tabs[activeTab].content}</div>
    </>
  );
}

export default Tabs;
