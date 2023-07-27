import React from 'react'
import '../lessons.css'
import { Link } from 'react-router-dom'
import Header2 from '../../components/Header2'
import Scrollbar from '../../components/Scrollbar'
import Footer from '../../components/Footer'
import HamburgerMenu2 from '../../components/HamburgerMenu2'
import Vidd3 from './../../components/embedded-videos/Vidd3'

const Lesson3 = () => {
  return (
    <>
<body>
    <HamburgerMenu2/>


    <Header2/>
    <Scrollbar/>

    <div className='video-emb maxWidth-100% margin-auto padding-20px position-relative'>
    <div class="display-image">
            <Vidd3/>
    </div>
    </div>

      <section class="content">
      <h1>Lesson Three (3): The Academic Paper (Overview Part II) </h1>
      <p>In this lesson we will cover an overview of the structure of the academic paper</p>

      <ul>In the previous lesson we came across diferent types of papers and our main focus now will be highlighting
         their general structure so that you can relate with the writings as we proceed. <br />
      This is a broad topic therefore we have broken it into an introductory section and advanced section.</ul>

      <h2>Basic elements of the paper</h2>
      <p>Each paper contains the following parts</p>
      <ul>
        <li>Introduction</li>
        <li>Main Body</li>
        <li>Conclusion</li>
      </ul>
      <p>Your paper should be <i>united by one main idea</i>, which should be announced in the thesis statement.
         As you write, constantly check your paper so that all paragraphs relate to the main idea and that you <i>do not repeat yourself</i>.
         Stay focused on the logical flow of text, and present points one by one, without jumping back and forth.</p>
          
          <h3>Introduction</h3>
        <p> Introductions are meant to unveil the main point of the paper. It is reasonable to start them with a “hook” - a sentence or two which grab the reader’s attention (may as well be: a question, a little-known fact, a meaningful quote). <br />
          Check this out: </p>
          <ul><i>"Imagine a world where machines can predict the future with astonishing accuracy, revolutionizing the way we make decisions.
             Sounds like something straight out of a science fiction movie, right? Well, believe it or not, this is not just a fictional concept anymore. 
            In recent years, advancements in artificial intelligence and predictive analytics have brought us closer than ever to unlocking the power of accurate future forecasting. 
            In this article, we will explore the cutting-edge technologies and potential implications of this exciting new frontier."</i></ul> <br />

           <p>Instead of focusing on details, introductions should only contain basic background information and end with a proper thesis statement. <br />

           <i>The thesis statement</i> is a sentence or two in the text that contains the focus of the paper and tells the reader what the paper is going to be about. 
          This is the <i>most important part</i> of the paper since its entirety hangs on that sentence. 
          A proper thesis should provide a definite position regarding the main idea, be debatable and specific. </p>


          <h3>Main Body</h3>

          <p>Each body paragraph should be dedicated to one topic that is part of the thesis. <br />
          NB: They cannot begin or end with the citation. <br />
          All paragraphs — while they discuss different subjects — follow the same structure: <br />
          <b>topic sentence -> supporting evidence -> analysis -> link</b></p> <br />

          <ul>
            <i> <b> The topic sentence</b> </i>should clearly identify what is going to be discussed in the paragraph. <br />
             A topic sentence should not only announce the core idea of the paragraph but also connect this idea to the central idea of the paper. <br />
              e.g. <i>Smoking is directly connected to dangerous health problems. According to the Centers for Disease and Control,…</i>
              <br /> <br />

             <i><b> Relevant supporting evidence</b></i> must be provided to support the claim or develop the idea stated in the topic sentence. <br />
               Properly integrated evidence does not randomly appear in your text. In fact, <i><b>citations</b></i> are used to back up your own thoughts and opinions. 
               In other words, you should provide context before using citations from the external sources. A solid paragraph should present at least 2 supporting details.
               Studies, statistics, reports, interviews, anecdotes can be used to support the topic sentence. <br /> <br />

               e.g. <i>Smoking is directly connected to dangerous health problems. According to the Centers for Disease and Control, smoking is the cause of almost 500,000 deaths a year in the United States. 
               The CDC also states, "More deaths are caused each year by tobacco use than by all deaths from human immunodeficiency virus (HIV), illegal drug use, alcohol use, motor vehicle injuries, suicides, and murders combined." </i><br />
               <br />
               <i><b>Analysis of the evidence</b></i> that has been provided and explaination of how the evidence supports the paragraph’s main idea must be done by the writer. <br /> <br />

               Evidence: <i>According to the Centers for Disease and Control, smoking is the cause of almost 500,000 deaths a year in the United States. The CDC also states, "More deaths are caused each year by tobacco use than by all deaths from human immunodeficiency virus (HIV), illegal drug use, alcohol use, motor vehicle injuries, suicides, and murders combined."</i> <br />  <br />
               Analysis: <i>All evidence clearly states that smoking is detrimental to an individual’s health, and with the negative consequences, it is difficult to believe that any university would support such a death sentence.</i> <br /> <br />
               The final sentence or sentences of the paragraph should <i>link</i> the current paragraph’s main idea to the main idea in the next passage. <br /> <br />

               Analysis: <i>All evidence clearly states that smoking is detrimental to an individual’s health, and with the negative consequences, it is difficult to believe that any university would support such a death sentence.</i>  <br /><br />
               Link: <i>Smoking not only causes serious health problems for the individual but also affects those who choose not to smoke.</i> <br /><br />
               Topic Sentence of the Following Paragraph: <i>Non-smokers should not be subjected to secondhand smoke.</i>  <br /><br />

               <b>Remember</b>: It is important to make transitions not only between paragraphs, but within paragraphs as well. Instead of using linking phrases all the time, you can also use pronouns, articles, repetitions, and synonyms to make transitions.
          </ul>


          <h3>Conclusion</h3>

          <p>
          Conclusions serve as a means to finish the discussion and to sum-up the main idea. They should begin with the reworded version of a thesis statement. They should not contain citations or any new information. Apart from summarizing the main points of the paper, a proper conclusion should end with a closing statement. This statement should encourage the reader to think, creating a strong final impression.
          </p>
          <br /><br />

          <h5>Organization of ideas</h5>

          <ul>
          Here are the ways to present supporting details within a paragraph:
          <li>chronological order</li>
          <li>order of importance</li>
          <li>comparison/contrast</li>
          <li>spatial order</li>
          <li>order of familiarity</li>
          <br /><br />


          <i>Chronological</i> paragraphs describe events in the order they occurred. It is particularly effective for explaining a process. 
          Chronological approach is usually used in step-by-step instructions, historical data, and plot summaries <br />
          Linking words/phrases: first, second, finally, next, then, afterward, later, before, eventually, in the future, immediately, as soon as, meanwhile, etc. <br />
          e.g. <i>Assignment writing as a method of assessment is only a fairly recent academic activity. 
            Towards the end of the 19th century, most higher education assessment was dominantly oral. At the turn of the century, academic research became a popular activity, thus creating a writing culture. 
            Up to the mid 1960s, most essay writing for assessment was done under exam conditions and mainly in Arts subjects. 
            Setting assignment tasks has been a feature of university coursework since the 1960s when the role of essays as assignments became recognised for its educational advantage. </i> <br /><br />

          When using the <i>order of importance</i> pattern of organization, information can be structured from most important to least important or least important to most important. <br />
          Linking words/phrases: more/most importantly, the second most significant, the primary, another key point, etc. <br />
          e.g. <i>Part-time jobs can be perfect for a student if they do not interfere with school. Most importantly, the employer must follow the state and federal regulations for employing minors. 
            An employer should also offer flexibility with scheduling to accommodate major projects or extra-curricular activities for school. 
            Some employers even create incentive programs designed to encourage students to keep up their grades. </i> <br /><br />

          To <i>compare</i> means to discuss the similarities between 2 or more things, and to <i>contrast</i> implies to present the differences between them.
          If the paper is dedicated to both similarities and differences, you should consider organizing the piece so that you discuss similarities in one paragraph or group of paragraphs and differences in another. <br />
          Linking words/phrases for comparison: equally, similarly, both, as … as, neither ... nor, just as, too, in the same way, etc. <br />
          Linking words/phrases for contrast: but, unlike, however, in contrast, on the contrary, while, although, despite, yet, on the one hand … on the other hand, etc. <br />
          e.g. <i>The San Juan Islands off the coast of Washington State and Cape Cod in Massachusetts are alike in many ways. Both areas are in coastal climates and have similar weather patterns. Both offer a similar, low-key lifestyle to the residents. </i> <br /><br />


        <i>Spatial order</i> presupposes organizing content so that the details are described in the order of their physical location. It is a logical progression of a view that proceeds usually from left to right and top  to bottom. 
        This method of description helps the readers visualize the scene better. Spatial order is often used for descriptive writing. <br />
        Linking words/phrases: beside, in the middle, next to, to the right, on top of, in front of, behind, against, and beneath. <br />
        e.g. <i>When you enter the mansion, the great hall has three ornate doorways and a grand staircase. The doorway to the left leads to the kitchen area, the doorway to the right leads to the library, and the doorway straight ahead leads to the formal dining room. 
          The staircase curves up to the second floor. Directly above, you will see the famous “Chandelier de Grouton,” with over 4,000 crystals teardrops. </i><br /><br />

        <i>Order of familiarity</i> approach involves discussing things that are familiar to the reader first and then moving on to things with which the reader is likely increasingly less familiar. 
        As the context broadens to include them, the unfamiliar ideas may seem less strange or unreasonable. <br />
        Linking words/phrases: already, obviously, no doubt, recently, surprisingly, etc. <br />
        e.g. <i>The Human Genome Project’s goal is to define all human genes. Scientists have already described, in detail, the genes of simple species such as yeast, bacteria, roundworms, and fruit flies. 
          Recently, they began to unlock the genomes of the cow, rat, and dog. What many people do not know is that scientists have been decoding the genes of the common house cat and finding similarities to human genes. 
          The study shows that humans are more closely related to cats than to any other animal group studied so far except primates. </i> <br /><br />

          </ul>

          <h5>Sentence Variety</h5>
          <p>To make your paragraphs easier to read, it is recommended to create sentences different in length. Too many sentences of a similar length might seem robotic. 
            Additionally, you can create sentence variety using different ways of beginning them: <br />
          </p>
            <ul>
          <b>Single-word modifier</b>- <u>Recently</u>, quite a few studies have investigated the correlation between health status and quality of life. <br />
          <b>Adverbial phrase</b>- <u>After the exhibition</u>, the artist won international fame. <br />
          <b>Participial and infinitive phrases</b> -	<u>Living in Chicago</u>, the writer made a name for himself. <br />
          <b>Clause modifier </b> -	<u>When the company acquired the R.T. Knudsen Co. in 1984</u>, it entered into the natural foods business. <br />
          <b>Appositive (a noun/noun phrase that renames another noun)</b> - <u>A frequently misdiagnosed condition</u>, iron overload can lead to serious diseases. <br />
            </ul>

            <p>
            Also, do not overuse too long and complex sentences as they quickly make the reader tired and make it harder to concentrate. The optimal length of a sentence is approximately 20 words.
            If the sentence is longer, try dividing it into several shorter sentences. <br />
            Compare: <br />
            <ul><i> "Because the majority of the assessments were completed in hospital, with a small proportion of participants completing their assignment at home or over the telephone, 
              the research results can hardly be applicable to a wider population in a different setting."</i></ul> <br />
              and; <br />
            <ul><i>"The majority of the assessments were completed in hospital, with a small proportion of participants completing their assignment at home or over the telephone. 
              Therefore, the research results can hardly be applicable to a wider population in a different setting."</i> </ul>
              </p>

         
              <div class="btns">
        <button class="prv">
        <Link to='/lessonjhhcyudfgt8wvy'>Previous Lesson</Link> 
        </button>

        <button class="nxt">
            <Link to='/lesson4'>Next Lesson</Link>
        </button>

      </div>
      <br />

      <div class="btn">
        <button class="assignment">
            <a href="assignment2.jsx">Assignment</a> 
        </button>

       
    </div>
    <br /><br />
      </section>

      

    <Footer/>

</body>

    </>
  )
}

export default Lesson3