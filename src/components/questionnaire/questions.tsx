import styles from "./questionnaire.module.css";

export type QuestionProps = {
  value: string | null;
  onAnswer: (value: string) => void;
};

function PillGroup({
  options,
  value,
  onAnswer,
}: {
  options: { value: string; label: string }[];
  value: string | null;
  onAnswer: (value: string) => void;
}) {
  return (
    <div className={styles.pills}>
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`${styles.pill} ${value === opt.value ? styles.pillSelected : ""}`}
          onClick={() => onAnswer(opt.value)}
          type="button"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export function QuestionOne({ value, onAnswer }: QuestionProps) {
  return (
    <div className={styles.question}>
      <p>What is your experience level in caring for plants?</p>
      <PillGroup
        value={value}
        onAnswer={onAnswer}
        options={[
          { value: "beginner", label: "Newbie" },
          { value: "intermediate", label: "Intermediate" },
          { value: "expert", label: "Confident plant parent" },
        ]}
      />
    </div>
  );
}

export function QuestionTwo({ value, onAnswer }: QuestionProps) {
  return (
    <div className={styles.question}>
      <p>How much natural light does your home get?</p>
      <PillGroup
        value={value}
        onAnswer={onAnswer}
        options={[
          { value: "low", label: "Low light (far from windows)" },
          { value: "medium", label: "Medium / indirect light" },
          { value: "bright", label: "Bright light (several hours of sun)" },
        ]}
      />
    </div>
  );
}

export function QuestionThree({ value, onAnswer }: QuestionProps) {
  return (
    <div className={styles.question}>
      <p>Do you have any furry friends in the home?</p>
      <PillGroup
        value={value}
        onAnswer={onAnswer}
        options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ]}
      />
    </div>
  );
}
