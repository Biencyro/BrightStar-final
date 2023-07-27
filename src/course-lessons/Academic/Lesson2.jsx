import React from 'react'
import '../lessons.css'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Scrollbar from '../../components/Scrollbar'
import Footer from '../../components/Footer'
import HamburgerMenu from '../../components/HamburgerMenu'
import Vidd2 from './../../components/embedded-videos/Vidd2'

const Lesson2 = () => {
  return (
    
    <body>

    <HamburgerMenu/>

      <Header/>
      <Scrollbar/>

      <div className='video-emb maxWidth-100% margin-auto padding-20px position-relative'>
    <div class="display-image">
            <Vidd2/>
    </div>
    </div>

   

    <section class="content">
    <h1>Lesson Two (2): The Academic Paper (Overview Part I) </h1>

    <p>This section introduces you to the different types of academic paper that you will be handling.
    

    <h2><b>Types of academic papers</b></h2>
    <h3>1. Esays</h3>
    
      <li>Essays are short papers, approximately 1-4 pages that focus on a single subject matter.</li>
      <li>An essay that exceeds four pages must be broken down into headings and subheadings to improve its readability.</li>
       <br />
    
    <h4>Types of essays</h4>
    
    <ul>
      <li>Descriptive essays</li>
      <li>Analytical essays</li>
      <li>Book/ Movie reviews</li>
      <li>Argumentative/persuasive essays</li>
      <li>Evaluation Essays</li>
      <li>Cause and effect essays</li>
    </ul>
    


    <h3>2. Literature Reviews</h3>
   
    
        <li>A literature review is a critical and systematic analysis of scholarly articles, books, and other sources relevant to a particular research topic or question.</li>
        <li> It involves examining and evaluating existing literature to understand the current state of knowledge, identify gaps, and provide a foundation for new research.</li>
      
      For example: <i>"What is the impact of social media on adolescent mental health?"</i> <br />
      <li>The literature review would involve searching for relevant studies, analyzing and synthesizing the findings, identifying any gaps or inconsistencies in the literature, and drawing conclusions based on the available evidence.</li>
      
    
    <h3>3. Annotated Bibliography</h3>

    
      <li>An annotated bibliography is a list of citations to books, articles, and other sources, each accompanied by a brief descriptive and evaluative summary, known as an annotation.</li>
      <li>Each annotation typically consists of the following components; citation, summary, evaluation and relevance.</li>
      <li>We shall look deeper into this in a while.</li>
    
    


    <h3>4. Case Studies</h3>

    <li>Case studies are detailed and in-depth examinations of a specific individual, group, event, or phenomenon.</li>
  <li>They involve collecting and analyzing qualitative and/or quantitative data to gain a comprehensive understanding of the subject under investigation. </li>
  <li>Case studies are commonly used in various fields, including psychology, business, social sciences, and healthcare, to explore real-life situations and provide rich insights into complex phenomena.</li>
     
    <li>We shall look into the key characteristics and components of case studies in the course of our learning.</li>
    


    <h3>5. Research Papers/ <br />Term Papers</h3>

    <li>Research papers are academic documents that present the results of original research or a critical analysis of existing research in a specific field of study.</li>
     <li>They are typically written by scholars, researchers, or students as part of their academic or scientific endeavors.</li>
   <li>These are elaborate, meticulous, and longer than an essay therefore broken into; introduction, background, literature review, results/discussion, and conclusion, as you will see when we cover the structure of the different papers.</li>
      

    

    <h3>6. Capstone Project</h3>

  <li>Capstone project is similar to a research/ term paper only that it takes at least two-semester
to complete.</li>
<li>It is a conventional academic paper written by nursing students in the U.S
and U.K. (nursing writers are among the leading in demand.I you are good in research you can take this as your niche.)</li>
   <li>It culminates to an extensive intellectual understanding and synthesis of the
research question or problem. </li>
 

    


    <h3>7.Master Thesis/Project <br />
     and Dissertations</h3>

    <li>These  types of papers are advanced forms of academic writing that require experience,knowledge in a subject area, analytical literature reviews and the ability to synthesize information.</li>
 <li>Masters students must write a master thesis or project before they graduate while the Ph.D. students write 
dissertations which  and are more complicated.</li>
 <li>I would not advise you to take these assignments as beginner, you should focus on the simpler papers first.</li>
 

    



    <h3>8.Reports/Speeches/PersonalStatements/ <br />
      ApplicationEssays/Scholarship Essays</h3>

    <li>They are all structured forms of writing that require you to use your
creativity and ingenuity to describe an event, suitability, or examine a
specific issue.</li>
     <li>The content to be covered here is limited since these type of papers depend on your creativity.</li>

    

    </p>

    <div class="btns">
        <button class="prv">
        <Link to='/lesson1'>Previous Lesson</Link> 
        </button>

        <button class="nxt">
            <Link to='/lesson3'>Next Lesson</Link>
        </button>

    </div>
    <br /><br />
    </section>

    

    <Footer/>

    </body>
    
  )
}

export default Lesson2