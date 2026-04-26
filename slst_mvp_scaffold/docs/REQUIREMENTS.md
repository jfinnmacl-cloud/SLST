# SLST Requirements — REQUIREMENTS.md

## 1. Functional Requirements

### FR-001 Landing Page
The system shall display a public landing page explaining SLST and linking to enrollment/questionnaire start.

### FR-002 Learner Registration
The system shall allow a learner to create a profile with basic identifying information.

### FR-003 Questionnaire Delivery
The system shall present the 20-question SLST Self-Integrity Questionnaire.

### FR-004 Answer Capture
The system shall capture each answer value from 1 to 5.

### FR-005 Timing Capture
The system shall capture response timing for each question.

### FR-006 Answer Change Tracking
The system shall record when a learner changes an answer before submission.

### FR-007 Partial Completion Tracking
The system shall save incomplete questionnaire sessions and record the last completed question.

### FR-008 Reverse Scoring
The system shall reverse-score questions 11–15.

### FR-009 Total Score Calculation
The system shall calculate a total adjusted score from 20 to 100.

### FR-010 Subscale Calculation
The system shall calculate subscale scores for:
- Identity Clarity
- Stress Stability
- External Dependency
- Internal Coherence

### FR-011 Track Assignment
The system shall assign learners to:
- Observed / Core
- Observer / Intermediate
- Observing / Advanced

### FR-012 Dashboard Overview
The system shall provide an internal dashboard with cohort statistics.

### FR-013 Individual Learner Profile
The system shall provide an internal profile view for each learner.

### FR-014 Question Analytics
The system shall provide aggregate question-level analytics.

### FR-015 Class Block Assignment
The system shall assign learners into class blocks capped at 13 students.

### FR-016 Instructor Capacity
The system shall cap instructor load at 52 active learners unless additional capacity is configured.

### FR-017 Instructor Notes
The system shall allow instructors to add notes to learner profiles.

### FR-018 Export
The system shall allow admins to export questionnaire and learner data.

---

## 2. Non-Functional Requirements

### NFR-001 Privacy
The system shall clearly explain what data is collected and how it is used.

### NFR-002 Security
The system shall restrict dashboard access to instructors and admins.

### NFR-003 Performance
Questionnaire interactions should feel instant to the learner.

### NFR-004 Reliability
Questionnaire answers should autosave or persist safely if a learner exits early.

### NFR-005 Maintainability
Questions, scoring thresholds, and track descriptions should be configurable.

### NFR-006 Accessibility
The learner-facing questionnaire should be readable, keyboard navigable, and mobile-friendly.

### NFR-007 Data Integrity
Scoring calculations should be reproducible and auditable.

### NFR-008 Ethical Framing
The system shall avoid diagnostic, medical, or clinical claims unless later reviewed by qualified professionals.

---

## 3. Data Requirements

Required entities:

- Users
- Learners
- Instructors
- Questionnaire sessions
- Questionnaire answers
- Subscale scores
- Class blocks
- Instructor notes
- Course modules
- Quiz attempts
- Exam attempts

---

## 4. MVP Requirements

The MVP must support:

- Learner registration
- Questionnaire completion
- Scoring
- Track assignment
- Internal dashboard
- Class block placement
- Basic export
