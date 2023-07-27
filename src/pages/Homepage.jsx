import React from 'react'
import './Homepage.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../components/HamburgerMenu';


const Homepage = () => {
  return (
    <>
            <HamburgerMenu/>

        <Header/>
    <div className='course-outline'> 
        <h2>Course Lessons</h2>
        <div className='line'></div>
        <h3>Academic Writing</h3>
        <div className='lesson-container'>
        <Link to='/lesson1'>
            
            <img src="/images/pic1.jpg" alt="" />  
            <li>Lesson One (1): Introduction to Academic Writing</li> 
            <p>
            Academic writing is a specific writing style that is commonly employed in academic and scholarly settings.
            It serves the purpose of presenting research findings, discussing scholarly ideas, and contributing to the existing body of knowledge in a particular field. <br />
             This form of writing deals with homework from students all across the world who due to their busy...
            </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lessonjhhcyudfgt8wvy'>
            <img src="/images/pic2.jpg" alt="" />
            <li>Lesson Two (2): The Academic Paper (Overview Part I) </li>
            <p>
            This section introduces you to the different types of academic paper that you will be handling. 
            Academic papers are formal documents written by researchers and scholars to present their findings, analysis, and insights on a particular topic. 
            They are essential for sharing knowledge, advancing research, and contributing to the academic community... 
            </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson3'>
            <img src="/images/pic3.jpg" alt="" />
            <li>Lesson Three (3): The Academic Paper (Overview Part II)</li>
            <p>
            In this lesson we will cover an overview of the structure of the academic paper. In the previous lesson 
            we came across diferent types of papers and our main focus now will be highlighting
            their general structure so that you can relate with the writings as we proceed. <br />
                This is a broad topic therefore we have broken it into an introductory section and an advanced section...
            </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson4'>
            <img src="/images/pic4.jpg" alt="" />
            <li>Lesson Four (4): APA Formatting Style - 7th Edition</li>
            <p>
            APA (American Psychological Association) is an author/date based style, where emphasis is placed on the author and the date of a piece of work to uniquely identify it. 
            APA is most commonly used to cite sources within the social sciences. 
            In this lesson we will cover the general guidelines and structure for APA formatting.....
            </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson5'>
            <img src="/images/pic5.jpg" alt="" />
            <li>Lesson Five (5): MLA Formatting Style - 8th Edition</li>
            <p>
            MLA (Modern Language Association) style, is used to write papers and cite sources within the liberal arts and humanities.  
            In this lesson we will cover the general guidelines and structure for MLA formatting...
            </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson6'>
            <img src="/images/pic6.jpg" alt="" />
            <li>Lesson Six (6): Harvard Formatting Style</li>
            <p>
            Harvard referencing, is a commonly used formatting style for academic papers and essays. 
            It is widely used in various disciplines, including social sciences, natural sciences, and humanities 
            We have worked out our own guide that will help you get through smoothly....
            </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson7'>
            <img src="/images/pic7.jpg" alt="" />
            <li>Lesson Seven (7): Chicago Formatting Style - 17th Edition</li>
            <p>
            Chicago Formatting Style is a citation and writing style guide used in various academic disciplines, particularly in the fields of history, literature, and social sciences. 
        It was developed by the University of Chicago Press and is currently in its 17th edition...
            </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson8'>
            <img src="/images/pic8.jpg" alt="" />
            <li>Lesson Eight (8): Plagiarism, Paraphrasing and Citation Tools</li>
            <p>
            Plagiarism, paraphrasing, and citation tools are the essential aspects of academic writing and research that you need as you embark on your writing career. <br />
            In this lesson we will explore each of these concepts and the tools associated with them...
            </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson9'>
            <img src="/images/pic9.jpg" alt="" />
            <li>Lesson Nine (9): Academic Writing Jobs</li>
            <p>
            The main purpose of offering this training is to help you fit in the academic writing industry and earn like other writers do.
            In this lesson you will learn how to <b>set your profile</b> as a writer, <b>apply for jobs</b> in the various <b>writing accounts</b> and join <b>academic writing forums</b>...
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson10'>
            <img src="/images/pic10.jpg" alt="" />
            <li>Lesson Ten (10): Dealing With Clients</li>
            <p>
            In the course of your writing career you will interact different types of clients. Some will be good and others will be bad clients. 
            In this lesson you will learn how to get clients and how to deal with each of these categories...
        </p>
        </Link>
        </div>

        <h3>Article Writing</h3>

        <div className='lesson-container'>
        <Link to='/lesson11'>
            <img src="/images/pic11.jpg" alt="" />
            <li>Lesson Eleven (11): Introduction to Article Writing</li>
            <p>
            In this comprehensive course, we'll cover everything you need to know to become a proficient article writer. 
        From understanding the basics of article structure to crafting compelling content, we'll provide you with practical examples to reinforce your learning. 
        Let's get started!...
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson12'>
            <img src="/images/pic12.jpg" alt="" />
            <li>Lesson Twelve (12): Structure and Organization</li>
            <p>
            The structure and organization of an article play a crucial role in effectively conveying the information to the readers. 
            Whether it's a research paper, a feature article, or an opinion piece, a well-organized article helps readers follow the content logically and enhances the overall readability...
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson13'>
            <img src="/images/pic13.jpg" alt="" />
            <li>Lesson Thirteen (13): Writing Style and Language</li>
            <p>
            Article writing style and language are critical aspects that determine how effectively your message is communicated to your target audience. 
            In this lesson we will cover the key elements to consider when crafting the style and language of your article...
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson14'>
            <img src="/images/pic14.jpg" alt="" />
            <li>Lesson Fourteen (14): Engaging Readers with Compelling Content</li>
            <p>
            Engaging readers with compelling content is essential for any article to be successful. 
            In this lesson we will look into the various strategies employed to create content that captivates your audience...
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson15'>
            <img src="/images/pic15.jpg" alt="" />
            <li>Lesson Fifteen (15): SEO for Article Writers</li>
            <p>
            Search Engine Optimization (SEO) is crucial for article writers who want to ensure their content is discoverable and ranks well in search engine results. 
            To cater for that we have generated the SEO strategies that you can use to boost your SEO ranking...
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson16'>
            <img src="/images/pic16.jpg" alt="" />
            <li>Lesson Sixteen (16): Ethical Considerations in Article Writing</li>
            <p>
            Ethical considerations in article writing refer to the principles and guidelines that writers should follow to ensure the integrity, honesty, and responsible conduct of their work. 
            They encompass a range of factors, including the treatment of sources, proper attribution of ideas, and the handling of sensitive or controversial topics...
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson17'>
            <img src="/images/pic17.jpg" alt="" />
            <li>Lesson Seventeen (17): Building a Writing Portfolio</li>
            <p>
            Building an article writing portfolio is an important step for showcasing your skills and expertise to potential clients or employers. 
            A well-organized portfolio can demonstrate your writing style, range of topics, and ability to engage readers. 
            We will help you create an impressive article writing portfolio...
        </p>
        </Link>
        </div>

        <h3>Blog Writing</h3>

        <div className='lesson-container'>
        <Link to='/lesson18'>
            <img src="/images/pic18.jpg" alt="" />
            <li>Lesson Eighteen (18): Introduction to Blog Writing</li>
            <p>
            Blog writing is a form of online content creation that involves writing informative, engaging, and often informal articles on a specific topic or niche. 
            Blogs are typically published on websites or blog platforms, and they serve various purposes, such as sharing knowledge, expressing opinions, promoting products or services, and building an online community...
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson19'>
            <img src="/images/pic19.jpg" alt="" />
            <li>Lesson Nineteen (19): Identifying Your Target Audience</li>
            <p>
            Identifying your target audience is a crucial step in developing a successful content strategy and marketing plan for your blog. 
            We will guide you on identifying your target audience and understanding them for you to tailor your messaging, content, and marketing efforts....
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson20'>
            <img src="/images/pic20.jpg" alt="" />
            <li>Lesson Twenty (20): Content Planning and Idea Generation</li>
            <p>
            Content planning and idea generation are critical steps in creating compelling and valuable content for your audience. 
            Proper planning ensures that your content aligns with your goals, target audience, and overall content strategy. 
            Here we will equip you with the skills for effective content planning and idea generation...
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson21'>
            <img src="/images/pic21.jpg" alt="" />
            <li>Lesson Twenty One (21): Mastering Blog Writing Techniques</li>
            <p>
            You will require practice and dedication to master blog writing techniques whether you're new to blogging or looking to enhance your writing skills. 
            Here at Brightstar Academy we offer you the essential techniques to help you become a successful blog writer...
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson22'>
            <img src="/images/pic22.jpg" alt="" />
            <li>Lesson Twenty Two (22): Search Engine Optimization (SEO) for Blogs</li>
            <p>
            Search Engine Optimization (SEO) is essential for your blogs to improve their visibility in search engine results and attract more organic traffic. 
            In this lesson we will look into the SEO techniques specifically tailored for optimizing blogs...
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson23'>
            <img src="/images/pic23.jpg" alt="" />
            <li>Lesson Twenty Three (23): Promoting Your Blog</li>
            <p>
            Promoting your blog is essential to increase its visibility, attract readers, and grow your audience. 
            We have consolidated the effective strategies to promote your blog and get it in front of the right audience...
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson24'>
            <img src="/images/pic24.jpg" alt="" />
            <li>Lesson Twenty Four (24): Building a Community and Long-Term Growth</li>
            <p>
            Building a community and achieving long-term growth in blogging require dedication, consistent effort, and a focus on delivering value to your audience. 
            We have compiled the strategies you require to foster a thriving community and ensure sustained growth in your blogging journey...
        </p>
        </Link>
        </div>

        <h3>SEO Writing</h3>

        <div className='lesson-container'>
        <Link to='/lesson25'>
            <img src="/images/pic25.jpg" alt="" />
            <li>Lesson Twenty Five (25): Introduction to SEO Writing</li>
            <p>
            SEO writing is a specialized form of content writing that aims to optimize web content to rank higher in search engine results pages (SERPs). 
          The primary goal of SEO writing is to attract more organic (non-paid) traffic to a website by targeting specific keywords and phrases that users commonly use when searching for information online....
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson26'>
            <img src="/images/pic26.jpg" alt="" />
            <li>Lesson Twenty Six (26): Keyword Research</li>
            <p>
            Keyword research is a crucial process in Search Engine Optimization (SEO) that involves identifying the most relevant and popular keywords or phrases that people use to search for information, products, or services online. 
            Conducting effective keyword research helps you understand what your target audience is looking for and allows you to optimize your content and website to align with their search intent....
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson27'>
            <img src="/images/pic27.jpg" alt="" />
            <li>Lesson Twenty Seven (27):  Creating High-Quality Content</li>
            <p>
            Creating high-quality content is essential for attracting and engaging your target audience. High-quality content not only boosts your search engine rankings but also establishes your credibility and authority in your niche. 
            In this lesson we cover the key principles to follow when creating high-quality content....
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson28'>
            <img src="/images/pic28.jpg" alt="" />
            <li>Lesson Twenty Eight (28): Technical SEO Basics</li>
            <p>
            Technical SEO is a critical aspect of search engine optimization that focuses on improving the technical aspects of a website to enhance its visibility and ranking in search engine results. 
            In this lesson we will outline the technical SEO basics to consider in SEO writing....
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson29'>
            <img src="/images/pic29.jpg" alt="" />
            <li>Lesson Twenty Nine (29): Local SEO Writing</li>
            <p>
            Local SEO writing focuses on optimizing content to attract local audiences and improve a business's visibility in local search results. It is essential for businesses that operate in specific geographic areas and want to target local customers. 
            We provide you with the strategies for local SEO writing in this lesson....
        </p>
        </Link>
        </div>

        <div className='lesson-container'>
        <Link to='/lesson30'>
            <img src="/images/pic30.jpg" alt="" />
            <li>Lesson Thirty (30): SEO Writing Best Practices</li>
            <p>
            To conclude our course we will cover the SEO writing best practices. These refer to the guidelines and techniques that writers follow to optimize their content for search engines while maintaining high-quality, valuable, and user-friendly content. 
            These practices help improve a website's visibility in search engine results and attract organic traffic from relevant searches...
        </p>
        </Link>
        </div>

        <Link to='/payment1'>
            <button>Sign Up for our Full Course</button>
        </Link>

    </div>

    
        

        <Footer/>


    </>
  )
}

export default Homepage