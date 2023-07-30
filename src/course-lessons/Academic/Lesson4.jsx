import React from 'react'
import '../lessons.css'
import { Link } from 'react-router-dom'
import Header2 from '../../components/Header2'
import Scrollbar from '../../components/Scrollbar'
import Footer from '../../components/Footer'
import HamburgerMenu2 from '../../components/HamburgerMenu2'
import Vidd4 from './../../components/embedded-videos/Vidd4'



const Lesson4 = () => {
  return (
    <>
    <body>

    <HamburgerMenu2/>


    <Header2/>
    <Scrollbar/>

    <div className='video-emb maxWidth-100% margin-auto padding-20px position-relative'>
    <div class="display-image">
            <Vidd4/>
    </div>
    </div>

<section class="content">

  <h1>Lesson Four (4): APA Formatting Style - 7th Edition </h1>
    <p>APA (American Psychological Association) is an author/date based style, where emphasis is placed on the author and the date of a piece of work to uniquely identify it. 
      APA is most commonly used to cite sources within the social sciences</p>

      <h3>Running head</h3>
      <ul>
      Running Head is no longer a requirement as was the case in APA 6th edition. You will include it only if the client requires it. <br /><br />

      It is a shortened version of the paper’s full title <br />
      Note: It should not be completely different from the title <br /> <br />

      It cannot exceed 50 characters, including spaces and punctuation (as a rule, 5 words maximum). <br />
      The running head should be in capital letters. <br />
      It should be flush left, and page numbers should be flush right. <br /> <br />
      Only on the title page should the running head include the words “Running head” followed by a colon (:) <br />
      For pages following the title page, one should repeat the running head in capital letters but without the words “Running head.” <br />
      <img src="/images/APA/running_head.png" alt="" />
      </ul>

      <h3>Title page/ Cover page</h3>
      <ul>
      The title should be centered on the page, typed in 12-point Times New Roman Font. <br />
      It should not be bolded, underlined, or italicized. <br />
      It should be in title case* <br />
      Note: Title case means that all the notional parts of speech (verbs, nouns, pronouns, adjectives, and adverbs) and secondary parts of speech which are four letters long or longer should start with a capital letter. 
      The first word in the title or the first word after the dash or the colon should always start with a capital letter. <br /> <br />


      The title should correspond to the topic of the paper and be reflected in the running head. <br />
      The author’s name and institution should be double spaced and centered. <br />
      They should not be bolded, underlined, or italicized. <br />
      Note: Sometimes, the clients request the topic to be per the writer’s choice. 
      In such a situation, you should make the title on their own based on the topic revealed in the paper. <br /> <br />

      Moreover, very often the clients point out the subject to which the topic relates as a title of the paper (e.g. Sociology). 
      It cannot be the title of the paper. You should also make the title on their own based on the topic revealed in the paper. <br />
      <img src="/images/APA/title_page.png" alt="" />
      </ul>

      <h3>Abstract</h3>
      <ul>
      For the long papers, the second page is dedicated to Abstract. <br />
      In the abstract, you should briefly summarize the paper, which allows readers to quickly review its main points and purpose. <br />
      The abstract should be between 150-250 words.  <br />
      Abbreviations and acronyms used in the paper as well as other keywords should be defined in the abstract. <br /> <br />

      The word “Abstract” should be centered and typed in 12 point Times New Roman. <br />
      It should not be bolded, underlined, or italicized. <br />
      The first line of the abstract paragraph should be flush left (flush-left, or not indented, means that there should be no spacing before the first line of the paragraph) <br />
      <img src="/images/APA/abstract.png" alt="" /> <br /><br />
      Note: Clients sometimes do not require the Abstract to be included into the papers. But please, make sure you insert it when dealing with more complicated orders, say University papers, research papers and so on.
      </ul>

      <h3>The page following the Abstract</h3>
      <ul>
      The page following the Abstract (or the second page if the Abstract is not required) should begin with the title of the paper, which should be centered on the page, typed in 12-point Times New Roman Font. <br />
      As usual it should not be bolded, underlined, or italicized. <br />
      It should also be in title case. <br />
      <img src="/images/APA/page2.png" alt="" /> <br /><br />
      Note: Some writers erroneously regard the title of the paper as the heading of the 1st level. It is wrong. The title is just the title. 
      It is neither the 1st level heading nor the A-level heading (according to another terminology). The same concerns Abstract and References.
      </ul>

      <h3>In-text citations</h3>
      <ul>
      APA format presupposes the author-date method of in-text citation: 
      the author's last name and the year of publication for the source should appear in the text and a complete reference should appear in the References at the end of the paper.<br /> <br />

      In-text citations that are direct quotes should include the author’s/ authors’ name/s, the publication year, and page number/s: 
      (James, 2014, p. 150). Do not forget about the comma between the author’s last name and the year of publication and the period after ‘p.’ <br /><br />

      If you are just paraphrasing a source, you only have to make reference to the author and year of publication and not the page number in your in-text reference: 
      (James, 2014). Do not forget about the comma between the author’s name and the year of publication. <br /><br />

      Example: <i>In Africa, beating the heat is largely done by using the most traditional means of shade and water (James, 2014).</i> <br />

      Note: The period is put after the in-text citation. <br /><br />

     <u>If while paraphrasing</u> the idea the author’s name is mentioned in the text, only the year of publication is included into parenthesis which directly follows. 
      No in-text citation is used in the end. <br />
      Example: <i>According to James (2014), in Africa, beating the heat is largely done by using the most traditional means of shade and water.</i> <br /><br />

      But if the author’s name is mentioned before he/she <u>is quoted directly</u>, the year of publication is included into parenthesis which directly follows and the page number is put in the parenthesis at the end of the quotation. <br />
      Example: <i>According to James (2014), “In Africa, beating the heat is largely done by using the most traditional means of shade and water” (p.150).</i> <br /><br />

      If the direct quotation is 40 words, or longer, it should be put in a free-standing block of lines. No quotation marks should be used. <br />
      One should start the quotation from the new line, indented (in the same place one would begin a new paragraph). 
      Each line which follows should be also indented as the first one. Double-spacing should be maintained. 
      The parenthetical citation should come after the closing punctuation mark. <br />
      Example: <i>James’s (2014) research founded the following: In Africa, beating the heat is largely done by using the most traditional means of shade and water. Shade comes mostly from trees - Johannesburg is known for having the largest 
        man-made forest in the world with over 10 million trees planted across the city of gold. It is these trees that come in handy when it is very hot. People simply sit under the trees in the shade.</i> <br /><br />
      
      When a print source has a corporate author, one may use the name of the corporation followed by the year for the in-text citation for the first time. <br />
      If the organization has a well-known abbreviation, include the abbreviation in brackets the first time the source is cited and then use only the abbreviation in later citations. <br /> <br />
      First citation: <i>(World Trade Organization [WTO], 2000)</i> <br />
      Second citation: <i>(WTO, 2000)</i> <br /><br />


      When the author of the work is unknown, one should cite the source by its title in the signal phrase or use the first word or two in the parentheses.Titles of books and reports are italicized; titles of articles, chapters, and web pages are in quotation marks. <br />
      Example: <i>(“Annual Marathon”, 2014).</i> <br /><br />


      If no author or date is given, use the title in your signal phrase or the first word or two of the title in the parentheses and use the abbreviation "n.d." (for "no date"). <br />
      To cite multiple sources in the same parenthetical reference, separate the citations by a semicolon <br />
      Example: <i>...as has been discussed elsewhere (James, 2014; Dewey, 2015).</i>

      </ul>

      <h3>Reference to sources</h3>
      <ul>
      While referring to the title of a source within the paper, title case should be used. <br />

      Example: <i>A Darkness More Than Night</i> <br /><br />



      While using the title of a source in References, sentence case should be used. <br />

      Note: Sentence case means that only the first word, proper nouns and some other words alike should start with a capital letter. <br />
      Example: <i>Connelly, M. (2001). A darkness more than night . NY: Little Brown and Company.</i> <br />

     How to format the titles of different sources in the text: <br /> <br />
      <img src="/images/APA/ref_sources.PNG" alt="" /> 
      </ul>

      <h3>Reference to authors</h3>

      <ul>
       How to refer to one or more authors in the text of the paper as well as in the parenthesis when they are mentioned for the <u>first time in the paper</u>: <br />
        <img src="/images/APA/ref_authors.PNG" alt="" /> <br /><br />

        How to refer to one or more authors in the text of the paper as well as in the parenthesis when they are mentioned for the <u>second time in the paper and subsequently</u>: <br />
        <img src="/images/APA/no_authors.PNG" alt="" /> <br /><br />
      </ul>

      <h3>Headings</h3>
      <ul>
      In order not to be confused, we have chosen the numeric system of defining the level of headings. 
      So, further on, we will speak about 1st, 2nd, 3rd level headings and elude A, B, C level headings. <br />

      <h5>APA headings</h5>
      <li> <b>1st level: Centered, Boldface, Title Case Headings</b></li>
      <li><b>2nd level: Left-aligned (= Flush left), Boldface, Title Case Heading</b></li>
      <li><b>3rd level: Indented, boldface, sentence case heading with a period.</b> Begin the text after the period.</li>
      <li><b>4th level: Indented, boldface, italicized, sentence case heading with a period.</b> Begin the text after the period.</li>
      <li><b>5th level: </b><i>Indented, italicized, sentence case heading with a period.</i> Begin body text after the period.</li> <br />
      <img src="/images/APA/headings.png" alt="" /> <br /> <br />
      Note: <b>flush left</b> means that the heading is on the left and there is no spacing before it <br />

      <b>indented</b> means that the heading is on the left but there is some spacing before it (as a rule, 05’’ which equals to 1.27 cm) 

      </ul>


      <h3>References</h3>
      <ul>
        <li>The list of sources used in the paper should appear at the end of the paper.</li>
        <li>It should begin on a new page separate from the text of the essay.</li>
        <li>It should be labelled ‘References’ (without any other variants; and if only one source is used, it should be in plural anyway)</li>
        <li>The word ‘References’ should be centered at the top of the page (NOT bolded, not underlined, not italicized, not in quotation marks).</li>
        <li>All lines after the first line of each entry in the list should be indented one-half inch from the left margin. This is called hanging indentation</li>
        <li>Double-space all entries.</li>
        <li>Authors' names are inverted (last name first); give the last name and initials for all authors of a particular work for up to and including seven authors. 
          If the work has more than seven authors, list the first six authors and then use ellipses after the sixth author's name. After the ellipses, list the last author's name of the work. e.g. Okoth, O. S., Okelo, S., Aila, F., Awiti, A. O., Onyango, M., & Oguty, M.
          (2013). Effect of the Youth Enterprise Development Fund on youth
          enterprises in Kenya. <i>Journal of Emerging Trends in Economics and
          Management Sciences,</i> 6(3), 13-48</li>
        <li>References should be arranged in the alphabetical order.</li>
        <li>Remember that the titles of books and periodicals are italicized in the References as a rule.</li>
        <li>The articles or the chapters are not italicized. No quotation marks for them.</li>
        <li>For the titles of books the sentence case should be used.</li>
        <li>For the titles of periodicals the title case should be used.</li>
        <li>For the online sources, the word Retrieved is used (without any other variants). 
          The exception is when you use the electronic book which is not directly available online or must be purchased. 
          In this case ‘Available from’ is more logical than ‘Retrieved from’.</li> <br /><br />

          Referencing has however been simplified by some online sources: <br />
          When you use <a href="https://scholar.google.com">Google Scholar</a> sources you are given the various citation formats. 
          In this case you copy the APA format and edit it to meet the required citation criteria as we have explained. <br />

          Your can also use <a href="https://www.citethisforme.com/">Cite This For Me</a> to generate citations 
          especially when you are not sure how to cite the online sources like websites and articles. <br />
          A clear illustration of how this is done has been provided in <a href="/lesson8">Lesson8</a>. <br />

      </ul>

        <ul>To understand the APA format better, see the sample below:</ul> <br />


        <div className='samples'>
    <center>

      <h4>Sample 1:</h4>

        <embed src="/samples/APA_sample.PDF"  
               width="800"
               height="500" 
               type="" /> <br />
        <a href="/samples/APA_sample.PDF" download>Download Sample</a>

               <br /> <br />

               <h4>Sample 2:</h4>

        <embed src="/samples/APA_sample2.pdf"  
               width="800"
               height="500" 
               type="" /> <br />
        <a href="/samples/APA_sample2.PDF" download>Download Sample</a>
    </center>
    </div>
    <br /><br />
    
    <div class="btns">
        <button class="prv">
        <Link to='/lesson3'><i class="fa-solid fa-chevron-left"></i>  Previous</Link> 
        </button>

        <button class="nxt">
            <Link to='/lesson5'>Next  <i class="fa-solid fa-chevron-right"></i></Link>
        </button>

      </div>
      <br />

      <div class="btn">
        <button class="assignment">
        <Link to='/assignment3'>Assignment</Link>
        </button> 
      </div>

      <br /><br />
</section>

      

    <Footer/>

    </body>
    
    </>
  )
}

export default Lesson4