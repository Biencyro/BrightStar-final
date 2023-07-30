import React from 'react'
import '../lessons.css'
import { Link } from 'react-router-dom'
import Header2 from '../../components/Header2'
import Scrollbar from '../../components/Scrollbar'
import Footer from '../../components/Footer'
import HamburgerMenu2 from '../../components/HamburgerMenu2'
import Vidd6 from './../../components/embedded-videos/Vidd6'

const Lesson6 = () => {
  return (
    <>
    <body>

        <HamburgerMenu2/>


        <Header2/>
        <Scrollbar/>


        <div className='video-emb maxWidth-100% margin-auto padding-20px position-relative'>
    <div class="display-image">
            <Vidd6/>
    </div>
    </div>

        <section class="content">
            <h1>Lesson Six (6): Harvard Formatting Style</h1>
            <p>The Harvard style does not have a manual and there are various versions that are followed. 
                However we have worked out our own guide that will help you get through smoothly.</p>

                <h3>General Points</h3>
                <ul>
                Harvard is very similar to APA. Where APA is primarily used in the USA, Harvard referencing is the most well used referencing style in the UK and Australia, and is encouraged for use with the humanities. <br />
                Like APA, Harvard presupposes using author name/date system when citing books, articles and other documents. <br /><br />
                <li>Margins should be set at 1”.</li>
                <li>The font should be Times New Roman (Arial is also possible).</li>
                <li>Font size should be 12 pt.</li>
                <li>Text should be double-spaced.</li>
                <li>The header contains a short description of the title with the sequential page number and is placed flush left on each page.</li>
                </ul>

                <h3>Title Page</h3>
                <ul>
                    <li>Harvard formatting requires a very specific title page.</li>
                    <li>The header contains a short description of the title and a sequential page number (1). It should be present on each page.</li> <br />
                    e.g. If the title of the paper is ‘Colonization of Western Lands in the 17th century’, the header can be just ‘Colonization’.
                    <li>The header is placed flush right. Between the partial title and the number are <b>exactly five spaces</b>.</li>
                    <li>About halfway down the page is the title of the paper, in CAPS.</li>
                    <li>About three lines down the title is the student’s name, not in capital letters.</li>
                    <li>Four lines down is the name of the course, and, on the line after that, the name of the professor. Next line is the name of the university (school), then the city and state where it is located (for the USA), and, finally the date.</li> <br /><br />
                    <img src="/images/Harvard/hv_titlepage.png" alt="" />
                </ul>

                <h3>First Page</h3>
                <ul>
                    <li>The header of the first page should contain the page number 2.</li>
                    <li>Like in APA, this page should begin with the title of the paper.</li>
                    <li>It should be centered, not in CAPS, not bolded, not underlined or italicized.</li>
                    <li>It should be in <b>title case</b>title case.</li>
                    <img src="/images/Harvard/hv_firstpage.png" alt="" />
                </ul>

                <h3>In-text citations</h3>
                <ul>
                Harvard is an 'author/date' system, so the author's last name and the year of publication for the source should be stated in the text and a complete reference should appear in the reference list at the end of the paper. <br /><br />
                You should provide a citation for each fact, summary, paraphrase, or quotation you use from an outside source. If you don’t do this, it is plagiarism. <br /><br />
                Unlike in APA, there is no comma between the author’s name and the year of publication in the in-text citation. <br /> <br />
                Example: (Clark 2006) <br />
                Note: In-text citations that are direct quotes should include the author’s/ authors’ name/s, the publication year, and page number/s <br /> <br />

                In-text citations are put just after the author or the author’s work is mentioned: <br />
                Example: . a recent study (Smith 2009) has described .... <br /> <br />

                If <b><u>while paraphrasing the idea</u></b> the author’s name is mentioned in the text, only the year of publication is included into parenthesis which directly follows. <br />
                Example: According to Smith (2009), … <br /><br />

                If the author’s name is mentioned before he/she is <b><u>quoted directly</u></b> , the year of publication and the page number are included into parenthesis which directly follows: <br />
                Example: This statement is substantiated by Smith (2009, p.6) in his report… <br /><br />

                If the direct quotation is more than 30 words, it should be put in a free-standing block of lines. No quotation marks should be used. One should start the quotation from the new line, indented (in the same place one would begin a new paragraph). 
                Each line which follows should be also indented as the first one. Double-spacing should be maintained. The parenthetical citation should come after the closing punctuation mark. <br /> <br />
                Example: It was stated that: <br />
                If any similar qualitative research is to be undertaken in the future, then stringent controls should be put in place to ensure such statistical anomalies do not occur through lack of methodological rigor, particularly through corruption of data inadequately stored and processes (Mullane 2006, p.66). <br />
                Note: The actual quote can be in slightly smaller font to distinguish it from the surrounding text. <br /><br />

                When a print source has a corporate author, one may use the name of the corporation followed by the year for the in-text citation for the first time. <br />
                If the organization has a well-known abbreviation, include the abbreviation in brackets the first time the source is cited and then use only the abbreviation in later citations. <br />
                First citation: <br />
                (World Trade Organization [WTO] 2000) <br /> <br />

                Second citation: <br />
                (WTO 2000) <br /><br />

                When the author of the work is unknown, one should cite the source by its title.Titles of books are <b>neither in quotation marks nor italicized</b> in the parenthesis. However, they are italicized in the text. Titles of the chapters or articles are in <b>quotation marks</b>. <br />
                Sentence case should be used for in-text citations.  <br />
                Example: (A history of Greece 1994) <br /> <br />

                To cite multiple sources in the same parenthetical reference, separate the citations by a semicolon <br />
                Example: ... as has been discussed elsewhere (James 2014; Dewey 2015). <br /><br />

                </ul>

                <h3>Reference to Sources</h3>
                <ul>
                While referring to the title of a source within the paper and in the list of references, <b>sentence case</b> is used. <br />
                Exceptions: <br />
                As a rule, the entire website is in the title case both within the paper and in the list of references. <br /><br />
                The title of a journal is in the title case both within the paper and in the list of references (please, do not mix with the title of the article, which is in sentence case). <br /><br />

                </ul>

                <h1>Reference to Author(s)</h1>
                <ul>
                Please, remember how to refer to one or more authors in the text of the paper, in the parenthesis and in the list of references: <br /><br />
                Number of AuthorsIn the text of the paperIn the parenthesisIn the Reference List <br />
            
                <img src="/images/Harvard/hv_authors.PNG" alt="" />  <br />
                Note: Please, pay attention to the absence of periods in the the authors’ initials in the Reference List <br />
            
                </ul>

                <h3>Headings</h3>
                <ul>
                Since there is no uniform system of headings for Harvard Style, we recommend to use the same set of norms applied for the APA papers. 

                <h5>Harvard Headings</h5>
                <li><b>1st level: Centered, Boldface, Title Case Headings</b></li>
                <li><b>2nd level: Left-aligned (= Flush left), Boldface, Title Case Heading</b></li>
                <li><b>3rd level: Indented, boldface, sentence case heading with a period.</b>Begin the text after the period.</li>
                <li><b>4th level: Indented, boldface, italicized, sentence case heading with a period.</b>Begin the text after the period.</li>
                <li><b>5th level:</b><i> Indented, italicized, sentence case heading with a period</i>Begin body text after the period.</li>
                <img src="/images/Harvard/hv_levels.png" alt="" /> <br /> <br />
                <img src="/images/Harvard/hv_levels1.png" alt="" />
                </ul>

                <h3>Reference List</h3>

                <ul>
                    <li>The list of sources used in the paper should appear at the end of the paper.</li>
                    <li>It should begin on a new page separate from the text of the essay.</li>
                    <li>It may be labelled ‘References’ or ‘Reference List’.</li>
                    <li>The words ‘References’ or ‘Reference List’ should be centered at the top of the page (NOT bolded, not underlined, not italicized, not in quotation marks).</li>
                    <li>If you name the list of sources ‘Reference List’, please, mind that <b>both words begin with a capital letter</b>.</li>
                    <li>All lines after the first line of each entry in the list should be indented one-half inch from the left margin to maintain the hanging indentation.</li>
                    <li>Double-space all entries.</li>
                    <li>Authors' names are inverted (last name first). Do not put periods with the authors’ initials.</li>
                    <li>The titles of books and periodicals are italicized in the Reference List as a rule.</li>
                    <li>The articles or the chapters are not italicized. Use quotation marks for them.</li>
                    <li>Sentence case is used for all the sources except the entire websites and journal titles.</li>
                    <img src="/images/Harvard/hv_reflist.png" alt="" /> <br />
                    <li>For the online sources, the words ‘ Available from’ followed by a colon are used. After the colon, include the URL or the online source. After that, put a period and state the date of access in the square brackets. No punctuation is used inside the brackets.</li> <br />
                    <li>General Format for the book entry is: <br />
                        Book Author’s Last Name, First Initial(s) Year of Publication. Title of book capitalized like a sentence (italicized), City of Publication: Publisher.</li> <br />
                    <li>General Format for the journal article entry is: <br />
                        Article Author’s Last Name, First Initial(s) Year of Publication ‘Article title capitalized like a sentence in quotation marks’, Journal Title in the title case (italicized), volume number, issue number after letters ‘no.’, pp. pages.</li> <br />

                    <li>General Format for the website: <br />
                        The title of the Website, Year of Publication, The name of the source. Available from:(URL). [Accessed Date of Access].</li> <br />
                        <img src="/images/Harvard/hv_reflist1.png" alt="" /> <br />
                        Note: We do not provide information about how each type of source should be formatted in the References. <br />
                        Remember you can use the citations given by <a href="https://scholar.google.com">Google Scholar</a> when you use sources from there and also
                        <a href="https://www.citethisforme.com/">Cite This For Me</a> is a good citation generator. <br /><br />

                        Let’s sum up how different types of sources should be formatted in Harvard. The following table summarises what font and case should be used for the longer works and for their parts in the text of the paper and in the Reference List. <br /><br />
                        Type of the SourceIn the textIn Reference List <br />
                        <img src="/images/Harvard/hv_reflist2.png" alt="" />
                </ul>
                 
                 <h3>Summing Up…</h3>
                 <ul>
                    <h5>Basic Features of Harvard Style</h5>

                   <li> Like APA, Harvard presupposes using author name/date system when citing books, articles and other documents. <br /> </li>
                   <li>The title page contains information about the title of the paper, the student’s name, the name of the course, the professor’s name, the name of the university (school), the city and state where it is located, and the date.  <br /></li>

                   <li>The title of the paper is in CAPS on the title page and not in CAPS on the first page. <br /></li>

                   <li>There is a header on each page which contains a short description of the title and a sequential page number. <br /></li>

                   <li>Title case is used for the title of the paper (on the first page), Reference List, titles of periodicals and entire websites. In all other cases sentence case is commonly used. <br /></li>

                   <li>Headings are levelled like in APA. The title of the paper on the first page, the Reference List are not levelled. They are just centered, not bolded, in the title case. <br /></li>

                   <li>The authors’ names are inverted in the Reference List. The initials are used without periods. <br /></li>

                   <li>In the Reference List, the hanging indentation and alphabetical order of entries are maintained. <br /></li>

                   <li>For online sources, the words ‘Available from’ are used.</li>
                 </ul>

                 <div class="btns">
        <button class="prv">
        <Link to='/lesson5'><i class="fa-solid fa-chevron-left"></i>  Previous</Link> 
        </button>

        <button class="nxt">
            <Link to='/lesson7'>Next  <i class="fa-solid fa-chevron-right"></i></Link>
        </button>
     </div>
     <br />

     <div class="btn">
        <button class="assignment">
        <Link to='/assignment5'>Assignment</Link>
        </button> 
      </div>
     <br /> <br />
        </section>

        
     



        <Footer/>
    </body>
    </>
  )
}

export default Lesson6