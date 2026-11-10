import { TabButton } from "../../components/tab-button/tab-button";
import { useState } from "react";
import { tabs, content } from "../../data/about-content";
export function AboutHousePlantSection() {
  const [currentTab, setSelectedTab] = useState(0);

  function handleSelect(selectedTab: number) {
    setSelectedTab(selectedTab);
  }
  return (
    <section id="examples">
      <h2>About House Plant</h2>
      <menu>
        {tabs.map((label, index) => (
          <TabButton
            key={index}
            isSelected={currentTab === index}
            onSelect={() => handleSelect(index)}
            children={label}
          />
        ))}
      </menu>
      <div id="tab-content">
        <ul>
          {content[currentTab].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
