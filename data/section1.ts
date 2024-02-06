const section = {
  id: 1,
  title: "Getting Started with TypeScript",
  lecture_count: 11,
  lecture_completed: 11,
  section_duration_in_minutes: 42,

  virtual: {
    section_percent_complete: function (): number {
      const { lecture_completed, lecture_count } = this;

      return lecture_completed / lecture_count;
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
  path_to_resources: "",
};

const section1 = [
  {
    id: 1,
    title: "Getting Started with TypeScript",
    lecture_count: 11,
    lecture_completed: 11,
    section_duration_in_minutes: 42,

    virtual: {
      section_percent_complete: function (): number {
        const { lecture_completed, lecture_count } = this;

        return lecture_completed / lecture_count;
      },
    },
    lectures: [
      {
        id: 1,
        title: "How to Get Help",
        lecture_type: LectureType.ARTICLE,
        duration_in_minutes: 1,
        path_to_transcript: "",
        has_resources: false,
        downloaded_resources: false,
        path_to_resources: "",
      },
      {
        id: 2,
        title: "Join Our Community!",
        lecture_type: LectureType.ARTICLE,
        duration_in_minutes: 1,
        path_to_transcript: "",
        has_resources: false,
        downloaded_resources: false,
        path_to_resources: "",
      },
      {
        id: 3,
        title: "Course Resources",
        lecture_type: LectureType.ARTICLE,
        duration_in_minutes: 1,
        path_to_transcript: "",
        has_resources: false,
        downloaded_resources: false,
        path_to_resources: "",
      },
      {
        id: 3,
        title: "Course Resources",
        lecture_type: LectureType.ARTICLE,
        duration_in_minutes: 1,
        path_to_transcript: "",
        has_resources: false,
        downloaded_resources: false,
        path_to_resources: "",
      },
      {
        id: 3,
        title: "Course Resources",
        lecture_type: LectureType.ARTICLE,
        duration_in_minutes: 1,
        path_to_transcript: "",
        has_resources: false,
        downloaded_resources: false,
        path_to_resources: "",
      },
      {
        id: 3,
        title: "Course Resources",
        lecture_type: LectureType.ARTICLE,
        duration_in_minutes: 1,
        path_to_transcript: "",
        has_resources: false,
        downloaded_resources: false,
        path_to_resources: "",
      },
      {
        id: 3,
        title: "Course Resources",
        lecture_type: LectureType.ARTICLE,
        duration_in_minutes: 1,
        path_to_transcript: "",
        has_resources: false,
        downloaded_resources: false,
        path_to_resources: "",
      },
      {
        id: 3,
        title: "Course Resources",
        lecture_type: LectureType.ARTICLE,
        duration_in_minutes: 1,
        path_to_transcript: "",
        has_resources: false,
        downloaded_resources: false,
        path_to_resources: "",
      },
      {
        id: 3,
        title: "Course Resources",
        lecture_type: LectureType.ARTICLE,
        duration_in_minutes: 1,
        path_to_transcript: "",
        has_resources: false,
        downloaded_resources: false,
        path_to_resources: "",
      },
      {
        id: 3,
        title: "Course Resources",
        lecture_type: LectureType.ARTICLE,
        duration_in_minutes: 1,
        path_to_transcript: "",
        has_resources: false,
        downloaded_resources: false,
        path_to_resources: "",
      },
      {
        id: 3,
        title: "Course Resources",
        lecture_type: LectureType.ARTICLE,
        duration_in_minutes: 1,
        path_to_transcript: "",
        has_resources: false,
        downloaded_resources: false,
        path_to_resources: "",
      },
    ],
  },
];
