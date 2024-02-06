# Course Sections

## TypeScript: The Complete Developer's Guide

## Section 1: Getting Started with TypeScript

```ts
const section = {
  id: 1,
  title: "Getting Started with TypeScript",
  lecture_count: 11,
  lecture_completed: 11,
  section_duration_in_minutes: 42

  virtual: {
    section_percent_complete: function (): number {
      lecture_completed / lecture_count;
    },
  },
};


enum LectureType {
    VIDEO = "video",
    ARTICLE = "article",

}

const lecture = {
    id: 1,
    title: "How to Get Help",
    lecture_type: "video",
    duration_in_minutes: 1,
    path_to_transcript: "",
    has_resources: false,
    downloaded_resources: false,
    path_to_resources: ""


}


class Quiz {
    constructor() {}

    isComplete(): boolean {}

    getTitle(): string {
        return this.title
    }

    setTitle(title: string): void {
        this.title = title;
    }
}

```

## Section 2: What is a Type System?

## Section 3: Type Annotations in Action

## Section 4: Annotations With Functions and Objects

## Section 5: Mastering Typed Arrays

## Section 6: Tuples in TypeScript

## Section 7: The All-Important Interface

## Section 8: Building Functionality with Classes

## Section 9: Design Patterns with TypeScript

## Section 10: More on Design Patterns

## Section 11: Reusable Code

## Section 12: Advanced Generics

## Section 13: Let's Build a Web Framework

## Section 14: Express + TypeScript Integration

## Section 15: Decorators

## Section 16: Advanced Express and TS Integration

## Section 17: React and Redux Class Components with TypeScript

## Section 18: React Functional Components with TypeScript

## Section 19: Redux with Functional Components and TypeScript

## Section 20: Extras

Covers Lectures:

- FROM: 78. App Overview
- TO: 101. Interfaces vs Abstract Classes
