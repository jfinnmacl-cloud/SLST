# SLST Application Specification — SPEC.md

## 1. Product Name

Self Localized Systems Theory Platform

## 2. Product Type

Educational platform with diagnostic questionnaire, internal analytics dashboard, class placement system, and course delivery structure.

## 3. Primary Goal

Create a standalone internal and learner-facing platform for administering the SLST Self-Integrity Questionnaire, assigning learning tracks, managing class blocks, and supporting instructors with deep analytics.

---

## 4. Core System Areas

### 4.1 Public/Learner Landing Page
The landing page introduces SLST, explains the theory, presents the diagnostic, and routes users into enrollment or questionnaire completion.

### 4.2 Learner Account System
Learners should be able to create accounts, complete the questionnaire, view track placement, and access course modules.

### 4.3 Questionnaire Engine
The questionnaire engine administers the 20-question Self-Integrity Questionnaire and captures both answer data and behavioral timing data.

### 4.4 Scoring Engine
The scoring engine calculates:

- Raw score
- Reverse-scored values
- Total adjusted score
- Subscale scores
- Track assignment
- Internal analytics indicators

### 4.5 Internal Dashboard
The dashboard is for instructors and admins only. It displays learner results, analytics, class block capacity, cohort statistics, and instructional flags.

### 4.6 Course Module System
Learners are assigned to a learning track and given access to course modules, pop quizzes, midterm, and final exam.

### 4.7 Class Block Management
The system assigns learners into one of four daily class blocks, each capped at 13 students per instructor.

---

## 5. Core Features

### Learner Features
- View landing page
- Enroll
- Complete questionnaire
- Receive track placement
- Access assigned modules
- Complete pop quizzes
- Complete midterm
- Complete final exam

### Instructor Features
- View assigned learners
- View questionnaire analytics
- View track rosters
- View class blocks
- Add instructor notes
- Monitor course progress
- View quiz and exam performance

### Admin Features
- Manage users
- Manage instructors
- Manage course capacity
- Manage class blocks
- View all analytics
- Export data
- Configure scoring thresholds
- Manage questionnaire content

---

## 6. Questionnaire Data Captured

For each question:

- Question ID
- Raw answer
- Adjusted answer
- Time question displayed
- Time first interaction occurred
- Time answer submitted
- Response duration
- Answer change count
- Skip status
- Return-to-question status
- Idle time estimate

For each session:

- Start time
- End time
- Total duration
- Completion status
- Last completed question
- Abandonment point
- Average response time
- Median response time
- Longest hesitation
- Fastest answer
- Total score
- Track assignment

---

## 7. Scoring

### Total Score
Minimum: 20  
Maximum: 100  

### Reverse Scoring
Questions 11–15 are reverse scored.

### Track Placement
- 20–49: Observed / Core
- 50–79: Observer / Intermediate
- 80–100: Observing / Advanced

---

## 8. Internal Analytics

Initial analytics include:

- Identity Attractor Strength
- Fracture Risk Index
- External Dependency Load
- Coherence Alignment Score
- Stress Breakpoint Estimate
- Answer Pace Reliability

---

## 9. Data Privacy

The platform must clearly inform learners that the questionnaire collects answers and timing data.

The system must avoid clinical diagnosis language.

All internal analytics should be treated as educational placement and instructional support data.

---

## 10. MVP Boundary

The MVP should include:

- Static landing page
- Questionnaire
- Scoring
- Track placement
- Admin/instructor dashboard mock or functional prototype
- Class block assignment
- Data persistence
- Exportable learner/session data
