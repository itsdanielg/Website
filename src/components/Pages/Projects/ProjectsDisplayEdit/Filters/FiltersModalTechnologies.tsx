import { Dispatch, SetStateAction } from "react";
import { Technology } from "../../../../../types";
import { Toggle } from "../../../../Atoms/Toggle";
import { ProfileTitle } from "../../../../Compounds/ProfileTitle";

interface FiltersModalTechnologiesProps {
  title: string;
  technologies: Technology[];
  selectedFilters: string[];
  setSelectedFilters: Dispatch<SetStateAction<string[]>>;
}

export function FiltersModalTechnologies({
  title,
  technologies,
  selectedFilters,
  setSelectedFilters
}: FiltersModalTechnologiesProps) {
  const addFilter = (filter: string) => {
    setSelectedFilters((prevFilters) => [...prevFilters, filter]);
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters((prevFilters) => prevFilters.filter((oldFilter) => oldFilter !== filter));
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <ProfileTitle label={title} />
      <div className="flex flex-wrap gap-2">
        {technologies
          .filter((technology) => technology.isFilter)
          .map(({ label, svg }, index) => {
            const isToggle = selectedFilters.includes(label);
            return (
              <Toggle
                key={label + index}
                className="p-2"
                isToggle={isToggle}
                onClick={() => {
                  if (!isToggle) addFilter(label);
                  else removeFilter(label);
                }}
                svg={svg}
                svgWidth="w-8"
                label={label}
              />
            );
          })}
      </div>
    </div>
  );
}
