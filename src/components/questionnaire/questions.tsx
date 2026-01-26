export type QuestionProps = {
  value: string | null;
  onAnswer: (value: string) => void;
};

export function QuestionOne({ value, onAnswer }: QuestionProps) {
  return (
    <div>
      <p>What is your experience level in caring for plants?</p>
      <select value={value ?? ""} onChange={(e) => onAnswer(e.target.value)}>
        <option value="" disabled>
          Please select one
        </option>
        <option value="beginner">Newbie</option>
        <option value="intermediate">Intermediate</option>
        <option value="expert">Confident plant parent</option>
      </select>
    </div>
  );
}

export function QuestionTwo({ value, onAnswer }: QuestionProps) {
  return (
    <div>
      <p>How much natural light does your home get?</p>
      <select value={value ?? ""} onChange={(e) => onAnswer(e.target.value)}>
        <option value="" disabled>
          Please select one
        </option>
        <option value="low">Low light (far from windows)</option>
        <option value="medium">Medium / indirect light</option>
        <option value="bright">
          Bright light (direct sunlight for several hours)
        </option>
      </select>
    </div>
  );
}

export function QuestionThree({ value, onAnswer }: QuestionProps) {
  return (
    <div>
      <p>Do you have any furry friends in the home?</p>
      <select value={value ?? ""} onChange={(e) => onAnswer(e.target.value)}>
        <option value="" disabled>
          Please select one
        </option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
  );
}
