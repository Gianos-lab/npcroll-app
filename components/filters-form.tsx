import { FancySelect } from "./fancy-select";

type FiltersFormProps = {
  race: string;
  sex: string;
  alignment: string;
  onRaceChange: (value: string) => void;
  onSexChange: (value: string) => void;
  onAlignmentChange: (value: string) => void;
  races: string[];
  sexes: string[];
  alignments: string[];
};

export function FiltersForm({
  race,
  sex,
  alignment,
  onRaceChange,
  onSexChange,
  onAlignmentChange,
  races,
  sexes,
  alignments,
}: FiltersFormProps) {
  return (
    <div className="form-card">
      <div className="field">
        <label>RACE</label>
        <FancySelect value={race} onChange={onRaceChange} options={races} />
      </div>

      <div className="field">
        <label>SEX</label>
        <FancySelect value={sex} onChange={onSexChange} options={sexes} />
      </div>

      <div className="field">
        <label>ALIGNMENT</label>
        <FancySelect
          value={alignment}
          onChange={onAlignmentChange}
          options={alignments}
        />
      </div>
    </div>
  );
}
