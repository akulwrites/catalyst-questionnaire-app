-- Insert Sections
INSERT INTO "Sections" (name, "createdAt", "updatedAt") VALUES 
('Cognitive Ability', NOW(), NOW()),
('Emotional Intelligence', NOW(), NOW()),
('Personality Traits', NOW(), NOW()),
('Behavioral Assessment', NOW(), NOW()),
('Aptitude Tests', NOW(), NOW()),
('Learning Styles', NOW(), NOW());

-- Insert Subsections (ensure sectionId mapping is correct based on insert order)
-- Assuming Section IDs are auto-incremented starting from 1

-- Cognitive Ability (sectionId = 1)
INSERT INTO "Subsections" (name, "sectionId", "createdAt", "updatedAt") VALUES
('Attention & Concentration', 1, NOW(), NOW()),
('Working Memory', 1, NOW(), NOW()),
('Processing Speed', 1, NOW(), NOW()),
('Verbal Reasoning', 1, NOW(), NOW()),
('Non-verbal Reasoning', 1, NOW(), NOW());

-- Emotional Intelligence (sectionId = 2)
INSERT INTO "Subsections" (name, "sectionId", "createdAt", "updatedAt") VALUES
('Self-Awareness', 2, NOW(), NOW()),
('Self-Regulation', 2, NOW(), NOW()),
('Empathy', 2, NOW(), NOW()),
('Motivation', 2, NOW(), NOW()),
('Social Skills', 2, NOW(), NOW());

-- Personality Traits (sectionId = 3)
INSERT INTO "Subsections" (name, "sectionId", "createdAt", "updatedAt") VALUES
('Openness to Experience', 3, NOW(), NOW()),
('Conscientiousness', 3, NOW(), NOW()),
('Extraversion', 3, NOW(), NOW()),
('Agreeableness', 3, NOW(), NOW()),
('Neuroticism', 3, NOW(), NOW());

-- Behavioral Assessment (sectionId = 4)
INSERT INTO "Subsections" (name, "sectionId", "createdAt", "updatedAt") VALUES
('Risk-taking', 4, NOW(), NOW()),
('Impulsivity', 4, NOW(), NOW()),
('Decision Making', 4, NOW(), NOW()),
('Stress Response', 4, NOW(), NOW());

-- Aptitude Tests (sectionId = 5)
INSERT INTO "Subsections" (name, "sectionId", "createdAt", "updatedAt") VALUES
('Numerical Aptitude', 5, NOW(), NOW()),
('Verbal Aptitude', 5, NOW(), NOW()),
('Abstract Reasoning', 5, NOW(), NOW()),
('Mechanical Reasoning', 5, NOW(), NOW()),
('Spatial Awareness', 5, NOW(), NOW());

-- Learning Styles (sectionId = 6)
INSERT INTO "Subsections" (name, "sectionId", "createdAt", "updatedAt") VALUES
('Visual Learner', 6, NOW(), NOW()),
('Auditory Learner', 6, NOW(), NOW()),
('Kinesthetic Learner', 6, NOW(), NOW());