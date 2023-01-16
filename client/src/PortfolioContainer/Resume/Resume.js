import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 75 },
    { skill: "CSS", ratingPercentage: 70 },
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "Bootstrap", ratingPercentage: 60 },
    { skill: "React JS", ratingPercentage: 60 },
    { skill: "React Native", ratingPercentage: 45 },
    { skill: "Python", ratingPercentage: 50 },
    { skill: "Express", ratingPercentage: 40 },
    { skill: "Node JS", ratingPercentage: 45 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "Oct 2022", toDate: "Dec 2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap, Express, Node JS",
    },
    {
      title: "Github ",
      duration: { fromDate: "May 2022", toDate: "Present" },
      description:
        "Code hosting platform for version control and collaboration. (https://github.com/Xanohm710)",
      subHeading:
        "Technologies Used:  Bootstrap, React, React Native, Mongo DB, Express Js, Node Js, Redux.",
    },
    {
      title: "CodePen ",
      duration: { fromDate: "May 2022", toDate: "Present" },
      description:
        "Online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. (https://codepen.io/Xanohm)",
      subHeading:
        "Technologies Used: HTML, CSS, JavaScript.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Nucamp"}
        subHeading={"Full Stack Web and Mobile App Developer"}
        fromDate={"May 2022"}
        toDate={"Sept 2022"}
      />

      <ResumeHeading
        heading={"Freecodecamp, SoloLearn, Udemy"}
        subHeading={"Self Paced Courses in a Variety of Languages"}
        fromDate={"2020"}
        toDate={"Present"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"High School Diploma"}
        fromDate={"2008"}
        toDate={"2011"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"International Brother Hood of Electrical Workers"}
          subHeading={"Journeyman Transmission Lineman"}
          fromDate={"2011"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Build, maintain, and repair overhead transmission, distribution, and underground distribution lines using approved standards</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Work on wood, steel poles, and towers up to 400 feet.
          </span>
          <br />
          <span className="resume-description-text">
            - Maintain knowledge of and implement safety procedures at all times.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Conduct work outdoors in various types of weather safely for my coworkers and me.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Learning"
        description="The older I get, the more I realize how priceless knowledge is in your day-to-day life, whether it be knowledge for making money or life tricks to make everyday routines easier for myself and those around me."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with. Skimming through Youtube Musics songs charts is, at times, the best stress reliever on which I can get my hands."
      />
      <ResumeHeading
        heading="Personal Fitness"
        description="Daily exercise, Yoga, and walks in nature go hand in hand with music and are the ultimate combination to help clear my mind and relax."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
