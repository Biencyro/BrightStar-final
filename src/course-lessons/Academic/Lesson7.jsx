import React from 'react'
import '../lessons.css'
import { Link } from 'react-router-dom'
import Header2 from '../../components/Header2'
import Scrollbar from '../../components/Scrollbar'
import Footer from '../../components/Footer'
import HamburgerMenu2 from '../../components/HamburgerMenu2'
import Vidd7 from './../../components/embedded-videos/Vidd7'





const Lesson7 = () => {
  return (
    <>
    <body>

      <HamburgerMenu2/>


        <Header2/>
        <Scrollbar/>

        <div className='video-emb maxWidth-100% margin-auto padding-20px position-relative'>
    <div class="display-image">
            <Vidd7/>
    </div>
    </div>
        <section class="content">
        <h1>Lesson Seven (7): Chicago Formatting Style - 17th Edition</h1>

        <p>
        Chicago Formatting Style is a citation and writing style guide used in various academic disciplines, particularly in the fields of history, literature, and social sciences. 
        It was developed by the University of Chicago Press and is currently in its 17th edition.
        </p>

        <h3>Cover Page/ Title Page</h3>
        <ul>
            <li>Title of the Paper is centered a third from the upper margin of the page.</li>
            <li>Student's information, such as class, course name, and date, follows a few lines from the title.</li>
            <li>There is no page number on the title page/cover page. Page one begins on the next page. Format text in Times New Roman, Font 12. </li>
            <li>The citation style is typically used in writing Christian religious papers.</li> <br />
            <img src="/images/Chicago/chicago-titlepg.PNG" alt="" />

        </ul>
        <h3>In-text citations</h3>
        <ul>
        In the same way, APA and MLA have in-text citations; in Chicago, they are regarded as footnotes or endnotes. Each bibliography has a corresponding
        footnote/endnote, as demonstrated below. <br />
        Superscripts act as in-text citations.  <br />
        <img src="/images/Chicago/chicago-intext.PNG" alt="" />

        </ul>

        <h3>Bibliography</h3>
        <ul>
        The bibliography is the list of all references in Chicago <br />

        <img src="/images/Chicago/chicago-bibliography.PNG" alt="" />

        <h5>Books</h5>
        <b><u>Bibliography</u></b> <br />

        <b>One author</b> <br />
        
        <li> Surname, Other Names. <i>Title of the Book in Italics</i>. City of publication: Publisher, Year</li>
        E.g. <br />
         <li>Pettinger, Tejvan. <i>Cracking economics</i>. London: Cassel Illustrated, 2017.</li> <br />

         <b><u>Footnote/ Endnote</u></b> <br />

         <li>Other Name, Surname, <i>Title of the Book in Italics</i> (City of publication: Publisher, Year) page number</li>
         <li>1. Tejvan Pettinger, <i>Cracking economics</i> (London: Cassel Illustrated, 2017), 13</li> <br />

         <b>Book by Several Authors</b> <br />
         Two or more authors of a book need to be listed in the order they appear on the title not alphabetically <br />
         
         E.g. <br />
         <b><u>Bibliography</u></b> <br />

         <li> Janoski, Thomas, David Luke, and Christopher Oliver <i>The causes of structural unemployment: four factors that keep people from the jobs they deserve</i>. Malden: Cambridge University Press, 2014.</li> <br />
         <b><u>Footnote/Endnote</u></b> <br />

         <li>2. Thomas, Janoski, David Luke and Christopher Oliver, <i>The causes of structural unemployment: four factors that keep people from the jobs they deserve</i> (Malden: Cambridge University Press, 2014) 25</li> <br />

         <h5>Journals/Periodicals</h5>
         <b><u>Bibliography</u></b> <br />

         <li>Surname, Other Names. "Title of the Journal in Quotation Marks." <i>Name of the Journal in Italics</i> volume no, issue no. (Year of publication): page numbers.</li> 
         Example: <br />
         <li>Rempel, Henry. "Rural-urban migration and urban unemployment in Kenya." <i>International Institute for Applied Systems Analysis</i> 10, no. 3(1981): 254-314.</li> <br />

         <b><u>Footnote/ Endnote</u></b> <br />
         <li>3. Henry Rempel, "Rural-urban migration and urban unemployment in Kenya," <i>International Institute for Applied Systems Analysis</i> 10, no. 3(1981): 255.</li> <br />

         <h5>YouTube Videos</h5>

         <b><u>Bibliography</u></b> 
         <li>Follow the general format and be sure to include the URL</li>
         <li>Username. "Title of the Video in Quotes." Name of the Website. Publication date. URL</li>
         E.g. <br />
         <li>DW Africa, "Why are many young Kenyans unemployed?," YouTube, June 7th, 2019, https://www.youtube.com/watch?v=YeDf9X1Ksjc</li> <br />

         <b><u>Footnote/ Endnote</u></b> <br />
         <li> DW Africa, "Why are many young Kenyans unemployed?," YouTube, June 7th, 2019, https://www.youtube.com/watch?v=YeDf9X1Ksjc</li>

         <h3>Headings</h3>

         <h5>Chicago Headings</h5>
         <li><b>1st level: Titles Centered, Title Case and Bold</b></li>
         <li><b>2nd level:</b>Centered, title case, not bold</li>
         <li><b>3rd level: Flush left, bold</b></li> <br />

         <img src="/images/Chicago/chicago-headings.PNG" alt="" />

         
        </ul>


        <div class="btns">
        <button class="prv">
        <Link to='/lesson6'><i class="fa-solid fa-chevron-left"></i>  Previous</Link> 
        </button>

        <button class="nxt">
            <Link to='/lesson8'>Next  <i class="fa-solid fa-chevron-right"></i></Link>
        </button>

     </div>
     <br /> <br />
        </section>



        <Footer/>

    </body>
    </>
  )
}

export default Lesson7