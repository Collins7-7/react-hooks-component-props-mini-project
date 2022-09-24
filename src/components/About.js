const About = ({aboutData}) => {
    return ( 
        <aside>
            <img src={aboutData.image= "https://via.placeholder.com/215"} alt="blog logo" />
            <p>{aboutData.about}</p>
        </aside>
     );
}
 
export default About;