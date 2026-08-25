"use client";

import { useState } from "react";
import styles from "./LessonFlow.module.css";

/**
 * Ilmy: three learn cards, then one question with correct and wrong states.
 *
 * Ported from ILMYIOS/components/lesson/{LearnCardContent,QuestionCard}.tsx
 * and app/(app)/lesson.tsx. The content below is copied verbatim out of
 * ILMYIOS/constants/onboardingLessons.ts. No network, no persistence, no
 * auth: every value on this screen is in this file.
 */

type Answer = { text: string; isCorrect: boolean };

const LEARN = [
  {
    eyebrow: "The Name",
    anchor: "السَّلَامُ",
    title: "As-Salam",
    transliteration: "AS-SA-LAAM",
    meaning: "The Source of Peace.",
    explanation:
      "That warm, safe feeling when you're cozy at home? Allah is the one who gives that. He doesn't just bring peace.",
    emphasis: "He IS peace.",
  },
  {
    eyebrow: "The Name",
    anchor: "الرَّزَّاقُ",
    title: "Ar-Razzaq",
    transliteration: "AR-RAZ-ZAAQ",
    meaning: "The Provider.",
    explanation:
      "Rizq isn't just money or food. Your health, your time, your knowledge, the people you love. All of it comes from Ar-Razzaq.",
    emphasis: "Every single thing you have is provision from Him.",
  },
  {
    eyebrow: "The Prophet",
    anchor: "يُونُس",
    title: "Yunus (AS)",
    transliteration: "YOO-NUS",
    meaning: "The Prophet in the Whale.",
    explanation:
      "Yunus (AS) was swallowed by a huge whale! While he was inside, in the dark, he called out to Allah. And Allah saved him.",
    emphasis: "No place is too dark for Allah to hear you.",
  },
];

const QUESTION = {
  prompt: "What did Yunus (AS) do inside the whale?",
  answers: [
    { text: "He called out to Allah", isCorrect: true },
    { text: "He fell asleep", isCorrect: false },
    { text: "He swam out", isCorrect: false },
  ] satisfies Answer[],
};

const TOTAL = LEARN.length + 1;

export function LessonFlow() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);

  const onQuestion = step >= LEARN.length;
  const answered = picked !== null;
  const correct = answered && QUESTION.answers[picked].isCorrect;

  return (
    <div className={styles.root}>
      <header className={styles.top}>
        <div className={styles.progress} aria-hidden="true">
          {Array.from({ length: TOTAL }, (_, i) => (
            <span
              key={i}
              className={styles.tick}
              data-done={i < step || (onQuestion && answered && i === step)}
            />
          ))}
        </div>
      </header>

      {onQuestion ? (
        <div className={styles.body}>
          <p className={styles.eyebrow}>Question</p>
          <h4 className={styles.prompt}>{QUESTION.prompt}</h4>

          <ul className={styles.answers}>
            {QUESTION.answers.map((a, i) => {
              const state = !answered
                ? "idle"
                : i === picked
                  ? a.isCorrect
                    ? "correct"
                    : "wrong"
                  : a.isCorrect
                    ? "reveal"
                    : "dim";
              return (
                <li key={a.text}>
                  <button
                    type="button"
                    className={styles.answer}
                    data-state={state}
                    disabled={answered}
                    onClick={() => setPicked(i)}
                  >
                    {a.text}
                  </button>
                </li>
              );
            })}
          </ul>

          {answered ? (
            <div className={styles.feedback} data-correct={correct} role="status">
              <p className={styles.feedbackText}>
                {correct ? "Correct" : "Not quite. Look at the highlighted answer."}
              </p>
              <button
                type="button"
                className={styles.cta}
                onClick={() => {
                  setStep(0);
                  setPicked(null);
                }}
              >
                Start over
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className={styles.body} key={step}>
          <p className={styles.eyebrow}>{LEARN[step].eyebrow}</p>
          <p className={styles.anchor} lang="ar" dir="rtl">
            {LEARN[step].anchor}
          </p>
          <h4 className={styles.title}>{LEARN[step].title}</h4>
          <p className={styles.translit}>{LEARN[step].transliteration}</p>
          <p className={styles.meaning}>{LEARN[step].meaning}</p>
          <p className={styles.explain}>{LEARN[step].explanation}</p>
          <p className={styles.emphasis}>{LEARN[step].emphasis}</p>

          <button type="button" className={styles.cta} onClick={() => setStep((s) => s + 1)}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
