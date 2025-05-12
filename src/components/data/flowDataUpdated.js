
import { MarkerType } from '@xyflow/react';

export const initialNodes = [
  {
    id: "29",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 29A",
      courseTitle: "Discrete Mathematics",
      courseCategory: "Core",
      courseProgram: "Both",
      courseDesc: "\nCovers topics in discrete mathematics with applications within computer science. Some of the topics to be covered include graphs and matrices; principles of logic and induction; number theory; counting, summation, and recurrence relations; discrete probability. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 1,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "102",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 102A",
      courseTitle: "Software Entreprenuership",
      courseCategory: "default",
      courseProgram: "COSI",
      courseDesc: "\nCovers the fundamental concepts needed to transform an idea for a software application into a viable IT business. The focus of the course is on software-based IT enterprises and the specific challenges and opportunities they present. Learn the \"Lean Startup\" process in this course with a significant hands-on focus. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 1,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "10",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 10A",
      courseTitle: "Problem Solving in Python",
      courseDesc: "\nOpen only to students with no previous programming background. Students may not take COSI 10a if they have received a satisfactory grade in COSI 12b or COSI 21a. May not be taken for credit by students who took COSI 11a in prior years. Does not meet the requirements for the major or minor in Computer Science.\n\nIntroduces computer programming and related computer science principles. Through programming, students will develop fundamental skills such as abstract reasoning and problem solving. Students will master programming techniques using the Python programming language and will develop good program design methodology resulting in correct, robust, and maintainable programs. Usually offered every semester.",
      courseCategory: "default",
      courseProgram: "Both",
      sourceHandlePosition: "right"
    },
    position: {
      x: 0,
      y: 0
    },
    level: 1,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "12",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 12B",
      courseTitle: "Programming in Java",
      coursePre: "COSI 10A",
      courseCategory: "Core",
      courseProgram: "Both",
      courseDesc: "\nStudies advanced programming concepts and techniques utilizing the Java programming language. The course covers software engineering concepts, object-oriented design, design patterns and professional best practices. This is a required foundation course that will prepare you for more advanced courses, new programming languages, and frameworks. Usually offered every year.",
      targetHandlePosition: "left"
    },
    position: {
      x: 0,
      y: 0
    },
    level: 1,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "130",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 130A",
      courseTitle: "Theory of Computation",
      courseCategory: "Core",
      courseProgram: "COSI",
      courseDesc: "\nIntroduces topics in the theory of computation, including: finite automata and regular languages, pushdown automata and context-free languages, context-sensitive languages and Type 0 languages, Turing machines and Church's thesis, the halting problem and undecidability, and introduction to NP and PSPACE complete problems. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 2,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "21",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 21A",
      courseTitle: "Data Structures and Algorithms",
      courseCategory: "Core",
      courseProgram: "COSI",
      courseDesc: "\nFocuses on the design and analysis of algorithms and the use of data structures. Through the introduction of the most widely used data structures employed in solving commonly encountered problems. Students will learn different ways to organize data for easy access and efficient manipulation. The course also covers algorithms to solve classic problems, as well as algorithm design strategies; and computational complexity theory for studying the efficiency of the algorithms. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 2,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "103",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 103A",
      courseTitle: "Software Engineering",
      courseCategory: "default",
      courseProgram: "COSI",
      courseDesc: "\nIn this course, you will learn (and practice) the design and construction of large bodies of software using modern software engineering practices, including object oriented design, test driven development, working data, and project management. You will be challenged to solve different kinds of problems, using different approaches and different tools. The course also aims to teach the basic and expected knowledge and practice within industry for entry level developers. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 2,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "107",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 107A",
      courseTitle: "Computer Security",
      courseCategory: "default",
      courseProgram: "COSI",
      courseDesc: "\nIntroduces students to foundational concepts in computer and network security. Focuses on topics essential in many areas of contemporary software development, including security for application software, uses of cryptography, secure communications in the World-Wide Web, and issues in data privacy. Across these areas students will learn from real-world systems analyzing systems for threats and vulnerabilities, mechanisms of attack, and methods to design and implement defenses against attack. Course assignments will include techniques for both attack and defense as well as written and oral presentations about security issues, design, and implementation. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 2,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "116",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 116A",
      courseTitle: "Information Visualization",
      courseCategory: "default",
      courseProgram: "COSI",
      courseDesc: "\nIntroduces foundational principles, methods, and techniques of visualization to enable creation of effective visual representations of information. Covers the design and evaluation of novel visual encodings for diverse and heterogeneous data, including numerical, ordinal, nominal, and temporal data, network data, and multimedia data. Provides an overview of relevant principles of human vision, perception, and psychology related to the derivation of insights from visual analysis. Create visualizations in Tableau, Python, and JavaScript. Requires programming in Python, JavaScript, HTML, and CSS. Requires extensive writing including documentation, explanations, and discussions of findings from data analyses. Students will choose from datasets across diverse topics such as climate science, sustainability, urban planning, and healthcare data to develop their own visual analyses. Students will analyze data in groups and present their findings both in slide-form and in a writeup that will be publishable in an online setting. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 2,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "125",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 125A",
      courseTitle: "HCI",
      courseCategory: "default",
      courseProgram: "COSI",
      courseDesc: "\nCovers the basic theory and concepts of human-computer interaction. Topics include methodology for designing and testing user interfaces, interaction styles and techniques, design guidelines, and adaptive systems. The laboratory work is designed to give the student practice in a set of basic techniques used in the area of human-computer interaction. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 2,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "152",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 152A",
      courseTitle: "Web Application",
      courseCategory: "default",
      courseProgram: "COSI",
      courseDesc: "\nIntroduces web programming that covers the fundamental languages and tools, including HTML/CSS for page layout, javascript/ajax for client-side integration, and server-side programming in Java, Ruby, and SQL. The course also discusses security, scaling/optimization, and multi-tier architectures. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 2,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "153",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 153A",
      courseTitle: "Mobile Application in NLP",
      courseCategory: "default",
      courseProgram: "COSI",
      courseDesc: "\nIntroduces the design and analysis of mobile applications that covers the architecture of mobile devices, APIs for graphical user interfaces on mobile devices, location-aware computing, social networking. Also covers the theory and practice of space and time optimization for these relatively small and slow devices. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 2,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "104",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 104A",
      courseTitle: "Intro to ML",
      courseCategory: "ML",
      courseProgram: "COSI",
      courseDesc: "\nMachine learning is essential to gaining insights into large-scale data and making decisions in a wide spectrum of real world applications. This course will provide you a basic understanding of machine learning techniques (e.g., linear regression, logistic regression, decision trees, neural networks, clustering, state machines and Markov decision processes, etc.), how to evaluate their performance, and demonstrating how these models can be used to solve real-world problems. In addition, this course will give you hands-on experience utilizing these machine learning models. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 2,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "114",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 114A",
      courseTitle: "Fundamentals of NLP I",
      courseCategory: "CL",
      courseProgram: "CL",
      courseDesc: "\nIntroduces the computational properties of natural language and the algorithms and machine learning methods used to process it. Students will develop an understanding of natural language processing (NLP) by implementing statistical NLP algorithms and building NLP tools in Python. Topics include statistical properties of natural language, text classification, language modeling, and machine learning and programming techniques for NLP. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 2,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "135",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 135B",
      courseTitle: "Computational Semantics",
      courseCategory: "CL",
      courseProgram: "CL",
      courseDesc: "\nA study of the computational treatment of core semantic phenomena in language. After a review of first-order logic and the lambda calculus, the course focuses on three core topics: interrogative structures, including semantics of questions, question-answering systems, dialogue, entailment, commonsense knowledge; meaning update and revision; and computational lexical semantics. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 4,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "121",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 121B",
      courseTitle: "Structures and Interpration",
      courseCategory: "Core",
      courseProgram: "Both",
      courseDesc: "\nAn introduction to idioms of programming methodology, and to how programming languages work. Principles of functional programming, data structures and data abstraction; state, imperative and object-oriented programming; lazy data structures; how an interpreter works; metalinguistic abstraction and programming language design; syntax analysis, lexical addressing, continuations and explicit control; continuation-passing style, metacircular and register-machine compilers. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "150",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 150A",
      courseTitle: "Compiler Design",
      courseCategory: "default",
      courseProgram: "COSI",
      courseDesc: "\nThe goal of this course is to provide an overview of the theory and practice of Compiler Design. This course will cover the fundamental components of Compiler Design including scanning, lexical analysis, parsing, semantic analysis, static analysis, and code generation. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "180",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 180A",
      courseTitle: "Algorithms",
      courseCategory: "default",
      courseProgram: "COSI",
      courseDesc: "\nExplores a wide range of algorithms for various computational problems, focusing on their fundamental design principles. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "127",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 127B",
      courseTitle: "Database Systems",
      courseCategory: "Data Systems",
      courseProgram: "COSI",
      courseDesc: "\nIntroduces database structure, organization, and languages. Studies relational and object-oriented models, query languages, optimization, normalization, file structures and indexes, concurrency control and recovery algorithms, and distributed databases. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "128",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 128A",
      courseTitle: "Intro to Computer Networking",
      courseCategory: "Data Systems",
      courseProgram: "COSI",
      courseDesc: "\nProvides a comprehensive introduction to the principles and practices of computer networking. Students will engage with the principles of data communication, network architectures, and protocols, including state-of-the-art networking technologies. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "143",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 143B",
      courseTitle: "Data Management for Data Science",
      courseCategory: "Data Systems",
      courseProgram: "COSI",
      courseDesc: "\nThis experiential class will study techniques and systems for ingesting, processing, analyzing, and visualizing large data sets. The end goal of the class is to familiarize students with the data management tools and concepts that can support the full-stack of data science pipelines. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "131",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 131A",
      courseTitle: "Computer Systems",
      courseCategory: "Core",
      courseProgram: "COSI",
      courseDesc: "\nFundamental structures of a computer system from hardware abstractions through machine and assembly language, to the overall structure of an operating system and key resource management abstractions. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "101",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 101A",
      courseTitle: "AI",
      courseCategory: "ML",
      courseProgram: "COSI",
      courseDesc: "\nSurvey course in artificial intelligence. Introduction to Lisp and heuristic programming techniques. Topics include problem solving, planning natural language processing, knowledge representation, and computer vision. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "123",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 123A",
      courseTitle: "Statistical Machine Learning",
      courseCategory: "ML",
      courseProgram: "COSI",
      courseDesc: "\nFocuses on learning from data using statistical analysis tools and deals with the issues of designing algorithms and systems that automatically improve with experience. This course is designed to give students a thorough grounding in the methodologies, technologies, mathematics, and algorithms currently needed by research in learning with data. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "126",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 126A",
      courseTitle: "Unsupervised Learning and Data Mining",
      courseCategory: "ML",
      courseProgram: "COSI",
      courseDesc: "\nFocuses on unsupervised learning and introduces the basic concepts of cluster analysis, feature selection, outlier detection for large-scale and big data analysis. Some advanced unsupervised topics, such as ranking, auto-encoder, generative adversarial network, and self-supervised learning will be introduced as well. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "165",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 165B",
      courseTitle: "Deep Learning",
      courseCategory: "ML",
      courseProgram: "COSI",
      courseDesc: "\nDue to its powerful capability and excellent performance in solving real-world problems, deep learning has become one of the most important machine learning techniques. This course covers the core methods and algorithms of deep learning techniques. Students learn models and algorithms of deep learning, apply deep learning tools, and work on related homework and course projects. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "166",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 166B",
      courseTitle: "Capstone Software Engineering",
      courseCategory: "default",
      courseProgram: "COSI",
      courseDesc: "\nTeaches modern software engineering concepts, emphasizing rapid prototyping, unit testing, usability testing, and collaborative software development principles. Students apply these concepts by building a complex software system in small teams of programmers/developers using current platforms and technologies. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "119",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 119A",
      courseTitle: "Robotics",
      courseCategory: "default",
      courseProgram: "COSI",
      courseDesc: "\nBecome part of the team developing 'Campus Rover', our long term project. Explore the fundamental 'big questions' in robotics: How do robots know what to do? How do they see the world? How do they know where they are? How do they know where to go? How do they control their bodies? How should robots behave around people? How can we get them to work together? Learn and understand Robot Operating System (ROS) and how software for robots is built. Solve gradually more advanced robotic problems, work with real robots in our Robotics Lab. This is a hands-on course, emphasizing real world implementations. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 3,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "190",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 190A",
      courseTitle: "Programming Language Theory",
      courseCategory: "default",
      courseProgram: "COSI",
      courseDesc: "\nAn introduction to the mathematical semantics of functional programming languages. Principles of denotational semantics; lambda calculus and its programming idiom; Church-Rosser theorem and Böhm's theorem; simply typed lambda calculus and its model theory: completeness for the full type frame, Statman's 1-section theorem and completeness of beta-eta reasoning; PCF and full abstraction with parallel operations; linear logic, proofnets, context semantics and geometry of interaction, game semantics, and full abstraction. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 4,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "167",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 167A",
      courseTitle: "Advanced Data Systems",
      courseCategory: "Data Systems",
      courseProgram: "COSI",
      courseDesc: "\nExplores the principles of designing data systems tackling challenges such as optimizing the use of ever-evolving hardware (storage, computation, network), ensuring efficient collection of incoming data, querying dynamic data collections, parallelizing query processing, and more. Students will gain a comprehensive understanding of the key drivers of innovation in data systems: hardware and workloads, delving into the detailed analysis of recent and anticipated trends in both areas. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 4,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "142",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 142A",
      courseTitle: "Embedded Systems Development",
      courseCategory: "Data Systems",
      courseProgram: "COSI",
      courseDesc: "\nA project-based course that teaches the foundational aspects of embedded systems and the development process utilizing Raspberry Pi. Students will will create prototypes of embedded systems, including applications for IoT devices. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 4,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "146",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 146A",
      courseTitle: "Computer System Design",
      courseCategory: "Data Systems",
      courseProgram: "COSI",
      courseDesc: "\nTopics on the design and engineering of computer systems: techniques for controlling complexity; strong modularity using client-server design; layering; naming; networks; security and privacy; fault-tolerant systems, atomicity and recovery; performance; impact of computer systems on society. Case studies of working systems and readings from the current literature provide comparisons and contrast. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 4,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "147",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 147A",
      courseTitle: "Distributed Systems",
      courseCategory: "Data Systems",
      courseProgram: "COSI",
      courseDesc: "\nThis course covers abstractions and implementation techniques for the design of distributed systems. Topics include: distributed state sharing, coherence, storage systems, naming systems, security, fault tolerance and replication, scalability and performance. The assigned readings for the course are from current literature. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 4,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "149",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 149B",
      courseTitle: "Practical ML w Big Data",
      courseCategory: "ML",
      courseProgram: "COSI",
      courseDesc: "\nIn this experiential learning course, students will learn and practice machine learning techniques (such as regression, clustering, decision trees, support vector machines, assemble techniques, and deep-learning) to tackle real problems in industry and/or interdisciplinary research. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 4,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "159",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 159A",
      courseTitle: "Computer Vision",
      courseCategory: "ML",
      courseProgram: "COSI",
      courseDesc: "\nDesigned for undergraduate and graduate students majoring/minoring in computer science, the course covers core topics in image/video understanding, such as, object detection/recognition/tracking (with applications in face detection, gesture detection, pose detection), image segmentation (saliency detection, semantic segmentation, co-segmentation), image enhancement (super resolution, image recovery), visual relationship mining (spatial relationship, kinship), 3D reconstruction, image generation, optical flow, and video segmentation. It will also touch several advanced computer vision topics, such as, multi-view image clustering, image captioning, image generation from text, and visual question and answering. Usually offered every second year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 4,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "115",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 115B",
      courseTitle: "Fundamentals of NLP II",
      courseCategory: "CL",
      courseProgram: "CL",
      courseDesc: "\nProvides a fundamental understanding of the problems in natural language understanding by computers, and the theory and practice of current computational linguistic systems. Of interest to students of artificial intelligence, algorithms, and the computational processes of comprehension and understanding. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 4,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "132",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 132A",
      courseTitle: "Informataion Retrieval",
      courseCategory: "CL",
      courseProgram: "CL",
      courseDesc: "\nExplores the theory and practice of textual information retrieval, including text indexing; Boolean, vector space and probabilistic retrieval models; evaluation; interfaces; linguistic issues; web search; QA and text classification. Students will implement algorithms and design and build a search-based application. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 4,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "136",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 136A",
      courseTitle: "Speech Recognition",
      courseCategory: "CL",
      courseProgram: "CL",
      courseDesc: "\nExplores speech recognizer core components and their underlying algorithms, surveying real applications. Covers phonetics, HMMs, finite state grammars, statistical language models, and industry standards for implementing applications, like VXML. Students build and analyze simple applications using a variety of toolkits. Usually offered every year."
    },
    position: {
      x: 0,
      y: 0
    },
    level: 4,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "216",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 216A",
      courseTitle: "Topics in NLP",
      courseCategory: "CL",
      courseProgram: "CL"
    },
    position: {
      x: 0,
      y: 0
    },
    level: 5,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "217",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 217B",
      courseTitle: "NLP Systems",
      courseCategory: "CL",
      courseProgram: "CL"
    },
    position: {
      x: 0,
      y: 0
    },
    level: 5,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "230",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 230B",
      courseTitle: "NL Annotation for ML",
      courseCategory: "CL",
      courseProgram: "CL"
    },
    position: {
      x: 0,
      y: 0
    },
    level: 5,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "231",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 231A",
      courseTitle: "Advanced ML for NLP Systems",
      courseCategory: "CL",
      courseProgram: "CL",
      sourceHandlePosition: "right"
    },
    position: {
      x: 0,
      y: 0
    },
    level: 5,
    isVisible: true,
    isGrayscale: true
  },
  {
    id: "232",
    type: "RoundedBoxNode",
    data: {
      courseNum: "COSI 232B",
      courseTitle: "Information Extraction",
      courseCategory: "CL",
      courseProgram: "CL",
      courseDesc: "\nTeaches the basics of good oral communication and presentation, such as structuring a presentation, body language, eye contact, pace and appropriateness for the audience. It will cover, with practice, a range of speaking engagements majors might meet in academia and industry including: presentation of a research paper, software architecture proposal, business elevator pitch, research funding proposal, and so on. Students will present a project already created for a 100-level COSI elective. They will give the presentation in class, receive feedback based on the practices taught and then have a chance to give the presentation a second time. Usually offered every semester.",
      targetHandlePosition: "left"
    },
    position: {
      x: 0,
      y: 0
    },
    level: 5,
    isVisible: true,
    isGrayscale: true
  }
];

export const initialEdges = [
  {
    id: "e10-12",
    type: "StraightLineEdge",
    source: "10",
    target: "12",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e12-21",
    type: "StraightLineEdge",
    source: "12",
    target: "21",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e12-103",
    type: "StraightLineEdge",
    source: "12",
    target: "103",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e12-107",
    type: "StraightLineEdge",
    source: "12",
    target: "107",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e12-104",
    type: "StraightLineEdge",
    source: "12",
    target: "104",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e12-116",
    type: "StraightLineEdge",
    source: "12",
    target: "116",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e12-125",
    type: "StraightLineEdge",
    source: "12",
    target: "125",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e12-152",
    type: "StraightLineEdge",
    source: "12",
    target: "152",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e12-153",
    type: "StraightLineEdge",
    source: "12",
    target: "153",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e12-114",
    type: "StraightLineEdge",
    source: "12",
    target: "114",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e121-135",
    type: "StraightLineEdge",
    source: "121",
    target: "135",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e29-130",
    type: "StraightLineEdge",
    source: "29",
    target: "130",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e29-121",
    type: "StraightLineEdge",
    source: "29",
    target: "121",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e29-150",
    type: "StraightLineEdge",
    source: "29",
    target: "150",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e29-127",
    type: "StraightLineEdge",
    source: "29",
    target: "127",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e29-180",
    type: "StraightLineEdge",
    source: "29",
    target: "180",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-121",
    type: "StraightLineEdge",
    source: "21",
    target: "121",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-150",
    type: "StraightLineEdge",
    source: "21",
    target: "150",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-127",
    type: "StraightLineEdge",
    source: "21",
    target: "127",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-180",
    type: "StraightLineEdge",
    source: "21",
    target: "180",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-128",
    type: "StraightLineEdge",
    source: "21",
    target: "128",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-131",
    type: "StraightLineEdge",
    source: "21",
    target: "131",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-143",
    type: "StraightLineEdge",
    source: "21",
    target: "143",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-123",
    type: "StraightLineEdge",
    source: "21",
    target: "123",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-165",
    type: "StraightLineEdge",
    source: "21",
    target: "165",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-126",
    type: "StraightLineEdge",
    source: "21",
    target: "126",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-101",
    type: "StraightLineEdge",
    source: "21",
    target: "101",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-166",
    type: "StraightLineEdge",
    source: "21",
    target: "166",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-105",
    type: "StraightLineEdge",
    source: "21",
    target: "105",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-119",
    type: "StraightLineEdge",
    source: "21",
    target: "119",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e21-120",
    type: "StraightLineEdge",
    source: "21",
    target: "120",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e104-123",
    type: "StraightLineEdge",
    source: "104",
    target: "123",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e104-165",
    type: "StraightLineEdge",
    source: "104",
    target: "165",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e104-126",
    type: "StraightLineEdge",
    source: "104",
    target: "126",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e114-115",
    type: "StraightLineEdge",
    source: "114",
    target: "115",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e114-132",
    type: "StraightLineEdge",
    source: "114",
    target: "132",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e114-136",
    type: "StraightLineEdge",
    source: "114",
    target: "136",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e121-190",
    type: "StraightLineEdge",
    source: "121",
    target: "190",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e127-167",
    type: "StraightLineEdge",
    source: "127",
    target: "167",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e131-142",
    type: "StraightLineEdge",
    source: "131",
    target: "142",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e131-146",
    type: "StraightLineEdge",
    source: "131",
    target: "146",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e131-147",
    type: "StraightLineEdge",
    source: "131",
    target: "147",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e165-159",
    type: "StraightLineEdge",
    source: "165",
    target: "159",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e165-149",
    type: "StraightLineEdge",
    source: "165",
    target: "149",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e115-230",
    type: "StraightLineEdge",
    source: "115",
    target: "230",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e115-231",
    type: "StraightLineEdge",
    source: "115",
    target: "231",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e115-216",
    type: "StraightLineEdge",
    source: "115",
    target: "216",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e115-217",
    type: "StraightLineEdge",
    source: "115",
    target: "217",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  },
  {
    id: "e231-232",
    type: "StraightLineEdge",
    source: "231",
    target: "232",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#333"
    },
    style: {
      stroke: "#333"
    },
    isVisible: true,
    isGrayscale: true,
    fraction: 0.5
  }
];
