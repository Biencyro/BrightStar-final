import React from 'react'
import '../lessons.css'
import { Link } from 'react-router-dom'
import Header2 from '../../components/Header2'
import Scrollbar from '../../components/Scrollbar'
import Footer from '../../components/Footer'
import HamburgerMenu2 from '../../components/HamburgerMenu2'
import Vidd8 from './../../components/embedded-videos/Vidd8'

const Lesson8 = () => {
  return (
    <>
    <body>

        <HamburgerMenu2/>


        <Header2/>
        <Scrollbar/>

        <div className='video-emb maxWidth-100% margin-auto padding-20px position-relative'>
    <div class="display-image">
            <Vidd8/>
    </div>
    </div>

        <section class="content">

        <h1>Lesson Eight (8): Plagiarism, Paraphrasing and Citation Tools</h1>

        <h3>Plagiarism</h3>
        <p>Plagiarism is presenting work or ideas from another source as your own, with or without consent of the original author, by incorporating it into your work without full acknowledgement. <br />

        Faking references also amounts to plagiarism. <br />

        <a href="https://www.turnitin.com">Turnitin</a> is a useful tool for checking plagiarism. <br />
        </p>
        <br />

        <h4>How do you avoid plagiarism?</h4>
        You can bypass plagiarism either by <b>paraphrasing</b> your the text or by <b>referencing</b> the source of that information. <br /> <br />


        <h5><b><u>Paraphrasing</u></b></h5>
      
      <p>Paraphrasing is restating of someone else's thoughts or ideas in your own words.
      
        <li>You read a material and write it in your own words, then provide an appropriate in-text citation.</li>
        <li>Any information that is not common knowledge should be cited accordingly.</li> 
        <li>If you are in doubt whether the information is common knowledge or not, cite it.</li>
        <li>Any statistical data, dates, years, and factual information, including scientific findings and formulas, must be accompanied by in-text citations.</li>
        </p>

        <h3>Writing and Citation Tools</h3>

        <p>
        <b><a href="https://www.google.com">Google</a></b>  <br />
        Google is a useful tool for your research. However, not every search result will be helpful. Therefore, to filter your search to access pdfs only because often they are educational, use the technique below.

        <li>To search for PDFs in Google search enter your search query in this format, "Keyword" filetype: pdf</li>
        <li>E.g. <br />
        Effects of political instability on the economy of DRC filetype: pdf </li>
        <li>Google will return results that include PDFs only.</li> <br />

        <b><a href="https://scholar.google.com">Google Scholar</a></b> and <b><a href="https://books.google.com">Google books</a></b> are also invaluable tools and will come in handy in your career. 
        Firstly, as sources of reference materials and secondly, because they have in-built citation tools that create the references automatically. <br />
        Other automated citation tools include: <br />
        <ul>
          <li><a href="https://www.citationmachine.net">Citation machine</a></li>
          <li><a href="https://www.citethisforme.com">Cite this for me</a></li>
          <li><a href="https://www.easybib.com">Easybib</a></li>
          <li><a href="https://www.workscited4u.com">Works cited 4 U</a></li>
          <li><a href="https://www.bibme.org/title-page">Bib Me</a></li>
        </ul>

        <b><a href="https://www.grammarly.com">Grammarly</a></b> occupies a special place in the life of an academic writer. It helps to check grammar mistakes and has a plagiarism checker. 
        However, its artificial intelligence capability is specially built for checking grammar, and may not be a powerful tool for checking plagiarism. <br />
        Instead, use <a href="https://www.turnitin.com">Turnitin</a> for checking plagiarism. <br /> <br />

        <h5><b><u>How to use Google Scholar and Google Books</u></b></h5>
        <h6>Google Scholar</h6>
        <ul>
          <li>The two databases can be used as sources of references and citation tools.</li>
          <li>They have in-built tools to help you cite bibliographical information seamlessly.</li>
          <li>Sometimes they are not accurate. That explains why you need to understand the theory behind citations and the creation of references using the different formats.</li>
          <li>Google Scholar is a database for journals.</li>
          <li>Head over to <a href="https://scholar.google.com">https://scholar.google.com.</a></li>
          <li>Enter your search query in the search box.</li>
          <li>Then click search, as illustrated below.</li>
           <img src="/images/Plagiarism/google-scholar.PNG" alt="" /> <br />

           If you want to customize your search to a specific range of years <br />
    
            <img src="/images/Plagiarism/google-scholar1(2).png" alt="" />

            Should you elect to use PDFs or cite the sources automatically, use the procedure below <br />
            <img src="/images/Plagiarism/google-scholar2.png" alt="" /> <br />

            To generate the references automatically, <br />
             <img src="/images/Plagiarism/google-scholar3.png" alt="" /> <br />
             Copy and paste in your word processor the preferred formatting style
          <br />
          E.g., APA <br />
          <ul>Schoumaker, B., Vause, S., & Mangalu, J. (2010). Political turmoil, economic Crisis, and international migration in DR Congo: evidence from event-history Data (1975-2007).
             <i>Demographic responses to economic and environmental crises</i>, 150-171. <br />
          </ul><br />
          Repeat the procedure to get more reference materials and citations <br /> <br /><br />

          <h6>Google Books</h6>
          <li>Google books database provides free books for your research work.</li>
          <li>It is one of the largest book repositories.</li>
          <li>Follow the link <a href="https://books.google.com">https://books.google.com</a> to access Google books </li>
          <li>Or simply search Google books on your browser.</li>
          <li>Then, enter your search query in the search box.</li> 
          <img src="/images/Plagiarism/google-scholar4.PNG" alt="" /> <br />

          The results should appear as follows: <br />
          
          <img src="/images/Plagiarism/google-scholar5.PNG" alt="" /> <br />

          To use that second book as the reference, use the procedure below: <br />
          <img src="/images/Plagiarism/google-scholar6.PNG" alt="" /> <br />

          To cite the book, click on the quotation marks. <br />
          <img src="/images/Plagiarism/google-scholar7.PNG" alt="" /> <br />

          <li>Select the preferred citation style</li>
          <li>Copy the bibliographic information to your document</li>
          <li>Repeat the procedure to get more reference materials and their corresponding bibliographic information, as demonstrated in the image below.</li>
          <br />
          <img src="/images/Plagiarism/google-scholar8.PNG" alt="" /> <br />
  
        </ul>


        </p>

        <div class="btns">
        <button class="prv">
        <Link to='/lesson7'>Previous Lesson</Link> 
        </button>

        <button class="nxt">
            <Link to='/lesson9'>Next Lesson</Link>
        </button>

     </div>
        </section>

     <br /> <br />


        <Footer/>
    </body>
    </>
  )
}

export default Lesson8