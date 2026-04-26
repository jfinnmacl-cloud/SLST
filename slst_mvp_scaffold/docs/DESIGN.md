# SLST Design Document — DESIGN.md

## 1. System Architecture

The SLST platform should be designed as a modular web application.

Recommended MVP architecture:

- Frontend: React or Next.js
- Backend: Node/Express, FastAPI, or Next.js API routes
- Database: PostgreSQL or SQLite for local MVP
- Charts: Recharts, Chart.js, or similar
- Auth: Simple role-based authentication

---

## 2. Core Pages

### Public Pages
- Landing page
- About SLST
- Enrollment page
- Questionnaire start page

### Learner Pages
- Learner dashboard
- Questionnaire
- Results page
- Module list
- Quiz page
- Exam page

### Instructor/Admin Pages
- Admin dashboard
- Cohort overview
- Learner profile
- Question analytics
- Track rosters
- Class block management
- Export page

---

## 3. Data Model

### users
- id
- name
- email
- role
- created_at
- updated_at

### learners
- id
- user_id
- assigned_track
- assigned_block_id
- status
- created_at
- updated_at

### instructors
- id
- user_id
- max_capacity
- active_status

### questionnaire_sessions
- id
- learner_id
- started_at
- ended_at
- total_duration_seconds
- completion_status
- last_completed_question
- total_score
- assigned_track
- retake_number

### questionnaire_answers
- id
- session_id
- question_id
- raw_answer
- adjusted_answer
- time_opened
- time_first_interaction
- time_submitted
- response_time_seconds
- change_count
- skipped
- returned_to_question

### subscale_scores
- id
- session_id
- identity_clarity_score
- stress_stability_score
- external_dependency_score
- internal_coherence_score
- identity_attractor_strength
- fracture_risk_index
- external_dependency_load
- coherence_alignment_score
- answer_pace_reliability

### class_blocks
- id
- instructor_id
- block_name
- block_time
- capacity
- current_enrollment

### instructor_notes
- id
- learner_id
- instructor_id
- note_text
- created_at

---

## 4. Questionnaire Flow

1. Learner starts questionnaire.
2. System creates questionnaire session.
3. Each question renders individually or in controlled sequence.
4. Timer starts when question appears.
5. First interaction timestamp is captured.
6. Answer changes are tracked.
7. Answer submission timestamp is captured.
8. Session updates after each answer.
9. If learner exits, partial completion is saved.
10. On completion, scoring engine runs.
11. Track assignment occurs.
12. Learner is assigned to class block.
13. Instructor dashboard updates.

---

## 5. Scoring Engine Design

### Reverse Scoring
For questions 11–15:

adjusted = 6 - raw

For all others:

adjusted = raw

### Total Score
Sum all adjusted answers.

### Track Assignment
if total_score <= 49:
    Observed / Core
elif total_score <= 79:
    Observer / Intermediate
else:
    Observing / Advanced

### Subscale Scores
Each subscale contains 5 questions.

### Analytics
Derived analytics are calculated after session completion and stored for dashboard use.

---

## 6. Dashboard Design

### Cohort Overview Cards
- Total enrolled
- Completed questionnaires
- Incomplete questionnaires
- Average score
- Track distribution
- Abandonment rate
- Capacity used

### Charts
- Score distribution
- Track distribution
- Question answer distribution
- Response time per question
- Subscale radar chart
- Completion funnel

### Learner Profile
Sections:
- Summary
- Track
- Subscales
- Answer timeline
- Timing timeline
- Flags
- Instructor notes

---

## 7. Class Assignment Design

Learners should be assigned after questionnaire scoring.

Simple MVP rule:

1. Find available instructor.
2. Find class block with available seats.
3. Assign learner.
4. Increment class block enrollment.

Optional later rule:
Balance by track, availability, or instructor specialty.

---

## 8. Internal Flag Logic

Possible flags:

- High external dependency
- Low internal coherence
- Low stress stability
- Fast completion pattern
- High hesitation pattern
- Incomplete questionnaire
- High answer volatility

These flags should support instruction, not diagnose the learner.

---

## 9. Security Design

Roles:

- Learner
- Instructor
- Admin

Access rules:

- Learners can view only their own learner-facing data.
- Instructors can view assigned learners.
- Admins can view all system data.

---

## 10. MVP Build Recommendation

Start with:

- Static content
- Questionnaire form
- Local database
- Scoring function
- Simple dashboard
- CSV export
- Manual login or seeded admin access

Then expand into full authentication and production deployment.
