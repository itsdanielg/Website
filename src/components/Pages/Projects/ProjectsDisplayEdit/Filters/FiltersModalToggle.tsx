import { Toggle } from "../../../../Atoms";

interface FiltersModalToggle {
  isToggle: boolean;
  svg: string;
  label: string;
  addFilter: (label: string) => void;
  removeFilter: (label: string) => void;
}

export function FiltersModalToggle({ isToggle, svg, label, addFilter, removeFilter }: FiltersModalToggle) {
  return (
    <Toggle
      className="p-2"
      isToggle={isToggle}
      svg={svg}
      svgWidth="w-8"
      label={label}
      onClick={() => {
        if (!isToggle) addFilter(label);
        else removeFilter(label);
      }}
    />
  );
}
